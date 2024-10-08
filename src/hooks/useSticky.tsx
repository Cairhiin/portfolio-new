import { useRef, useState, useEffect } from "react";

export default function useSticky(): {
  ref: React.RefObject<HTMLDivElement>;
  isSticky: boolean;
} {
  const ref = useRef<HTMLDivElement>(null);

  const [isSticky, setIsSticky] = useState<boolean>(false);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const observer: IntersectionObserver = new IntersectionObserver(
      ([event]) => setIsSticky(event.intersectionRatio < 1),
      { threshold: [1], rootMargin: "-1px 0px 0px 0px" }
    );
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return { ref, isSticky };
}
