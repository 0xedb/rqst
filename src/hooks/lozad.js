import { useEffect } from "react";
import lozad from "lozad";

export const useLozad = selector =>
  useEffect(() => {
    let el;
    let observer;
    if (!selector) {
      observer = lozad();
    } else {
      el = document.querySelector(selector);
      observer = lozad(el);
    }
    observer.observe();
  });
