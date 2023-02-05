import Image from "next/image";
import { CustomButton, FormField, Navbar } from "../components";
import { useStateContext } from "../context";
import { useState } from "react";

import { checkIfImage } from "../utils";
import { ethers } from "ethers";

export default function CreateNFT() {
  const { createNFT, address } = useStateContext();

  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: null,
    image: "",
  });

  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    checkIfImage(form.image, async (exists) => {
      if (exists) {
        setIsLoading(true);

        await createNFT({
          ...form,
          price: ethers.utils.parseEther(form.price),
        });

        setIsLoading(false);
      } else {
        alert("Please enter a valid image url");
        setForm({ ...form, image: "" });
      }
    });
  };

  if (!address)
    return (
      <div className="text-white h-screen">
        <Navbar />
        <div className="max-w-6xl mx-auto flex align-center justify-center h-auto pt-40">
          <h1 className="text-7xl font-bold  tracking-wide text-white leading-none text-center  ">
            Please connect your
            <span className="text-rose-500">
              {" "}
              metamask wallet
            </span> <br></br> in order to create your own nfts.
          </h1>
        </div>
      </div>
    );

  return (
    <>
      <Navbar />

      <section className="container mx-auto mt-14 ">
        <div className="flex flex-col justify-between items-top md:flex-row max-w-7xl mx-auto">
          <h1 className="text-8xl font-bold lowercase tracking-wide text-white leading-none">
            create your own
            <span className="text-rose-500">
              {" "}
              cyberpunk styled
            </span> <br></br> nfts
          </h1>
        </div>
      </section>

      <section className="container mx-auto my-14">
        <form
          onSubmit={handleSubmit}
          className=" mt-[65px] flex flex-col gap-[30px] max-w-7xl mx-auto"
        >
          <div className="flex flex-wrap gap-[40px] ">
            <FormField
              labelName="NFT Title *"
              placeholder="Name of your NFT"
              inputType="text"
              value={form.title}
              handleChange={(e) => handleFormFieldChange("title", e)}
            />
            <FormField
              labelName="Price *"
              placeholder="ETH 0.50"
              inputType="number"
              value={form.price}
              handleChange={(e) => handleFormFieldChange("price", e)}
            />
          </div>
          <FormField
            labelName="description *"
            placeholder="Write your description of NFT"
            isTextArea
            value={form.description}
            handleChange={(e) => handleFormFieldChange("description", e)}
          />

          <FormField
            labelName="NFT image *"
            placeholder="Place image url of yourNFT"
            inputType="url"
            value={form.image}
            handleChange={(e) => handleFormFieldChange("image", e)}
          />
          <div className="flex  mt-[40px]">
            <button
              className=" bg-violet-700 shadow-[0_20px_50px_rgba(109,_40,_217,_0.7)] py-3 px-8 rounded-3xl text-white font-semibold"
              onClick={() => connect()}
              type="submit"
            >
              Create new NFT
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
