import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { FaViber } from "react-icons/fa6";

export function Contacts() {
  return (
    <section id="contacts" className="section-wrapper scroll-section">
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
  );
}

function ContactCard({ name, phone }: { name: string; phone: string }) {
  return (
    <div className="sage-bg card">
      <div className="text-2xl text-center mb-3">{name}</div>
      <div className="text-center text-lg mb-4">{phone}</div>
      <div className="flex justify-center gap-3">
        <a
          className="size-11 rounded-lg bg-[#4267B2] text-white grid place-items-center"
          href="#"
          aria-label="Facebook"
        >
          <FaFacebook />
        </a>
        <a
          className="size-11 rounded-lg bg-[#7360F2] text-white grid place-items-center"
          href="#"
          aria-label="Viber"
        >
          <FaViber />
        </a>
        <a
          className="size-11 rounded-lg bg-[#25D366] text-white grid place-items-center"
          href="#"
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </a>
      </div>
    </div>
  );
}

export default Contacts;


