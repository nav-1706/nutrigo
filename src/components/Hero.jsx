import { useRef } from "react";
import { ScrollParallax } from "react-just-parallax";
import { motion } from "framer-motion";
import { FiActivity, FiHeart, FiStar } from "react-icons/fi";

import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        {/* Floating Icons */}
        <motion.div
          className="absolute top-10 left-10 text-color-4 opacity-30 text-2xl"
          animate={{ y: [0, 10, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <FiActivity />
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-16 text-color-6 opacity-30 text-2xl"
          animate={{ y: [0, -10, 0], rotate: [0, -15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <FiHeart />
        </motion.div>
        <motion.div
          className="absolute top-[50%] right-20 text-color-1 opacity-30 text-2xl"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <FiStar />
        </motion.div>

        {/* Hero Text */}
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <motion.h1
            className="h1 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Fuel Your Fitness Goals with&nbsp;
            <motion.span
              className="inline-block relative font-extrabold bg-gradient-to-r from-[#00FFD1] via-[#00ff95] to-[#00FFD1] bg-clip-text text-transparent"
              animate={{
                textShadow: [
                  "0 0 4px #00FFD1, 0 0 6px #00FFD1",
                  "0 0 8px #00ff95, 0 0 12px #00FFD1",
                  "0 0 4px #00FFD1, 0 0 6px #00FFD1",
                ],
                scale: [1, 1.03, 1],
                rotate: [-1, 1, -1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            >
              nutriGo{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </motion.span>
          </motion.h1>

          <motion.p
            className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8 text-center leading-relaxed"
            animate={{ opacity: [0.9, 1, 0.9] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-gradient-glow">
              Discover AI-powered vending machines offering healthy snacks and drinks,
              synced with your fitness goals. Earn rewards just by walking, running,
              or hitting the gym.
            </span>
          </motion.p>

          <motion.div
            animate={{
              scale: [1, 1.02, 1],
              boxShadow: [
                "0 0 0 rgba(0,0,0,0)",
                "0 0 15px rgba(0,255,209,0.15)",
                "0 0 0 rgba(0,0,0,0)",
              ],
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="inline-block"
          >
            <Button href="/get-started" white>
              Explore Now
            </Button>
          </motion.div>
        </div>

        {/* Hero Image */}
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <motion.img
                  src={robot}
                  className="w-full h-auto object-contain mx-auto max-h-[500px] md:max-h-[600px] lg:max-h-[700px]"
                  width={1024}
                  height={490}
                  alt="Smart Vending"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />

                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={`feature-${index}`} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="Fitness synced rewards"
                  />
                </ScrollParallax>
              </div>
            </div>

            <Gradient />
          </div>

          <motion.div
            className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]"
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </motion.div>

          <BackgroundCircles />
        </div>

        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;