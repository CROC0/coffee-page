import { Coffee } from "@/types";
import Image from "next/image";

import CoffeeCards from "./_components/CoffeeCards";

export default async function Home() {
  const data = await fetch(
    "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
  ).then((response) => response.json() as Promise<Coffee[]>);
  return (
    <main>
      <div className="relative">
        <div className="absolute top-0 w-full">
          <CoffeeCards coffees={data} />
        </div>
        <Image
          src="/bg-cafe.jpg"
          height={600}
          width={2560}
          alt="coffee shop background"
        />
      </div>
    </main>
  );
}
