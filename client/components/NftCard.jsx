import Image from "next/image";
import React from "react";
import Link from "next/link";

const NftCard = ({ nft }) => {
  return (
    <div className=" w-full md:w-1/3 rounded-3xl overflow-hidden cursor-pointer">
      <Link href={`/nft/${nft.id}`}>
        <div className="flex flex-col relative group">
          <Image
            src={nft.image}
            alt=""
            width={500}
            height={500}
            className="w-full h-[400px] object-cover rounded-3xl group-hover:scale-105 transition-all duration-200 ease-in-out "
          />

          <div className="absolute bottom-0 right-0 left-0 bg-[rgba(189,81,81,0.3)]  p-2 rounded-bl-md text-white text-start px-5">
            <h1 className="text-2xl">{nft.name}</h1>
            <p className="text-xl">{nft.price} ETH</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NftCard;
