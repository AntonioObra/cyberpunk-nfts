import Image from "next/image";
import React from "react";
import Link from "next/link";

const NftCard = ({ nft }) => {
  return (
    <div className=" w-full md:w-[30%] rounded-3xl overflow-hidden cursor-pointer mb-20 shadow-2xl shadow-rose-500/5 hover:shadow-rose-500/50 transition-all duration-200 ">
      <Link href={`/nfts/${nft.id}`}>
        <div className="flex flex-col relative group">
          <Image
            src={nft.image}
            alt=""
            width={500}
            height={500}
            className="w-full h-[400px] object-cover rounded-3xl group-hover:scale-105 transition-all duration-200 ease-in-out "
          />

          <div className="absolute bottom-0 right-0 left-0 bg-gradient-to-t from-black to-transparent h-1/2  p-2 rounded-bl-md text-white text-start px-5">
            <div className="absolute bottom-5">
              <h1 className="text-2xl">{nft.name}</h1>
              <p className="text-xl text-gray-400">{nft.price} ETH</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NftCard;
