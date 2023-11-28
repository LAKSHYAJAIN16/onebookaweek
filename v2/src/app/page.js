import Image from "next/image";

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
    </div>
  );
}
