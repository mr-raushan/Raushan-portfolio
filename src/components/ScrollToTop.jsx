/* eslint-disable */
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed
        bottom-8
        right-8
        z-50
        h-14
        w-14
        rounded-full
        border
        border-white/10
        bg-white/10
        backdrop-blur-xl
        flex
        items-center
        justify-center
        transition-all
        duration-300
        hover:scale-110
        hover:bg-blue-500
        ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5 pointer-events-none"
        }
      `}
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTop;
