import React from "react";
import NftCard from "./NftCard";

const DisplayNfts = ({ nfts }) => {
  return (
    <div className="flex flex-col  w-full items-center justify-between  flex-wrap px-5 space-y-10 lg:px-0 lg:space-y-0 lg:flex-row">
      {nfts.map((nft, i) => (
        <NftCard nft={nft} key={i} />
      ))}
    </div>
  );
};

export default DisplayNfts;
