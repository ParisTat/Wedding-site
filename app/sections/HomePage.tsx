import { useEffect, useMemo, useState } from "react";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { FaViber } from "react-icons/fa6";

type Lang = "en" | "el";

const TEXT: Record<Lang, Record<string, string>> = {
  en: {
    heroNames: "Konstantina & Eleftherios",
    saveTheDate: "save the date",
    date: "27.06.26",
    ourAppointment: "our appointment",
    ceremony: "the ceremony",
    location: "Location",
    time: "Time",
    reception: "the reception",
    rsvp: "rsvp",
    rsvpLead:
      "Please let us know if you can make it! We would love to see you all.",
    yes: "Yes, we will be there!",
    no: "Sorry, we can't make it.",
    wishes: "wishes full of love",
    instagramFeed: "wedding instagram feed",
    shareExperience: "share your experience",
    soonUpload: "Soon you will be able to upload your photos here.",
    optionalList: "optional wedding list",
    getInTouch: "get in touch",
    english: "English",
    greek: "Ελληνικά",
  },
  el: {
    heroNames: "Κωνσταντίνα & Ελευθέριος",
    saveTheDate: "κρατήστε την ημέρα",
    date: "27.06.26",
    ourAppointment: "our appointment",
    ceremony: "the ceremony",
    location: "Τοποθεσία",
    time: "Ώρα",
    reception: "the reception",
    rsvp: "rsvp",
    rsvpLead:
      "Παρακαλούμε ενημερώστε μας αν θα παρευρεθείτε! Θα χαρούμε πολύ να σας δούμε όλους.",
    yes: "Ναι, σίγουρα θα είμαστε εκεί!",
    no: "Δυστυχώς, δεν θα μπορέσουμε να παρευρεθούμε.",
    wishes: "wishes full of love",
    instagramFeed: "wedding instagram feed",
    shareExperience: "share your experience",
    soonUpload: "Σύντομα θα μπορείτε να ανεβάζετε τις φωτογραφίες σας εδώ.",
    optionalList: "optional wedding list",
    getInTouch: "get in touch",
    english: "English",
    greek: "Ελληνικά",
  },
};

