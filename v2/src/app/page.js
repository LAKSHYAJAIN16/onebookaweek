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
          take your life back. week by week. book by book.
        </p>
      </section>

      {/* Carousel */}
      <div className="w-full flex justify-center items-center flex-col mt-20">
        <section className="bg-toned shadow-2xl shadow-white pl-28 pr-28 pt-8 pb-8 rounded-3xl border-4 border-white">
          {/* Left */}
          <h1 className="text-3xl font-bold text-red-500">31</h1>
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

      {/* The Goal */}
      <section className="mt-[80px]">
        <h1 className="font-logo-green font-bold text-white text-center text-8xl">
          the challenge
        </h1>
        <p className="text-left ml-[20%] font-main text-white text-5xl mt-8 font-bold">
          1.) 52 weeks. 52 books
        </p>
        <p className="text-left ml-[20%] font-main text-white text-2xl">reading = epic</p>
      </section>
    </div>
  );
}
