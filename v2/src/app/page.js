"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [discussionPostAmount, setDiscussionPostAmount] = useState(18000);
  const [copydeliveredAmount, setCopydeliveredAmount] = useState(12000);
  const [discussionPostAm, setDiscussionPostAm] = useState(18000);
  const [copydeliveredAm, setCopydeliveredAm] = useState(12000);
  const RATE_CONSTANT = 1000;

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
          take your life back. book by book.
        </p>
      </section>

      {/* Carousel */}
      <div className="w-full flex justify-center items-center flex-col mt-20 scale-110 ">
        <section className="bg-toned shadow-2xl shadow-white pl-28 pr-28 pt-8 pb-8 rounded-3xl border-4 border-white">
          {/* Left */}
          <h1 className="text-3xl font-bold text-white">this week</h1>
          <div className="mt-5 font-main flex justify-center scale-100">
            <div>
              {/* Head */}
              <section>
                {/* Stars */}
                {/* <div className="mt-3 mb-0 flex">
                  <img src="/star.png" className="w-4" />
                  <img src="/star.png" className="w-4" />
                  <img src="/star.png" className="w-4" />
                  <img src="/half-star.png" className="w-4" />
                  <img src="/gray-boi.png" className="w-4" />
                </div> */}

                <p className="-mt-3 text-7xl font-logo font-bold text-white">
                  Siege and Storm
                </p>
                <p className="text-sm text-white font-bold text-right">
                  Leigh Bardugo
                </p>
              </section>

              {/* The genres */}
              <section className="mt-5">
                <p className="font-logo-purple text-3xl">
                  fantasy. romance. love story.
                </p>
              </section>

              {/* Counter */}
              <section>
                <br />
                <p className="font-bold text-white text-3xl">
                  {copydeliveredAm.toLocaleString()} copies delivered
                </p>
                <p className="font-bold text-white text-3xl">
                  {discussionPostAm.toLocaleString()} discussion posts
                </p>
              </section>
            </div>

            {/* Image */}
            <div>
              <img
                src="/siege.jpg"
                className="w-56 ml-20 hover:scale-125 hover:rounded-2xl transition-all"
              ></img>
            </div>
          </div>
        </section>
      </div>

      {/* 52 weeks. 52 books */}
      {/* <section className="mt-[80px]">
        <p className="text-center font-logo text-white text-8xl mt-8 font-bold">
          who are we?
        </p>
        <p className="text-center font-main font-bold text-white text-3xl">
          we're a subscription service aimed at connecting bookworms and making reading as fun as possible.
        </p>
      </section> */}

      {/* The Challenge */}
      <section className="mt-[80px]">
        <p className="text-center font-logo-green text-white text-8xl mt-8 font-bold">
          the challenge
        </p>

        {/* Step 1 */}
        <section className="ml-[20%] mr-[20%] mt-7">
          <h1 className="text-center text-black font-bold text-3xl w-10 h-10 rounded-full bg-white">
            1
          </h1>
          <h2 className="text-left text-white font-bold text-6xl">
            choose your flavour
          </h2>

          {/* Cards */}
          <div className="flex justify-evenly mt-7">
            <div className="w-[30%] h-56 bg-white rounded-3xl shadow-2xl shadow-white">
              <img></img>
              <h1 className="text-black text-center font-bold text-4xl">Self-Help</h1>
              <p className="text-center">4 books / month</p>
            </div>
            <div>

            </div>
            <div>

            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
