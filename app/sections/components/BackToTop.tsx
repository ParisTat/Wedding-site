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
      onClick={() => {
        try {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } catch (_) {
          window.scrollTo(0, 0);
        }
        const root = document.documentElement || (document.body as HTMLElement);
        (root as any).scrollTo?.({ top: 0, behavior: "smooth" });
      }}
      className={`fixed bottom-6 right-6 size-12 rounded-lg bg-white text-gray-800 border border-black/10 shadow transition z-[9999] ${
        show ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      style={{ display: "grid", placeItems: "center" }}
    >
      ↑
    </button>
  );
}

export default BackToTop;


