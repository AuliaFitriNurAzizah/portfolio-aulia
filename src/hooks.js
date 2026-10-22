import { useEffect, useState } from "react";

const reduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function useTyping(words) {
  const [i, setI] = useState(0);
  const [n, setN] = useState(0);
  const [del, setDel] = useState(false);
  const still = reduced();

  useEffect(() => {
    if (still) {
      const t = setInterval(() => setI((x) => (x + 1) % words.length), 2500);
      return () => clearInterval(t);
    }
    const w = words[i];
    let t;
    if (!del && n < w.length) t = setTimeout(() => setN(n + 1), 85);
    else if (!del) t = setTimeout(() => setDel(true), 1400);
    else if (n > 0) t = setTimeout(() => setN(n - 1), 45);
    else {
      setDel(false);
      setI((i + 1) % words.length);
    }
    return () => clearTimeout(t);
  }, [n, del, i, still, words]);

  return still ? words[i] : words[i].slice(0, n);
}

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("theme");
    } catch {
      return null;
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme) root.setAttribute("data-theme", theme);
    else root.removeAttribute("data-theme");
  }, [theme]);

  const dark = theme
    ? theme === "dark"
    : window.matchMedia("(prefers-color-scheme: dark)").matches;

  const toggle = () => {
    const next = dark ? "light" : "dark";
    setTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage unavailable */
    }
  };

  return { dark, toggle };
}
