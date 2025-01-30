"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function AOSInitializer() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
      offset: 100,
      easing: "ease-in-out",
    });

    return () => {
      AOS.refresh();
    };
  }, []);

  return null;
}
