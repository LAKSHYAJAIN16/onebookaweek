"use client";

import { useRef, useEffect } from "react";

export const INDEX_TO_CLASSES = [
  [
    ["-rotate-12", "w-[90px]", "h-[138px]"],
    ["mr-10", "h-[241px]", "w-[140px]"],
  ],
  [
    ["-rotate-6", "w-[90px]", "h-[138px]", "ml-[-50px]"],
    ["mr-10", "h-[241px]", "w-[140px]"],
  ],
  [
    ["rounded-3xl", "shadow-2xl", "shadow-red-500", "ml-[-30px]"],
    [""],
  ],
  [
    ["-rotate-6", "w-[90px]", "h-[138px]", "ml-[-50px]"],
    ["mr-10", "h-[241px]", "w-[140px]"],
  ],
  [
    ["-rotate-6", "w-[90px]", "h-[138px]", "ml-[-50px]"],
    ["mr-10", "h-[241px]", "w-[140px]"],
  ],
];

export default function Cursor() {
  const cursor = useRef();

  useEffect(() => {
    window.addEventListener("mousemove", move);

    // Get all links
    const links = document.querySelectorAll("a");
    for (let m = 0; m < links.length; m++) {
      const link = links[m];
      link.addEventListener("mouseenter", onLink);
      link.addEventListener("mouseout", outLink);
    }

    // Get all cards
    const cards = document.getElementsByClassName("card");
    for (let k = 0; k < cards.length; k++) {
      const card = cards[k];
      card.addEventListener("mouseenter", onCard);
      card.addEventListener("mouseleave", outCard);
    }

    // Get all images
    const images = document.querySelectorAll("img");
    for (let n = 0; n < images.length; n++) {
      // Add some kind of effect man
      // const img = images[n];
      // img.addEventListener("mouseenter", onImg);
      // img.addEventListener("mouseout", outImg)
    }
  }, []);

  function move(e) {
    console.log("hi");
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    cursor.current.style.opacity = 1;
    cursor.current.style.top = `${mouseY}px`;
    cursor.current.style.left = `${mouseX}px`;
  }

  function onLink() {
    cursor.current.classList.add("custom-cursor--link");
  }

  function outLink() {
    cursor.current.classList.remove("custom-cursor--link");
  }

  function onCard(e) {
    // Update Cursor
    cursor.current.classList.add("custom-cursor--link");

    // Get Image Holder
    const image_holder = e.target.firstChild();
    image_holder.classList.add("z-50");

    // Get All Images
    const images = image_holder.children;
    for (let n = 0; n < images.length; n++) {
      const img = images[n];
    }
  }

  function outCard(e) {
    console.log(e.target);
    cursor.current.classList.remove("custom-cursor--link");
  }

  function onImg() {
    cursor.current.classList.add("custom-cursor--img");
  }

  function outImg() {
    cursor.current.classList.remove("custom-cursor--img");
  }

  return (
    <>
      <div ref={cursor} id="curs" className="custom-cursor"></div>
    </>
  );
}
