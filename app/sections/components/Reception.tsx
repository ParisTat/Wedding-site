export function Reception({ location, time }: { location: string; time: string }) {
  return (
    <section id="reception" className="sage-bg section-wrapper scroll-section">
      <div className="container-padded grid lg:grid-cols-2 gap-8 items-start">
        <img
          className="rounded-xl shadow order-2 lg:order-1"
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop"
          alt="Reception"
        />
        <div className="order-1 lg:order-2">
          <h3 className="font-script text-4xl text-gray-800 mb-4">the reception</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>
              <strong>Location:</strong> {location}
            </li>
            <li>
              <strong>Time:</strong> {time}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Reception;


