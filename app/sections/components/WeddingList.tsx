export function WeddingList({ title }: { title: string }) {
  return (
    <section id="wedding-list" className="sage-bg section-wrapper text-center scroll-section">
      <div className="container-padded">
        <h3 className="font-script text-4xl text-gray-800 mb-6">{title}</h3>
        <p className="text-lg">
          IBAN: <strong>GR65 0171 7530 0067 5316 2499 742</strong>
        </p>
        <p className="mt-2">
          Piraeus Bank - Name: Aggeliki Argyropoulou & Georgios Stamos
        </p>
      </div>
    </section>
  );
}

export default WeddingList;


