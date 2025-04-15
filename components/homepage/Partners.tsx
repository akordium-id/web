import { JSX } from "preact";

export default function Partners(): JSX.Element {
  return (
    <div className="bg-[#1a1f24] py-24">
      <div className="container mx-auto max-w-5xl overflow-x-auto w-full px-5 space-y-16">
        <p className="text-gray-400 text-center">Trusted by</p>
        <div className="flex items-center justify-center gap-8 md:gap-16 flex-wrap w-full">
          <img
            src="/logo.svg"
            alt="Partner 1"
            className="grayscale !w-[58px]"
          />
          <img
            src="/logo.svg"
            alt="Partner 2"
            className="grayscale !w-[92px]"
          />
          <img
            src="/logo.svg"
            alt="Partner 3"
            className="grayscale !w-[132px]"
          />
          <img
            src="/logo.svg"
            alt="Partner 4"
            className="grayscale !w-[52px]"
          />
          <img
            src="/logo.svg"
            alt="Partner 5"
            className="grayscale !w-[124px]"
          />
          <div className="text-gray-500">and, more...</div>
        </div>
      </div>
    </div>
  );
}
