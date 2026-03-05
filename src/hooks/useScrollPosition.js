import { useEffect, useState } from "react";

const COMPACT_AT = 40;
const HIDE_LINKS_AT = 160;

export function useScrollPosition() {
  const [isCompact, setIsCompact] = useState(false);
  const [hideLinks, setHideLinks] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setIsCompact(y > COMPACT_AT);
      setHideLinks(y > HIDE_LINKS_AT);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { isCompact, hideLinks };
}
