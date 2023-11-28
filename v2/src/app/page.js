"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [discussionPostAmount, setDiscussionPostAmount] = useState(18000);
  const [copydeliveredAmount, setCopydeliveredAmount] = useState(12000);
  const [discussionPostAm, setDiscussionPostAm] = useState(18000);
  const [copydeliveredAm, setCopydeliveredAm] = useState(12000);

  useEffect(() => {
    // Optimize this b!tch
    // if (discussionPostAmount > discussionPostAm) {
    //   setDiscussionPostAm(
    //     discussionPostAm + Math.floor(discussionPostAmount / RATE_CONSTANT)
    //   );
    // }
    // if (copydeliveredAmount > copydeliveredAm) {
    //   setCopydeliveredAm(
    //     copydeliveredAm + Math.floor(copydeliveredAmount / RATE_CONSTANT)
    //   );
    // }
  }, []);

  return (
    <div>
      {/* Epic Header */}
      <section>
        <h1 className="font-logo-blue font-bold text-white text-center text-8xl">
          do you have what it takes?
        </h1>
        <p className="text-center font-main text-white text-4xl mt-3 font-bold">
          one book a week. 4 books a month. 52 books a year.
        </p>
      </section>

      {/* 52 weeks. 52 books */}
      <section className="mt-[80px]">
        <p className="text-center font-logo text-white text-8xl mt-8 font-bold">
          who are we?
        </p>
        <p className="text-center font-main font-bold text-white text-3xl">
          we're a subscription service aimed at connecting bookworms and making reading as fun as possible.
        </p>
      </section>

      {/* The Challenge */}
      <section className="mt-[80px]">
        <p className="text-center font-logo-green text-white text-8xl mt-8 font-bold">
          the challenge
        </p>

        <p className="text-center font-main text-red-500 text-4xl mt-3 font-bold">
          WARNING : this challenge not for the timid hearted.
        </p>
      </section>
    </div>
  );
}
