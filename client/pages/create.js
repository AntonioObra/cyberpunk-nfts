import Image from "next/image";
import { CustomButton, FormField, Navbar } from "../components";
import { useStateContext } from "../context";
import { useState } from "react";

import { checkIfImage } from "../utils";
import { ethers } from "ethers";

export default function CreateNFT() {
  const { createNFT } = useStateContext();

  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
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

  return (
    <>
      <Navbar />

      <section className="container mx-auto mt-14 ">
        <div className="flex flex-col justify-between items-top md:flex-row max-w-7xl mx-auto">
          <h1 className="text-7xl font-bold lowercase tracking-wide text-white leading-none">
            create your own
            <span className="text-rose-500">
              {" "}
              cyberpunk styled
            </span> <br></br> nfts
          </h1>
        </div>
      </section>

      <section className="container mx-auto mt-14">
        <form
          onSubmit={handleSubmit}
          className=" mt-[65px] flex flex-col gap-[30px] max-w-7xl mx-auto"
        >
          <div className="flex flex-wrap gap-[40px] ">
            <FormField
              labelName="Your Name *"
              placeholder="John Doe"
              inputType="text"
              value={form.name}
              handleChange={(e) => handleFormFieldChange("name", e)}
            />
            <FormField
              labelName="NFT Title *"
              placeholder="Name of your NFT"
              inputType="text"
              value={form.title}
              handleChange={(e) => handleFormFieldChange("title", e)}
            />
          </div>
          <FormField
            labelName="description *"
            placeholder="Write your description of NFT"
            isTextArea
            value={form.description}
            handleChange={(e) => handleFormFieldChange("description", e)}
          />

          <div className="flex flex-wrap gap-[40px] mt-[40px] w-full">
            <FormField
              labelName="Price *"
              placeholder="ETH 0.50"
              inputType="number"
              value={form.price}
              handleChange={(e) => handleFormFieldChange("price", e)}
            />
          </div>

          <FormField
            labelName="NFT image *"
            placeholder="Place image url of yourNFT"
            inputType="url"
            value={form.image}
            handleChange={(e) => handleFormFieldChange("image", e)}
          />
          <div className="flex justify-end items-end mt-[40px]">
            <CustomButton
              btnType="submit"
              title="Create new NFT"
              styles="bg-[#1dc071]"
            />
          </div>
        </form>
      </section>
    </>
  );
}
