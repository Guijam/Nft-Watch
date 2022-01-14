
import axios from "axios";

export interface ItemDetails {
    nft: {
        address: string;
        creator: string;
        history: HistoryItem[];
        tokenId: string;
        uri: string;
    };
}

export interface HistoryItem {
    action: string;
    actionId: string;
    data: string;
    hash: string;
    id: string;
    numericId: string;
    timestamp: string;
    version: number;
}

export interface ERC711Metadata {
    name: string;
    description: string;
    image: string;
    attributes: {
        trait_type: string;
        value: string;
    }[];
}

export const fetchItemHistory = async (
    contract: string,
    tokenId: number
): Promise<ItemDetails> => {
    const { data } = await axios.get(
        `https://api.paintswap.finance/nft/${contract}/${tokenId}`,
        {
            params: {
                allowNFSW: true,
                numToFetch: 10,
            },
        }
    );

    return data;
};

export const fetchNftMetadata = async (
    uri: string
): Promise<ERC711Metadata | null> => {
    try {
        const { data } = await axios.get(uri);

        return data;
    } catch (err) {
        console.log("error fetching metadata");
        return null;
    }
};

export const fetchNftImage = async (uri: string) => {
    try {
        const { data } = await axios.get(uri, {
            responseType: "arraybuffer",
        });

        return data;
    } catch (err) {
        console.log("error fetching image");
        return {};
    }
};

export interface Stats {
    floor:number,
    totalVolumeTraded:number,
    lastSellPrice:number,
    activeSales:number
}

export interface Collection {
    id: string,
    createdAt: string,
    updatedAt: string,
    address: string,
    owner: string,
    name: string,
    description: string,
    nsfw: boolean,
    mintPriceLow: number,
    mintPriceHigh: number,
    verified: boolean,
    startBlock: number,
    website: string,
    twitter: string,
    discord: string,
    medium: string,
    telegram: string,
    reddit: string,
    poster: string,
    banner: string,
    thumbnail: string,
    standard: string,
    featured: boolean,
    displayed: boolean,
    imageStyle: string,
    customMetadata: string,
    floor: number,
    totalVolumeTraded: number,
    lastSellPrice: number,
    activeSales: number,
    stats:Stats
}
