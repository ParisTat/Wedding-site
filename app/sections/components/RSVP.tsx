import { useState } from "react";

export function RSVP({ lead, yes, no }: { lead: string; yes: string; no: string }) {
  const [response, setResponse] = useState<"yes" | "no" | null>(null);
  const [reason, setReason] = useState("");

  return (
    <section id="rsvp" className="section-wrapper scroll-section">
      <div className="container-padded">
        <h3 className="font-script text-4xl text-gray-800 mb-2">rsvp</h3>
        <p className="max-w-3xl text-lg text-gray-700 mb-6">{lead}</p>
        <div className="grid md:grid-cols-2 gap-4 max-w-3xl">
          <label className={`card flex items-center gap-3 cursor-pointer ${response === "yes" ? "ring-2 ring-gray-400" : ""}`}>
            <input
              type="radio"
              name="rsvp"
              checked={response === "yes"}
              onChange={() => setResponse("yes")}
            />
            <span>{yes}</span>
          </label>
          <label className={`card flex items-center gap-3 cursor-pointer ${response === "no" ? "ring-2 ring-gray-400" : ""}`}>
            <input
              type="radio"
              name="rsvp"
              checked={response === "no"}
              onChange={() => setResponse("no")}
            />
            <span>{no}</span>
          </label>
        </div>

        {response === "no" && (
          <div className="max-w-3xl mt-4">
            <textarea
              className="w-full border p-3 rounded"
              rows={4}
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Share the reason you can't make it (optional)"
            />
          </div>
        )}

        <div className="max-w-3xl mt-4">
          <button className="btn btn-lg">Submit</button>
        </div>
      </div>
    </section>
  );
}

export default RSVP;


