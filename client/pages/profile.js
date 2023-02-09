import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { useStateContext } from "../context";

import { DisplayNfts, Footer } from "../components";
import Link from "next/link";

export default function ProfilePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [nfts, setNfts] = useState([]);

  const { address, contract, getUserNFTs } = useStateContext();

  const fetchNFTs = async () => {
    setIsLoading(true);
    const data = await getUserNFTs();

    setNfts(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (contract) fetchNFTs();
  }, [address, contract]);

  if (!address)
    return (
      <div className="text-white h-screen">
        <Navbar />
        <div className="max-w-6xl mx-auto flex align-center justify-center h-auto pt-40">
          <h1 className="text-7xl font-bold  tracking-wide text-white leading-none text-center  ">
            Please connect your
            <span className="text-violet-500">
              {" "}
              metamask wallet
            </span> <br></br> in order to see your profile.
          </h1>
        </div>
      </div>
    );

  return (
    <main className="h-screen  ">
      <Head>
        <title>Cyberpunk Nfts - Profile</title>
        <meta name="description" content="NFT Marketplace Profile page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <section className="container mx-auto h-1/3 md:h-1/2 mt-10 px-5 md:px-0">
        <div className="relative h-full ">
          <Image
            src="/images/profileImage.jpg"
            alt="profile"
            width={3840}
            height={2160}
            className="rounded-3xl w-full h-4/5 object-cover object-top "
          />
          <div className="absolute bottom-0 left-0 w-full h-1/2 z-0 bg-gradient-to-t from-[#0f0f0f] to-transparent"></div>
          <div className="absolute  bottom-5  left-5 md:left-20 md:bottom-0 rounded-3xl z-10">
            <div className="flex flex-col justify-start items-top h-full">
              <Image
                src="/images/ellie3.png"
                alt="profile"
                width={150}
                height={150}
                className="rounded-full w-[100px] h-[100px] object-cover object-center md:w-[150px] md:h-[150px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-5 md:px-20">
        <h1 className=" text-3xl font-bold  tracking-wide text-white leading-none text-left  mt-5 md:hidden">
          {address && (
            <>
              {address.split("")[0]}
              {address.split("")[1]}
              {address.split("")[2]}
              {address.split("")[3]}
              {address.split("")[4]}
              {address.split("")[5]}
              {address.split("")[6]}...
              {address.split("")[address.length - 6]}
              {address.split("")[address.length - 5]}
              {address.split("")[address.length - 4]}
              {address.split("")[address.length - 3]}
              {address.split("")[address.length - 2]}
              {address.split("")[address.length - 1]}
            </>
          )}
        </h1>
        <h1 className="hidden text-3xl font-bold  tracking-wide text-white leading-none text-left mt-5 md:block">
          {address}
        </h1>
        <div className="flex justify-start space-x-10">
          <Link
            href="/nfts"
            className="bg-violet-600 border-2 border-violet-600 shadow-[0_20px_50px_rgba(109,_40,_217,_0.2)] text-white font-bold py-4 px-14 rounded-full mt-10 w-fit hover:border-2 hover:border-violet-600 hover:bg-transparent hover:shadow-[0_20px_50px_rgba(109,_40,_217,_0.5)] duration-300 transition-all md:px-10"
          >
            Explore
          </Link>

          <Link
            href="/create"
            className="border-2 border-rose-600 shadow-2xl shadow-rose-500/30 text-white font-bold py-4 px-14 rounded-full mt-10 w-fit hover:bg-rose-600 hover:shadow-rose-500/60 duration-300 transition-all md:px-10"
          >
            Create
          </Link>
        </div>
      </section>

      <section className="container mx-auto my-20">
        {/* <h1 className="text-6xl font-bold  tracking-wide text-white leading-none text-left mb-20">
          My NFT Collection
        </h1> */}

        <div className="flex flex-col justify-between items-top md:flex-row ">
          <DisplayNfts nfts={nfts} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
