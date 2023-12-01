export default function Page({ params }) {
  return (
    <div className="flex ml-5 justify-evenly">
      <div>
        <h1 className="font-logotext-7xl">Siege and Storm</h1>
        <p className="text-white font-bold mt-2 text-2xl">by Leigh Bardugo</p>
        <button className="mt-7 text-white font-bold text-4xl hover:cursor-none">Day 1 Review ⬇️</button>
      </div>

      <div>
        <img
          src="/siege.jpg"
          className="w-72 hover:scale-125 hover:rounded-2xl transition-all"
        ></img>
      </div>
    </div>
  );
}
