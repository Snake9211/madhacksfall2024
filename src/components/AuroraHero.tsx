// Unused component, but it's a background with a gradient that changes colors over time if we need.

import { animate, motion, useMotionTemplate, useMotionValue } from "framer-motion";

import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useEffect } from "react";

const COLORS_TOP = ["#ff0000", "#ff4444", "#ff6767", "#ff8f8f"];


export const AuroraHero = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 5,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 100% at 50% 0%, #A9A9A9 50%, ${color})`;

  return (
    <motion.section
      style={{ backgroundImage }}
      className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-200 px-4 py-24 text-gray-200"
    >
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  );
};
