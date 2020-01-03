import { useEffect } from "react";
import lozad from "lozad";

export const useLozad = (selector?: string) =>
  useEffect(() => {
    let el: Element;
    let observer: lozad.Observer;
    if (!selector) {
      observer = lozad();
    } else {
      el = document.querySelector(selector);
      observer = lozad(el);
    }
    observer.observe();
  });
