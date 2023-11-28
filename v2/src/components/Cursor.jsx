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

    // Get all images
    const images = document.querySelectorAll("img");
    for (let n = 0; n < images.length; n++) {
      const img = images[n];
      img.addEventListener("mouseenter", onLink);
      img.addEventListener("mouseout", outLink);
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
  
  return (
    <>
      <div ref={cursor} id="curs" className="custom-cursor"></div>
    </>
  );
}
