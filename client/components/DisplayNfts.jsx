import React from "react";
import NftCard from "./NftCard";

const DisplayNfts = ({ nfts }) => {
  return (
    <div className="flex flex-col  w-full items-center justify-between  flex-wrap px-5  lg:px-0  gap-y-10 lg:gap-y-14 xl:gap-y-16 2xl:gap-y-20 lg:flex-row">
      {nfts.map((nft, i) => (
        <NftCard nft={nft} key={i} />
      ))}
    </div>
  );
};

export default DisplayNfts;
