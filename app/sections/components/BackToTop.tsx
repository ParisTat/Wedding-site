import { useEffect, useState } from "react";

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 size-12 rounded-lg bg-gray-800 text-white shadow transition opacity-0 pointer-events-none ${
        show ? "opacity-100 pointer-events-auto" : ""
      }`}
    >
      ↑
    </button>
  );
}

export default BackToTop;


