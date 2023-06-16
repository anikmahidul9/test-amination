/* eslint-disable no-constant-condition */
import { useState, useEffect } from "react";

const useCodeAnimation = (code) => {
  const [animatedCode, setAnimatedCode] = useState("");

  useEffect(() => {
    const animateCode = async () => {
      const words = code.split(" ");
      const wordDelay = 200;
      const pauseDelay = 2500;

      while (true) {
        for (let i = 0; i < words.length; i++) {
          const word = words[i];
          setAnimatedCode((prevCode) => prevCode + word + " ");
          await new Promise((resolve) => setTimeout(resolve, wordDelay));
        }

        await new Promise((resolve) => setTimeout(resolve, pauseDelay));
        setAnimatedCode("");
      }
    };

    animateCode();
  }, [code]);

  return animatedCode;
};

export default useCodeAnimation;