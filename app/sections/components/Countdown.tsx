import { useEffect, useMemo, useState } from "react";

export function useCountdown(targetIso: string) {
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

export function CountdownBoxes({
  target,
}: {
  target: string;
}) {
  const c = useCountdown(target);
  return (
    <div className="mt-8 grid grid-cols-4 gap-4 max-w-xl">
      <TimeBox label="Days" value={c.days} />
      <TimeBox label="Hours" value={c.hours} />
      <TimeBox label="Minutes" value={c.minutes} />
      <TimeBox label="Seconds" value={c.seconds} />
    </div>
  );
}

export function TimeBox({ label, value }: { label: string; value: number }) {
  return (
    <div className="sage-card card text-center">
      <div className="text-2xl font-semibold">{String(value).padStart(2, "0")}</div>
      <div className="text-sm text-gray-500">{label}</div>
    </div>
  );
}

export default CountdownBoxes;


