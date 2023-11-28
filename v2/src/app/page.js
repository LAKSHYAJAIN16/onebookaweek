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
          one book a week. for the rest of your life.
        </p>
        <p className="text-center font-main text-red-500 text-4xl mt-3 font-bold">
          WARNING : this challenge not for the timid hearted.
        </p>
      </section>

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
        <div className="ml-[5%] mr-[5%]">
          <section className="mt-7">
            <h1 className="text-center text-black font-bold text-3xl w-10 h-10 rounded-full bg-white">
              1
            </h1>
            <h2 className="text-left text-white font-bold text-6xl">
              choose your flavour
            </h2>

            {/* Cards */}
            <div className="flex justify-evenly mt-7">
              <div className="opacity-50 hover:opacity-100 card w-[30%] h-96 bg-white rounded-3xl shadow-2xl shadow-white flex flex-col">
                <div
                  id="images-self-help"
                  className="flex mt-2 mb-0 justify-center items-center"
                >
                  <img
                    src="/perm/self-help-flavour/atomic.jpg"
                    className="transition-all mb-0 opacity-100 -rotate-12 w-[90px] h-[138px] scale-100"
                  ></img>

                  <img
                    src="/perm/self-help-flavour/tsaongaf.jpg"
                    className="transition-all mb-0 ml-[-50px] -rotate-6 opacity-100 w-[90px] h-[138px] scale-100"
                  ></img>

                  <img
                    src="/perm/self-help-flavour/alc.jpg"
                    className="transition-all mb-0 ml-[-30px] z-40 w-[140px] h-[241px] rounded-3xl shadow-2xl shadow-red-500 scale-100"
                  ></img>

                  <img
                    src="/perm/self-help-flavour/robin.jpg"
                    className="transition-all mb-0 ml-[-30px] rotate-6 opacity-100 w-[90px] h-[138px] scale-100"
                  ></img>

                  <img
                    src="/perm/self-help-flavour/obama.jpg"
                    className="transition-all mb-0 ml-[-50px] rotate-12 opacity-100 w-[90px] h-[138px] scale-100"
                  ></img>
                </div>

                <div className="mt-6">
                  <h1 className="text-black text-center font-bold text-6xl">
                    Self-Help
                  </h1>
                  <p className="text-center font-bold">4 books / month</p>
                </div>
              </div>

              <div className="opacity-50 hover:opacity-100 card w-[30%] h-96 bg-white rounded-3xl shadow-2xl shadow-white flex flex-col">
                <div
                  id="images-fiction"
                  className="flex mt-2 mb-0 justify-center items-center"
                >
                  <img
                    src="/perm/fiction-flavour/attwn.jpg"
                    className="transition-all mb-0 opacity-100 -rotate-12 w-[90px] h-[138px] scale-100"
                  ></img>

                  <img
                    src="/perm/fiction-flavour/hp.jpg"
                    className="transition-all mb-0 ml-[-50px] -rotate-6 opacity-100 w-[90px] h-[138px] scale-100"
                  ></img>

                  <img
                    src="/perm/fiction-flavour/pjo.jpg"
                    className="transition-all mb-0 ml-[-30px] z-40 w-[140px] h-[241px] rounded-3xl shadow-2xl shadow-red-500 scale-100"
                  ></img>

                  <img
                    src="/perm/fiction-flavour/soc.jpg"
                    className="transition-all mb-0 ml-[-30px] rotate-6 opacity-100 w-[90px] h-[138px] scale-100"
                  ></img>

                  <img
                    src="/perm/fiction-flavour/tgg.jpg"
                    className="transition-all mb-0 ml-[-50px] rotate-12 opacity-100 w-[90px] h-[138px] scale-100"
                  ></img>
                </div>

                <div className="mt-6">
                  <h1 className="text-black text-center font-bold text-6xl">
                    Fiction
                  </h1>
                  <p className="text-center font-bold">4 books / month</p>
                </div>
              </div>

              <div className="opacity-50 hover:opacity-100 card w-[30%] h-96 bg-white rounded-3xl shadow-2xl shadow-white flex flex-col">
                <div
                  id="images-romance"
                  className="flex mt-2 mb-0 justify-center items-center"
                >
                  <img
                    src="/perm/romance-flavour/igyb.jpg"
                    className="transition-all mb-0 opacity-100 -rotate-12 w-[90px] h-[138px] scale-100"
                  ></img>

                  <img
                    src="/perm/romance-flavour/pap.jpg"
                    className="transition-all mb-0 ml-[-50px] -rotate-6 opacity-100 w-[90px] h-[138px] scale-100"
                  ></img>

                  <img
                    src="/perm/romance-flavour/romeo.jpg"
                    className="transition-all mb-0 ml-[-30px] z-40 w-[140px] h-[241px] rounded-3xl shadow-2xl shadow-red-500 scale-100"
                  ></img>

                  <img
                    src="/perm/romance-flavour/tbbc.jpg"
                    className="transition-all mb-0 ml-[-30px] rotate-6 opacity-100 w-[90px] h-[138px] scale-100"
                  ></img>

                  <img
                    src="/perm/romance-flavour/tsitp.jpg"
                    className="transition-all mb-0 ml-[-50px] rotate-12 opacity-100 w-[90px] h-[138px] scale-100"
                  ></img>
                </div>

                <div className="mt-6">
                  <h1 className="text-black text-center font-bold text-6xl">
                    Romance
                  </h1>
                  <p className="text-center font-bold">4 books / month</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-14">
            <h1 className="text-center text-black font-bold text-3xl w-10 h-10 rounded-full bg-white">
              2
            </h1>
            <h2 className="text-left text-white font-bold text-6xl">
              read the books
            </h2>

            {/* Carousel */}
            <div className="w-full flex justify-center items-center flex-col mt-20 scale-110 ">
              <section className="bg-toned shadow-2xl shadow-white pl-20 pr-20 pt-8 pb-8 rounded-3xl border-4 border-white">
                {/* Left */}
                <h1 className="text-3xl font-bold text-white">this week</h1>
                <div className="mt-5 font-main flex justify-center scale-100">
                  <div>
                    {/* Head */}
                    <section>
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
          </section>

          <section className="mt-14">
            <h1 className="text-center text-black font-bold text-3xl w-10 h-10 rounded-full bg-white">
              3
            </h1>
            <h2 className="text-left text-white font-bold text-6xl">discuss</h2>
          </section>
        </div>
      </section>
    </div>
  );
}
