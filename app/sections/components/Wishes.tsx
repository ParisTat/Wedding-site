export function Wishes({ title }: { title: string }) {
  return (
    <section id="wishes" className="sage-bg section-wrapper scroll-section">
      <div className="container-padded">
        <h3 className="font-script text-4xl text-gray-800 mb-10">{title}</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="card sage-card text-center">
              <p className="text-lg mb-6">
                Congratulations! We wish you a lifetime full of love.
              </p>
              <p className="text-sm text-gray-500">Guest {i}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Wishes;


