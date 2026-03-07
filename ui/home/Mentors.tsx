import Carousel from "./Carousel";

export default function Mentors() {
  return (
    <div className="py-10 text-white">
      <p className="backdrop-blur-xs w-fit mx-auto px-4 py-2 rounded-full border border-white/10 shadow-[5px_5px_14px_1px_rgba(0,0,0,0.5)] uppercase text-center text-3xl xl:text-4xl font-semibold">
        আমাদের মেন্টর সমূহ
      </p>

      <div className="text-white mx-auto mt-6 px-3 w-full max-w-80 sm:max-w-120 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl">
        <Carousel />
      </div>
    </div>
  );
}
