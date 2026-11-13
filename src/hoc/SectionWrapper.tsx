import React from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import { styles } from "../style";

interface Props {
  Component: React.ComponentType;
  idName: string;
}

const StarWrapper = ({ Component, idName }: Props) =>
  function SectionComponent() {
    return (
      <motion.section
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

export default StarWrapper;
