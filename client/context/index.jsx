import React, { useContext, createContext, useState } from "react";

import {
  useAddress,
  useContract,
  useMetamask,
  useContractWrite,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const { contract } = useContract(process.env.NEXT_PUBLIC_API_URL);

  const { mutateAsync: createNFT } = useContractWrite(contract, "createNFT");

  const address = useAddress();
  const connect = useMetamask();

  const publishNFT = async (form) => {
    try {
      const data = await createNFT([
        address,
        form.title,
        form.description,
        form.price,
        form.image,
      ]);

      console.log("Contract call success", data);
    } catch (error) {
      console.log("Contract call failured", error);
    }
  };

  const getNFTs = async () => {
    const nfts = await contract.call("getNFTS");

    const parsedNfts = nfts.map((nft, i) => ({
      id: i,
      owner: nft.owner,
      name: nft.title,
      description: nft.description,
      price: ethers.utils.formatEther(nft.price),
      image: nft.image,
      isListed: nft.isListed,
      isShowcase: nft.isShowcase,
      isHidden: nft.isHidden,
    }));

    return parsedNfts;
  };

  const getExploreNFTs = async () => {
    const allNfts = await getNFTs();
    const exploreNfts = allNfts.filter((nft) => nft.isListed && !nft.isHidden);

    return exploreNfts;
  };

  const getShowcaseNFTs = async () => {
    const allNfts = await getNFTs();
    const showcaseNfts = allNfts.filter(
      (nft) => nft.isShowcase && !nft.isHidden
    );

    return showcaseNfts;
  };

  const getUserNFTs = async () => {
    const allNfts = await getNFTs();
    const userNfts = allNfts.filter(
      (nft) => nft.owner === address && !nft.isHidden
    );

    return userNfts;
  };

  const getSingleNFT = async (id) => {
    const nft = await contract.call("nfts", id);

    const parsedNft = {
      id,
      owner: nft.owner,
      name: nft.title,
      description: nft.description,
      price: ethers.utils.formatEther(nft.price),
      image: nft.image,
      isListed: nft.isListed,
      isShowcase: nft.isShowcase,
      isHidden: nft.isHidden,
    };

    return parsedNft;
  };

  const buyNFT = async (id) => {
    try {
      await contract.call("buyNft", id);
    } catch (error) {
      console.log("Contract call failured", error);
    }
  };

  const listNFT = async (id) => {
    try {
      await contract.call("listNFT", id);
    } catch (error) {
      console.log("Contract call failured", error);
    }
  };

  const unlistNFT = async (id) => {
    try {
      await contract.call("unlistNFT", id);
    } catch (error) {
      console.log("Contract call failured", error);
    }
  };

  return (
    <StateContext.Provider
      value={{
        address,
        contract,
        createNFT: publishNFT,
        connect,
        getNFTs,
        getUserNFTs,
        getSingleNFT,
        buyNFT,
        getShowcaseNFTs,
        listNFT,
        unlistNFT,
        getExploreNFTs,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
