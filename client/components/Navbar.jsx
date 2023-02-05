import Link from "next/link";
import { useStateContext } from "../context";

const Navbar = () => {
  const { connect, address } = useStateContext();

  return (
    <nav>
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-5  ">
          <div className="flex justify-start items-center space-x-10 z-10 ">
            <Link href="/">
              <h5 className="font-semibold text-xl  leading-10 tracking-wide text-white hover:text-rose-600 duration-300 transition-all">
                Cyberpunk NFTs
              </h5>
            </Link>

            <Link href="/nfts">
              <h5 className="font-semibold text-xl  leading-10 tracking-wide text-white hover:text-rose-600 duration-300 transition-all">
                Explore
              </h5>
            </Link>

            <Link href="/create">
              <h5 className="font-semibold text-xl  leading-10 tracking-wide text-white hover:text-rose-600 duration-300 transition-all">
                Create
              </h5>
            </Link>
          </div>
          <div className="flex justify-end items-center z-10 ">
            {address ? (
              <>
                <Link href="/profile">
                  <button className="bg-blue-600 border-2 border-blue-600 shadow-[0_20px_50px_rgba(96,_165,_250,_0.2)] text-white font-bold py-3 px-7 rounded-full  w-fit hover:border-2 hover:border-blue-600 hover:bg-transparent hover:shadow-[0_20px_50px_rgba(96,_165,_250,_0.5)] duration-300 transition-all ">
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
