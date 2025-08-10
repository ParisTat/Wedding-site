import { useEffect, useState } from "react";

const LINKS = [
  { href: "#hero", label: "Home" },
  { href: "#ceremony", label: "Appointment" },
  { href: "#reception", label: "Reception" },
  { href: "#rsvp", label: "RSVP" },
  { href: "#wishes", label: "Wishes" },
  { href: "#instagram", label: "Instagram" },
  { href: "#contacts", label: "Get in touch" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition backdrop-blur supports-[backdrop-filter]:bg-white/70 ${
        scrolled ? "shadow-sm border-b border-black/10" : ""
      }`}
    >
      <nav className="container-padded flex items-center justify-between h-16">
        <a href="#hero" className="font-script text-2xl text-gray-800">
          A & G
        </a>
        <ul className="hidden md:flex items-center gap-6 text-sm">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                className="text-gray-700 hover:text-gray-900"
                href={l.href}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;


