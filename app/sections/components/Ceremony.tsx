export function Ceremony({ location, time }: { location: string; time: string }) {
  return (
    <section id="ceremony" className="section-wrapper scroll-section">
      <div className="container-padded grid lg:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="font-script text-4xl text-gray-800 mb-4">our appointment</h2>
          <h3 className="font-script text-3xl text-gray-800 mb-4">the ceremony</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>
              <strong>Location:</strong> {location}
            </li>
            <li>
              <strong>Time:</strong> {time}
            </li>
          </ul>
        </div>
        <img
          className="rounded-xl shadow"
          src="https://images.unsplash.com/photo-1565106430482-8f6e74349f4f?q=80&w=1600&auto=format&fit=crop"
          alt="Ceremony"
        />
      </div>
    </section>
  );
}

export default Ceremony;


