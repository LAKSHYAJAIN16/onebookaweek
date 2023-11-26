"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [discussionPostAmount, setDiscussionPostAmount] = useState(18000);
  const [copydeliveredAmount, setCopydeliveredAmount] = useState(12000);
  const [discussionPostAm, setDiscussionPostAm] = useState(0);
  const [copydeliveredAm, setCopydeliveredAm] = useState(0);
  const RATE_CONSTANT = 1000
  useEffect(() => {
      if(discussionPostAmount > discussionPostAm){
        setDiscussionPostAm(discussionPostAm + Math.floor(discussionPostAmount / RATE_CONSTANT))
      }
      if(copydeliveredAmount > copydeliveredAm){
        setCopydeliveredAm(copydeliveredAm + Math.floor(copydeliveredAmount / RATE_CONSTANT))
      }
  }, [discussionPostAm, copydeliveredAm])
  
  return (
    <div>
      {/* Epic Header */}
      <section>
        <h1 className="font-logo-blue font-bold text-white text-center text-7xl">
          do you have what it takes?
        </h1>
        <p className="text-center font-main text-white text-4xl mt-3 font-bold">
          take back your life. book by book.
        </p>
      </section>

      {/* Carousel */}
      <section className="mt-20 font-main flex justify-center">

        {/* Left */}
        <div>

          {/* Head */}
          <section>
            <h1 className="text-3xl font-bold text-red-500">Week #31</h1>
            <p className="text-6xl font-bold text-white">Siege and Storm</p>
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
            <p className="font-bold font-main text-white text-3xl">{copydeliveredAm.toLocaleString()} copies delivered</p>
            <p className="font-bold font-main text-white text-3xl">{discussionPostAm.toLocaleString()} discussion posts</p>
          </section>
        </div>

        {/* Image */}
        <div>
          <img src="/siege.jpg" className="w-60 ml-20"></img>
        </div>
      </section>
    </div>
  );
}
