import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Ceremony } from "./components/Ceremony";
import { Reception } from "./components/Reception";
import { RSVP } from "./components/RSVP";
import { Wishes } from "./components/Wishes";
import { InstagramShare } from "./components/InstagramShare";
import { WeddingList } from "./components/WeddingList";
import { Contacts } from "./components/Contacts";
import { BackToTop } from "./components/BackToTop";

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

export function HomePage() {
  const [lang, setLang] = useState<Lang>("el");
  const t = TEXT[lang];

  return (
    <div>
      <Header />
      <Hero names={t.heroNames} date={t.date} target="2026-06-27T21:00:00+03:00" />
      <Ceremony location="Saint Therapon, Mytilene" time="18:30" />
      <Reception location="Oinoforos Estate, Industrial Zone" time="21:00" />
      <RSVP lead={t.rsvpLead} yes={t.yes} no={t.no} />
      <Wishes title={t.wishes} />
      <InstagramShare
        instagramTitle={t.instagramFeed}
        shareTitle={t.shareExperience}
        soonText={t.soonUpload}
      />
      <WeddingList title={t.optionalList} />
      <Contacts />
      <div className="text-center py-6">
        <div className="inline-flex gap-3 rounded-full bg-white/70 p-2">
          <button
            className={`px-4 py-2 rounded ${
              lang === "en" ? "bg-gray-900 text-white" : "bg-gray-100"
            }`}
            onClick={() => setLang("en")}
          >
            🇬🇧 {t.english}
          </button>
          <button
            className={`px-4 py-2 rounded ${
              lang === "el" ? "bg-gray-900 text-white" : "bg-gray-100"
            }`}
            onClick={() => setLang("el")}
          >
            🇬🇷 {t.greek}
          </button>
        </div>
      </div>
      <BackToTop />
    </div>
  );
}

export default HomePage;


