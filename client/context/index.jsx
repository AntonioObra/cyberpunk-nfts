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
  const { contract } = useContract(
    "0xeA3eD2BEb51651AE5bCf192F853C25a8f73e5126"
  );

  const { mutateAsync: createNFT } = useContractWrite(contract, "createNFT");

  const address = useAddress();
  const connect = useMetamask();

  const publishNFT = async (form) => {
    try {
      console.log(form);

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

    console.log(nfts);

    const parsedNfts = nfts.map((nft, i) => ({
      id: i,
      owner: nft.owner,
      name: nft.title,
      description: nft.description,
      price: ethers.utils.formatEther(nft.price),
      image: nft.image,
    }));

    return parsedNfts;
  };

  const getUserNFTs = async () => {
    const allNfts = await getNFTs();
    const userNfts = allNfts.filter((nft) => nft.owner === address);

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
    };

    return parsedNft;
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
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
