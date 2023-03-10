import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { useStateContext } from "../context";
import { DisplayNfts, Footer } from "../components";
import Link from "next/link";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [nfts, setNfts] = useState([]);

  const { address, contract, getShowcaseNFTs } = useStateContext();

  const fetchNFTs = async () => {
    setIsLoading(true);
    const data = await getShowcaseNFTs();

    setNfts(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (contract) fetchNFTs();
  }, [address, contract]);

  return (
    <main className="min-h-screen relative ">
      <Head>
        <title>Cyberpunk Nfts</title>
        <meta name="description" content="NFT Marketplace" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <section className="h-[100vh]">
        <div className="container mx-auto relative  ">
          <div className="absolute flex flex-col inset-0 bg-red-500 mx-0 mt-32 md:mt-24 md:top-0 md:left-0 md:w-1/2 2xl:w-2/3 z-10 md:pl-8 ">
            <h1 className="text-6xl  font-bold  tracking-wide text-white text-center md:leading-none  md:text-8xl 2xl:text-9xl md:text-left">
              Discover, collect <br></br> & sell NFTs
            </h1>
            <p className="text-2xl text-center font-bold lowercase tracking-wide text-gray-300 leading-snug mt-9 mb-12 md:pr-10 md:text-left 2xl:w-2/3">
              Create, buy, sell and discover digital collectibles in cyberpunk
              style, powered by{" "}
              <span className="text-rose-600">Midjourney</span>
            </p>
            <div className="flex justify-center md:justify-start space-x-8 md:space-x-12">
              <Link
                href="/nfts"
                className="bg-violet-600 border-2 border-violet-600 shadow-[0_20px_50px_rgba(109,_40,_217,_0.2)] text-white font-bold py-4 px-12 rounded-full w-fit hover:border-2 hover:border-violet-600 hover:bg-transparent hover:shadow-[0_20px_50px_rgba(109,_40,_217,_0.5)] duration-300 transition-all"
              >
                Explore
              </Link>

              <Link
                href="/create"
                className="border-2 border-rose-600 shadow-2xl shadow-rose-500/30 text-white font-bold py-4 px-12 rounded-full w-fit hover:bg-rose-600 hover:shadow-rose-500/60 duration-300 transition-all"
              >
                Create
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute top-0 right-0 w-full h-screen z-0 lg:w-full lg:h-screen block">
          <Image
            src="/images/header3.jpg"
            alt="Header Image"
            width={3840}
            height={2160}
            className="object-cover h-full w-full z-0 select-none	"
          />
          <div className="absolute top-0 left-0 w-full h-full to-[#020202b7] z-0 bg-gradient-to-t from-black lg:bg-gradient-to-b   opacity-80 lg:opacity-80 "></div>
        </div>
      </section>

      <section className="container mx-auto lg:my-10">
        <div className="flex flex-col justify-between items-top space-y-10 lg:space-y-20  ">
          <h1 className="text-4xl text-center md:text-6xl lg:text-8xl  font-bold  tracking-wide text-white leading-none lg:text-right ">
            Featured NFTs from our <br></br>{" "}
            <span className="text-violet-700 ">cyberpunk</span> collection
          </h1>
          <div>
            <DisplayNfts nfts={nfts} />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
