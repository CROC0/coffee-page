import { type Coffee } from "@/types";

import Image from "next/image";

function CoffeeCard({ coffee }: { coffee: Coffee }) {
  return (
    <div className="flex flex-col w-[260px] bg-[#1B1D1F] mx-auto">
      <div className="w-full h-full relative">
        <Image
          className="rounded-2xl"
          src={coffee.image}
          width={260}
          height={160}
          alt={coffee.name}
        />
        {coffee.popular && (
          <div className=" text-[#111315] font-bold absolute top-2 left-2 bg-[#F6C768] py-[2px] px-[8px] rounded-2xl text-[10px]">
            Popular
          </div>
        )}
      </div>
      <div className="flex justify-between p-2">
        <h3 className="text-base font-bold">{coffee.name}</h3>
        <div className="bg-[#BEE3CC] text-[#1B1D1F] rounded text-xs p-1 font-bold flex items-center justify-center">
          {coffee.price}
        </div>
      </div>
      <div className="flex justify-between items-center p-2 text-xs font-semibold">
        <div className="flex gap-1  items-center">
          <img src={!!coffee.rating ? "/Star_fill.svg" : "/Star.svg"} />

          {!!coffee.rating ? (
            <>
              <p>{coffee.rating}</p>
              <p className="text-[#6F757C]">({coffee.votes} votes)</p>
            </>
          ) : (
            "No ratings"
          )}
        </div>
        {!coffee.available && <p className="text-[#ED735D]">Sold out</p>}
      </div>
    </div>
  );
}

export default CoffeeCard;
