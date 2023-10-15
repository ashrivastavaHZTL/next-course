"use client";
import Image from "next/image";
import coffee from "@/public/images/coffee.jpg";
import dynamic from "next/dynamic";
import { useState } from "react";

/*const HeavyComponent = dynamic(() => import("./components/HeavyComponent"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});*/
/*export default async function Home() {
  return (
    <main className="relative h-screen">
      <Image
        src="https://bit.ly/react-cover"
        alt="Coffee"
        fill
        className="object-cover"
        sizes="(max-width:480px) 100vw, (max-width:768px) 50vw, 33 vw"
        quality={75}
        priority
      ></Image>
    </main>
  );*/

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <button
        onClick={async () => {
          const _ = (await import("lodash")).default;
          const users = [{ name: "c" }, { name: "b" }, { name: "a" }];
          const sorted = _.orderBy(users, ["name"]);
          console.log(sorted);
        }}
      >
        Show
      </button>
    </main>
  );
}
