export function RSVP({ lead, yes, no }: { lead: string; yes: string; no: string }) {
  return (
    <section id="rsvp" className="section-wrapper scroll-section">
      <div className="container-padded">
        <h3 className="font-script text-4xl text-gray-800 mb-2">rsvp</h3>
        <p className="max-w-3xl text-lg text-gray-700 mb-6">{lead}</p>
        <div className="grid md:grid-cols-2 gap-4 max-w-3xl">
          <label className="card flex items-center gap-3">
            <input type="checkbox" className="size-5" />
            <span>{yes}</span>
          </label>
          <label className="card flex items-center gap-3">
            <input type="checkbox" className="size-5" />
            <span>{no}</span>
          </label>
        </div>
      </div>
    </section>
  );
}

export default RSVP;


