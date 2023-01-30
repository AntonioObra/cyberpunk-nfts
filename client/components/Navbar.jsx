import Link from "next/link";
import { useStateContext } from "../context";

const Navbar = () => {
  const { connect, address } = useStateContext();

  return (
    <nav>
      <div className="container mx-auto ">
        <div className="flex justify-between items-center py-5 ">
          <div className="flex justify-start items-center space-x-10">
            <Link href="/">
              <h5 className="font-semibold text-xl  leading-10 tracking-wide text-amber-200">
                cyberpunk nfts
              </h5>
            </Link>

            <Link href="/create">
              <p className="text-xl text-white">Create</p>
            </Link>
          </div>
          <div className="flex justify-end items-center space-x-10">
            {address ? (
              <>
                <Link href="/profile">
                  <p className="text-xl text-white">Profile</p>
                </Link>
                <p className="text-xl text-white">
                  Hy, <span className="truncate">{address}</span>
                </p>
              </>
            ) : (
              <button
                className="bg-rose-500 py-3 px-5 rounded-3xl text-white font-semibold"
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
