import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const EducationSection = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      offset: 50,
    });
  }, []);
  return <div></div>;
};
