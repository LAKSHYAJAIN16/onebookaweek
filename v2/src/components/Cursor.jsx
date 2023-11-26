"use client";

import { TweenLite } from "gsap/gsap-core";
import 'gsap/CSSPlugin'
import { useRef, useEffect } from "react";

export default function Cursor() {
  const cursor = useRef();

  useEffect(() => {
    window.addEventListener("mousemove", move)

    // Get all links
    const links = document.querySelectorAll("a");
    for (let m = 0; m < links.length; m++) {
        const link = links[m];
        link.addEventListener("mouseenter", onLink);
        link.addEventListener("mouseout", outLink)
    }
  }, [])
  
  function move(e) {
    console.log("hi");
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    cursor.current.style.opacity = 1;
    cursor.current.style.top = `${mouseY}px`;
    cursor.current.style.left = `${mouseX}px`;
  }

  function onLink(){
    cursor.current.classList.add("custom-cursor--link");
  }

  function outLink(){
    cursor.current.classList.remove("custom-cursor--link");
  }

  return (
    <>
      <div
        ref={cursor}
        id="curs"
        className="custom-cursor"
      ></div>
    </>
  );
}
