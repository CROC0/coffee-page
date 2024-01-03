"use client";
import { Coffee } from "@/types";
import CoffeeCard from "./Card";
import { useState } from "react";

type props = {
  coffees: Coffee[];
};

function CardGroup({ coffees }: props) {
  const [showAll, setShowAll] = useState<boolean>(true);
  return (
    <div className="p-16 bg-[#1B1D1F] rounded-2xl max-w-[1200px] w-[calc(100vw-10rem)] mx-auto my-32">
      <div className="relative text-center max-w-[800px] w-[60%] mx-auto">
        <img className="absolute top-[-50px] right-2" src="/vector.svg" />
        <h2 className="relative text-3xl font-semibold mb-2 z-10">
          Our Collection
        </h2>
        <p className="relative  text-[#6F757C] font-medium z-10">
          Introducing our Coffee Collection, a selection of unique coffees from
          different roast types and origins, expertly roasted in small batches
          and shipped fresh weekly.
        </p>
      </div>
      <div className="p-4 flex w-full gap-2 justify-center">
        <Button cb={() => setShowAll(true)} active={showAll}>
          All Products
        </Button>
        <Button cb={() => setShowAll(false)} active={!showAll}>
          Available Now
        </Button>
      </div>
      <div className="grid grid-cols-main-grid gap-2">
        {coffees
          .filter((coffee) => {
            if (showAll) return true;
            return coffee.available;
          })
          .map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
      </div>
    </div>
  );
}

export default CardGroup;

function Button({
  children,
  cb,
  active,
}: {
  children: React.ReactNode;
  cb: Function;
  active: boolean;
}) {
  return (
    <button
      onClick={() => cb()}
      className={`${
        active ? "bg-[#6F757C]" : ""
      } px-2 py-1 rounded-lg font-medium`}
    >
      {children}
    </button>
  );
}
