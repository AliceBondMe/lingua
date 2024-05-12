import { FC, useEffect, useState } from "react";
import { animateScroll } from "react-scroll";
import { ArrowUp, ScrollUpBtn } from "./ScrollUpButton.styled";

export const ScrollUpButton: FC = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollUp = () => {
    animateScroll.scrollToTop({
      duration: 1000,
      smooth: true,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);

    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
    <>
      {visible && (
        <ScrollUpBtn type="button" aria-label="scroll up" onClick={scrollUp}>
          <ArrowUp />
        </ScrollUpBtn>
      )}
    </>
  );
};
