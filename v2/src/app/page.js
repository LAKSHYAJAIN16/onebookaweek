"use client";

import Cursor from "@/components/Cursor";
import { useEffect, useState } from "react";

export default function Home() {
  const [discussionPostAmount, setDiscussionPostAmount] = useState(18000);
  const [copydeliveredAmount, setCopydeliveredAmount] = useState(12000);
  const [discussionPostAm, setDiscussionPostAm] = useState(0);
  const [copydeliveredAm, setCopydeliveredAm] = useState(0);
  const RATE_CONSTANT = 1000;

  useEffect(() => {
    if (discussionPostAmount > discussionPostAm) {
      setDiscussionPostAm(
        discussionPostAm + Math.floor(discussionPostAmount / RATE_CONSTANT)
      );
    }
    if (copydeliveredAmount > copydeliveredAm) {
      setCopydeliveredAm(
        copydeliveredAm + Math.floor(copydeliveredAmount / RATE_CONSTANT)
      );
    }
  }, [discussionPostAm, copydeliveredAm]);

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
      <div className="w-full flex justify-center">
        <section className="mt-28 font-main flex justify-center scale-100 bg-toned shadow-2xl shadow-white pl-32 pr-32 pt-14 pb-14">
          {/* Left */}
          <div>
            {/* Head */}
            <section>
              <h1 className="text-3xl font-bold text-red-500">#31</h1>

              {/* Stars */}
              <div className="mt-3 mb-0 flex">
                <img src="/star.png" className="w-4" />
                <img src="/star.png" className="w-4" />
                <img src="/star.png" className="w-4" />
                <img src="/half-star.png" className="w-4" />
                <img src="/gray-boi.png" className="w-4" />
              </div>

              <p className=" text-6xl font-logo font-bold text-white">
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
              className="w-60 ml-20 hover:scale-125 hover:rounded-2xl transition-all"
            ></img>
          </div>
        </section>
      </div>

      {/* The Goal */}
      <section className="mt-[55px]">
        <h1 className="font-logo-green font-bold text-white text-center text-7xl">
          the challenge
        </h1>
        <p className="text-center font-main text-white text-4xl mt-6 font-bold">
          1.) we're a subscription service.
        </p>
      </section>
    </div>
  );
}
