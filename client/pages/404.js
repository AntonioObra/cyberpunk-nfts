import Head from "next/head";
import { Footer, Navbar } from "../components";
import Link from "next/link";
import Image from "next/image";

export default function NotFoundPage() {
  return (
    <div>
      <Head>
        <title>404 - Page Not Found</title>
      </Head>

      <Navbar />

      <section className="h-screen  ">
        <div className="absolute top-0 left-0 w-1/2 h-screen z-0">
          <Image
            src="/images/notFound.png"
            alt="Header Image"
            width={1500}
            height={1500}
            className="object-cover h-full w-full z-0 "
          />

          <div className="absolute top-0 left-0 w-full h-1/2 z-0 bg-gradient-to-b from-black to-transparent"></div>
        </div>
        <div className="flex container   mx-auto relative">
          <div className="absolute top-0  right-0 w-1/2  mt-28 flex flex-col ">
            <h1 className="text-8xl  font-bold  tracking-wide text-white leading-none text-right">
              404 <br></br> page not found
            </h1>
            <p className="text-2xl text-right font-bold lowercase tracking-wide text-gray-500 leading-none mt-4 pr-10">
              please go back{" "}
              <Link href="/" className="text-rose-600">
                home
              </Link>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
