import Link from "next/link";
import { useStateContext } from "../context";
import { useState } from "react";

const Navbar = () => {
  const { connect, address } = useStateContext();
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className="container mx-auto ">
        <div className="flex justify-between items-center py-5 px-5 md:px-8">
          <div className="flex justify-start items-center space-x-10 z-50  ">
            <Link href="/">
              <h5 className="font-semibold text-xl  leading-10 tracking-wide text-white hover:text-rose-600 duration-300 transition-all">
                Cyberpunk NFTs
              </h5>
            </Link>

            <Link href="/nfts">
              <h5 className="font-semibold text-xl  leading-10 tracking-wide text-white hover:text-rose-600 duration-300 transition-all hidden md:block">
                Explore
              </h5>
            </Link>

            <Link href="/create">
              <h5 className="font-semibold text-xl  leading-10 tracking-wide text-white hover:text-rose-600 duration-300 transition-all hidden md:block">
                Create
              </h5>
            </Link>
          </div>
          <div className="justify-end items-center z-10 hidden md:flex">
            {address ? (
              <>
                <Link href="/profile">
                  <button className="bg-blue-600 border-2 border-blue-600 shadow-[0_20px_50px_rgba(96,_165,_250,_0.2)] text-white font-bold py-3 px-10 rounded-full  w-fit hover:border-2 hover:border-blue-600 hover:bg-transparent hover:shadow-[0_20px_50px_rgba(96,_165,_250,_0.5)] duration-300 transition-all">
                    Profile
                  </button>
                </Link>
              </>
            ) : (
              <button
                className="bg-violet-600 border-2 border-violet-600 shadow-[0_20px_50px_rgba(109,_40,_217,_0.2)] text-white font-bold py-3 px-7 rounded-full  w-fit hover:border-2 hover:border-violet-600 hover:bg-transparent hover:shadow-[0_20px_50px_rgba(109,_40,_217,_0.5)] duration-300 transition-all"
                onClick={() => connect()}
              >
                Connect
              </button>
            )}
          </div>

          <button
            id="menu-btn"
            className="z-50 block md:hidden focus:outline-none hamburger"
            onClick={() => setOpen(!open)}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>

          <div
            id="menu"
            className={`fixed inset-0  ${
              open ? "open" : "hidden"
            }  flex-col items-center self-end w-full h-full z-30  px-6 py-1 pt-24 pb-4 tracking-widest text-white uppercase divide-y divide-rose-500 opacity-90 bg-black `}
          >
            <div className="w-full py-3 text-center">
              <Link
                href="/"
                className=" hover:text-sky-100 -ml-1 duration-150 hover:-translate-y-1 text-lg"
              >
                Cyberpunk NFTs
              </Link>
            </div>
            <div className="w-full py-3 text-center">
              <Link
                href="/nfts"
                className=" hover:text-sky-100 -ml-1 duration-150 hover:-translate-y-1 text-lg"
              >
                explore
              </Link>
            </div>
            <div className="w-full py-3 text-center">
              <Link
                href="/create"
                className="hover:text-sky-100 duration-150 hover:-translate-y-1 text-lg "
              >
                create
              </Link>
            </div>

            <div className="flex justify-center items-center w-full py-3 ">
              {address ? (
                <>
                  <button className="bg-blue-600 border-2 border-blue-600 shadow-[0_20px_50px_rgba(96,_165,_250,_0.2)] text-white font-bold py-3 px-16 rounded-full  w-full hover:border-2 hover:border-blue-600 hover:bg-transparent hover:shadow-[0_20px_50px_rgba(96,_165,_250,_0.5)] duration-300 transition-all ">
                    <Link href="/profile">Profile</Link>
                  </button>
                </>
              ) : (
                <button
                  className="bg-violet-600 border-2 border-violet-600 shadow-[0_20px_50px_rgba(109,_40,_217,_0.2)] text-white font-bold py-3 px-16 rounded-full  w-full hover:border-2 hover:border-violet-600 hover:bg-transparent hover:shadow-[0_20px_50px_rgba(109,_40,_217,_0.5)] duration-300 transition-all"
                  onClick={() => connect()}
                >
                  Connect
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
