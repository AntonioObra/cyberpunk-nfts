import { useRouter } from "next/router";
import { useStateContext } from "../../context";
import { useEffect, useState } from "react";
import Head from "next/head";
import { Navbar } from "../../components";
import Image from "next/image";

export default function SingleNFT() {
  const router = useRouter();
  const [NFT, setNFT] = useState([]);

  const { getSingleNFT, address, contract, buyNFT } = useStateContext();
  const { nftID } = router.query;

  const fetchNFT = async () => {
    const data = await getSingleNFT(nftID);
    setNFT(data);
  };

  useEffect(() => {
    if (contract) fetchNFT();
  }, [address, contract]);

  console.log(NFT);
  return (
    <main className="min-h-screen  ">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <section className="container mx-auto mt-14 ">
        <div className="flex flex-col justify-between items-top md:flex-row max-w-7xl mx-auto">
          <Image
            src={NFT.image}
            alt={NFT.title}
            width={1000}
            height={750}
            className="w-1/2 h-[600px] object-cover"
          />
        </div>

        <button className="py-3 px-5 bg-rose-300" onClick={() => buyNFT(nftID)}>
          Buy
        </button>
      </section>
    </main>
  );
}