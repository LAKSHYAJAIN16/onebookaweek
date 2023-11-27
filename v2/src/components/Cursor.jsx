"use client";

import { useRef, useEffect } from "react";

export const INDEX_TO_CLASSES = [
  [
    ["-rotate-12", "w-[90px]", "h-[138px]", "scale-100"],
    ["mr-0", "ml-0", "h-[241px]", "w-[140px]", "scale-90"],
  ],
  [
    ["-rotate-6", "w-[90px]", "h-[138px]", "ml-[-50px]", "scale-100"],
    ["mr-0", "ml-0", "h-[241px]", "w-[140px]", "scale-90"],
  ],
  [
    ["rounded-3xl", "shadow-2xl", "shadow-red-500", "ml-[-30px]", "scale-100"],
    ["mr-0", "ml-0", "scale-90"],
  ],
  [
    ["rotate-6", "w-[90px]", "h-[138px]", "ml-[-30px]", "scale-100"],
    ["mr-0", "ml-0", "h-[241px]", "w-[140px]", "scale-90"],
  ],
  [
    ["rotate-12", "w-[90px]", "h-[138px]", "ml-[-50px]", "scale-100"],
    ["h-[241px]", "ml-0", "w-[140px]", "scale-90"],
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
    const image_holder = e.target.firstChild;
    image_holder.classList.add("z-50");

    // Get All Images
    const images = image_holder.children;
    for (let n = 0; n < images.length; n++) {
      const img = images[n];
      const subtract = INDEX_TO_CLASSES[n][0];
      const add = INDEX_TO_CLASSES[n][1];
      for (let kk = 0; kk < subtract.length; kk++) {
        img.classList.remove(subtract[kk]);
      }
      for (let mmm = 0; mmm < add.length; mmm++) {
        img.classList.add(add[mmm]);
      }
    }
  }

  function outCard(e) {
    // Update Cursor
    cursor.current.classList.remove("custom-cursor--link");

    // Get Image Holder
    const image_holder = e.target.firstChild;

    // Get All Images
    const images = image_holder.children;
    for (let n = 0; n < images.length; n++) {
      const img = images[n];
      const subtract = INDEX_TO_CLASSES[n][0];
      const add = INDEX_TO_CLASSES[n][1];
      for (let kk = 0; kk < subtract.length; kk++) {
        img.classList.add(subtract[kk]);
      }
      for (let mmm = 0; mmm < add.length; mmm++) {
        img.classList.remove(add[mmm]);
      }
    }
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
