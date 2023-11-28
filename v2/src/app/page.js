import Image from "next/image";
import data from "@/data/DAT.json";
import Stars from "@/components/Stars";

export default function Home() {
  return (
    <div>
      {/* Epic Header */}
      <section>
        <h1 className="font-logo-blue font-bold text-white text-center text-8xl">
          do you have what it takes?
        </h1>
        <p className="text-center font-main text-white text-4xl mt-3 font-bold">
          one book a week. 4 books a month. 52 books a year.
        </p>
      </section>

      {/* The Challenge */}
      <section className="mt-[80px]">
        <p className="text-center font-logo-green text-white text-8xl mt-8 font-bold">
          the challenge
        </p>

        <div className="text-center font-main text-red-500 text-4xl mt-5 font-bold rounded-2xl ">
          <div className="flex justify-center items-center border-2 border-red-500 w-[70%] ml-auto mr-auto pt-3 pb-3 pr-3 pl-3 rounded-3xl">
            <Image src="/alert.png" width={40} height={30} />
            <span> WARNING : this challenge not for the timid hearted. </span>
          </div>
        </div>
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
                <div className="mt-3 mb-0 flex">
                  <Stars rating={data[data.length - 1]["rating"]} />
                </div>
                <p className="mt-1 text-7xl font-logo font-bold text-white">
                  {data[data.length - 1]["title"]}
                </p>
                <p className="text-sm text-white font-bold text-right">
                  {data[data.length - 1]["author"]}
                </p>
              </section>

              {/* The genres */}
              <section className="mt-5">
                <p className="font-logo-purple text-3xl">
                  fantasy. romance. love story.
                </p>
              </section>

              <section>
                <p>Day 1</p>
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
    </div>
  );
}