function useCountdown(targetIso: string) {
  const target = useMemo(() => new Date(targetIso).getTime(), [targetIso]);
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = Math.max(0, target - now);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

export function HomePage() {
  const [lang, setLang] = useState<Lang>("el");
  const t = TEXT[lang];
  const countdown = useCountdown("2024-08-31T21:00:00+03:00");

  return (
    <div>
      {/* Hero */}
      <section className="sage-bg section-wrapper">
        <div className="container-padded grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="font-script text-5xl sm:text-6xl mb-6 text-gray-800">
              {t.heroNames}
            </h1>
            <p className="uppercase tracking-wide text-2xl text-gray-700">
              {t.saveTheDate}
            </p>
            <p className="font-serif text-4xl mt-2 text-gray-700">{t.date}</p>
            <div className="mt-8 grid grid-cols-4 gap-4 max-w-xl">
              <TimeBox label="Days" value={countdown.days} />
              <TimeBox label="Hours" value={countdown.hours} />
              <TimeBox label="Minutes" value={countdown.minutes} />
              <TimeBox label="Seconds" value={countdown.seconds} />
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="aspect-[4/3] w-full bg-center bg-cover rounded-xl shadow" style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1600&auto=format&fit=crop)",
            }} />
          </div>
        </div>
      </section>

      {/* Appointment */}
      <section className="section-wrapper">
        <div className="container-padded grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="font-script text-4xl text-gray-800 mb-4">
              {t.ourAppointment}
            </h2>
            <h3 className="font-script text-3xl text-gray-800 mb-4">
              {t.ceremony}
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>
                <strong>{t.location}:</strong> Saint Therapon, Mytilene
              </li>
              <li>
                <strong>{t.time}:</strong> 18:30
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

      {/* Reception */}
      <section className="sage-bg section-wrapper">
        <div className="container-padded grid lg:grid-cols-2 gap-8 items-start">
          <img
            className="rounded-xl shadow order-2 lg:order-1"
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop"
            alt="Reception"
          />
          <div className="order-1 lg:order-2">
            <h3 className="font-script text-4xl text-gray-800 mb-4">
              {t.reception}
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>
                <strong>{t.location}:</strong> Oinoforos Estate, Industrial Zone
              </li>
              <li>
                <strong>{t.time}:</strong> 21:00
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* RSVP simplified */}
      <section className="section-wrapper">
        <div className="container-padded">
          <h3 className="font-script text-4xl text-gray-800 mb-2">{t.rsvp}</h3>
          <p className="max-w-3xl text-lg text-gray-700 mb-6">{t.rsvpLead}</p>
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl">
            <label className="card flex items-center gap-3">
              <input type="checkbox" className="size-5" />
              <span>{t.yes}</span>
            </label>
            <label className="card flex items-center gap-3">
              <input type="checkbox" className="size-5" />
              <span>{t.no}</span>
            </label>
          </div>
        </div>
      </section>

      {/* Wishes grid demo */}
      <section className="sage-bg section-wrapper">
        <div className="container-padded">
          <h3 className="font-script text-4xl text-gray-800 mb-10">{t.wishes}</h3>
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

      {/* Instagram and Share */}
      <section className="section-wrapper">
        <div className="container-padded grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="font-script text-4xl text-gray-800 mb-2">
              {t.instagramFeed}
            </h3>
            <p className="text-gray-700 mb-6">
              Use our hashtag on Instagram and see your photos here.
            </p>
            <div className="aspect-video bg-gray-100 border rounded-xl" />
          </div>
          <div>
            <h3 className="font-script text-4xl text-gray-800 mb-2">
              {t.shareExperience}
            </h3>
            <p className="mb-4 text-gray-700">{t.soonUpload}</p>
            <form className="space-y-3 max-w-xl">
              <input className="w-full border p-3 rounded" placeholder="Name" />
              <input className="w-full border p-3 rounded" placeholder="Email" />
              <textarea className="w-full border p-3 rounded" rows={5} placeholder="Message (optional)" />
              <button type="button" className="px-5 py-2 rounded bg-gray-800 text-white">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Wedding list */}
      <section className="sage-bg section-wrapper text-center">
        <div className="container-padded">
          <h3 className="font-script text-4xl text-gray-800 mb-6">
            {t.optionalList}
          </h3>
          <p className="text-lg">
            IBAN: <strong>GR65 0171 7530 0067 5316 2499 742</strong>
          </p>
          <p className="mt-2">Piraeus Bank - Name: Aggeliki Argyropoulou & Georgios Stamos</p>
          <div className="mt-6 inline-flex gap-3 rounded-full bg-white/70 p-2">
            <button className={`px-4 py-2 rounded ${lang === "en" ? "bg-gray-900 text-white" : "bg-gray-100"}`} onClick={() => setLang("en")}>
              🇬🇧 {t.english}
            </button>
            <button className={`px-4 py-2 rounded ${lang === "el" ? "bg-gray-900 text-white" : "bg-gray-100"}`} onClick={() => setLang("el")}>
              🇬🇷 {t.greek}
            </button>
          </div>
        </div>
      </section>

      {/* Get in touch */}
      <section className="section-wrapper">
        <div className="container-padded grid lg:grid-cols-2 gap-8 items-start">
          <img
            className="rounded-xl shadow"
            src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop"
            alt="Couple"
          />
          <div className="space-y-6">
            <ContactCard name="Giorgos" phone="698 172 3148" />
            <ContactCard name="Angelina" phone="693 669 3830" />
          </div>
        </div>
      </section>
    </div>
  );
}

function TimeBox({ label, value }: { label: string; value: number }) {
  return (
    <div className="sage-card card text-center">
      <div className="text-2xl font-semibold">{String(value).padStart(2, "0")}</div>
      <div className="text-sm text-gray-500">{label}</div>
    </div>
  );
}

function ContactCard({ name, phone }: { name: string; phone: string }) {
  return (
    <div className="sage-bg card">
      <div className="text-2xl text-center mb-3">{name}</div>
      <div className="text-center text-lg mb-4">{phone}</div>
      <div className="flex justify-center gap-3">
        <a className="size-11 rounded-lg bg-[#4267B2] text-white grid place-items-center" href="#" aria-label="Facebook">
          <FaFacebook />
        </a>
        <a className="size-11 rounded-lg bg-[#7360F2] text-white grid place-items-center" href="#" aria-label="Viber">
          <FaViber />
        </a>
        <a className="size-11 rounded-lg bg-[#25D366] text-white grid place-items-center" href="#" aria-label="WhatsApp">
          <FaWhatsapp />
        </a>
      </div>
    </div>
  );
}

export default HomePage;


