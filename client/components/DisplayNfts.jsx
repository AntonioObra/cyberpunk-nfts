import React from "react";
import NftCard from "./NftCard";

const DisplayNfts = ({ nfts }) => {
  return (
    <div className="flex flex-col md:flex-row w-full items-center justify-start space-x-10">
      {nfts.map((nft, i) => (
        <NftCard nft={nft} key={i} />
      ))}
    </div>
  );
};

export default DisplayNfts;
