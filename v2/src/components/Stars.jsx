import React from "react";

export default function Stars({ rating }) {
  return (
    <>
      {rating_to_array(rating).map((ex) => (
        <>
          {ex === 0 && <img src="/gray-boi.png" className="w-5" />}
          {ex === 1 && <img src="/star.png" className="w-5" />}
          {ex === 2 && <img src="/half-star.png" className="w-5" />}
        </>
      ))}
    </>
  );
}

function rating_to_array(rating) {
  let ar = [0, 0, 0, 0, 0];
  let fl = rating % 1;

  // Just get the rating and fill the array
  for (let jj = 0; jj < Math.floor(rating); jj++) {
    ar[jj] = 1;
  }
  if(fl != 0){
    ar[Math.floor(rating)] = 2;
  }

  return ar;
}
