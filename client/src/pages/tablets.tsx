import { DashLayout } from "../layouts";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import medicines from "../data/meds.json";

const Tablets = () => {
  const [inputMed, setInputMed] = useState("");
  const [selectedMed, setSelectedMed] = useState<MedicineItem | null>();

  const items: MedicineItem[] = Object.values(medicines.Name).map(
    (item, index) => {
      return {
        name: item,
        desc: Object.values(medicines.Desc)[index],
        img: Object.values(medicines.Img)[index],
        quickTips: Object.values(medicines.Quick_Tips)[index],
        saltConsumption: Object.values(medicines.Salt_Consumption)[index],
        sideEffects: Object.values(medicines.Side_Effects)[index],
        uses: Object.values(medicines.Uses)[index],
      };
    }
  );

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    item: MedicineItem
  ) => {
    e.preventDefault();
    setSelectedMed(item);
  };

  return (
    <div>
      <Head>
        <title>MediPlus | Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {selectedMed && (
        <div className="bg-gray-900 opacity-80 z-50 w-full h-full fixed top-0 left-0" />
      )}

      <DashLayout>
        <div className="bg-indigo-50 h-screen">
          <Image
            className="h-60 object-cover opacity-80"
            alt="medicines"
            height={600}
            width={1300}
            layout="cover"
            src="https://img.freepik.com/premium-photo/medicine-background-different-color-pills-tablets-blue-background-drugs-medicines-supplements-vitamins-copy-space_256259-3710.jpg?w=1380"
          />
          {selectedMed && (
            <div className="absolute space-y-4 p-4 z-50 text-center bg-indigo-400 text-white flex flex-col h-3/5 w-1/2 top-40 right-80">
              <p className="text-xl font-bold ">{selectedMed.name}</p>
              <p className="">{selectedMed.desc.slice(0, 250)}...</p>
              <p>
                <span className="font-bold mx-2 text-indigo-900 text-lg">
                  Uses:
                </span>{" "}
                {selectedMed.uses}
              </p>
              <p>
                <span className="font-bold mx-2 text-indigo-900 text-lg">
                  Side Effects:
                </span>{" "}
                {selectedMed.sideEffects}
              </p>
              <p>
                <span className="font-bold mx-2 text-indigo-900 text-lg">
                  Tips:
                </span>{" "}
                {selectedMed.quickTips.slice(0, 500)}...
              </p>
              <button
                onClick={() => setSelectedMed(null)}
                className="w-1/6 mx-auto bg-indigo-700 my-5 font-semibold text-white rounded-full p-2"
              >
                Close
              </button>
            </div>
          )}
          <div className="w-1/2 flex shadow-xl mx-auto p-3 bg-red-100 mt-4">
            <input
              onChange={(e) => setInputMed(e.target.value)}
              className="p-4 w-full text-gray-700 focus:outline-none text-xl "
              placeholder="Enter drug name to search"
            />
            <MagnifyingGlassIcon className="h-8 w-8 -ml-10 mt-4 text-indigo-500" />
          </div>

          <p className="mt-12 text-center text-indigo-600">
            Showing total medicines:{" "}
            <span className="font-semibold">
              {
                items.filter((item) =>
                  item.name.toLowerCase().includes(inputMed.toLowerCase())
                ).length
              }
            </span>
          </p>

          <div className="rounded-3xl overflow-y-auto h-[20rem] mt-6 space-y-4 mx-20 text-gray-600 border-b-4 border-rose-200 py-10">
            {items?.map((item, index) => {
              if (item.name.toLowerCase().includes(inputMed.toLowerCase())) {
                return (
                  <button
                    key={index}
                    onClick={(e) => handleClick(e, item)}
                    className="block w-full text-left py-2 ml-4 border-l-4 border-indigo-600 pl-4 hover:bg-indigo-600 hover:text-white hover:translate-x-2 duration-300 ease-in-out transition-all cursor-pointer"
                  >
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                  </button>
                );
              }
            })}
          </div>
        </div>
      </DashLayout>
    </div>
  );
};

export default Tablets;
