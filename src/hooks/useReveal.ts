"use client";

import { useEffect, useCallback } from "react";

export function useReveal() {
  const startCounters = useCallback(() => {
    document.querySelectorAll("[data-counter]").forEach((el) => {
      const target = el.getAttribute("data-counter") || "0";
      const suffix = el.getAttribute("data-counter-suffix") || "";
      const prefix = el.getAttribute("data-counter-prefix") || "";

      // Handle special values like "24/7"
      if (target === "24/7") {
        animateText(el as HTMLElement, "24/7");
        return;
      }

      const num = parseInt(target, 10);
      if (isNaN(num)) {
        (el as HTMLElement).textContent = prefix + target + suffix;
        return;
      }

      animateCounter(el as HTMLElement, num, prefix, suffix);
    });
  }, []);

  useEffect(() => {
    // Reveal observer
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -80px 0px" }
    );

    // Counter observer
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounters();
            counterObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    // Observe all reveal elements
    document
      .querySelectorAll(".reveal, .reveal-scale, .reveal-left, .reveal-right, .stagger-children")
      .forEach((el) => revealObserver.observe(el));

    // Observe counter sections
    document
      .querySelectorAll("[data-counter-section]")
      .forEach((el) => counterObserver.observe(el));

    return () => {
      revealObserver.disconnect();
      counterObserver.disconnect();
    };
  }, [startCounters]);
}

function animateCounter(
  el: HTMLElement,
  target: number,
  prefix: string,
  suffix: string
) {
  const duration = 2000;
  const start = performance.now();

  function update(now: number) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(eased * target);

    el.textContent = prefix + current + suffix;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = prefix + target + suffix;
    }
  }

  requestAnimationFrame(update);
}

function animateText(el: HTMLElement, finalText: string) {
  const duration = 800;
  const start = performance.now();
  const chars = finalText.split("");

  function update(now: number) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const showCount = Math.round(eased * chars.length);

    el.textContent = chars.slice(0, showCount).join("");

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = finalText;
    }
  }

  requestAnimationFrame(update);
}
