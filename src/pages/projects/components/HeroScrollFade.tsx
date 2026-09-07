import { type ReactNode } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

interface Props {
    children: ReactNode;
    distance?: number;
    drift?: number;
}

export const HeroScrollFade = ({ children, distance = 300, drift = 150 }: Props) => {
    const reduceMotion = useReducedMotion();

    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, distance], [0, drift]);
    const opacity = useTransform(scrollY, [0, distance], [1, 0]);

    if (reduceMotion) {
        return <div>{children}</div>;
    }

    return (
        <motion.div style={{ y, opacity }}>
            {children}
        </motion.div>
    );
};
