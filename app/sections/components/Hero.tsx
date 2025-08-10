import { CountdownBoxes } from "./Countdown";

export function Hero({ names, date, target }: { names: string; date: string; target: string }) {
  return (
    <section id="hero" className="sage-bg section-wrapper scroll-section">
      <div className="container-padded grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="font-script text-5xl sm:text-6xl mb-6 text-gray-800">{names}</h1>
          <p className="uppercase tracking-wide text-2xl text-gray-700">save the date</p>
          <p className="font-serif text-4xl mt-2 text-gray-700">{date}</p>
          <CountdownBoxes target={target} />
        </div>
        <div className="hidden lg:block">
          <div
            className="aspect-[4/3] w-full bg-center bg-cover rounded-xl shadow"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1600&auto=format&fit=crop)",
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;


