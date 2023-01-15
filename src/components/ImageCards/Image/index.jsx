import { motion } from "framer-motion";

export const Image = ({ src, alt, initial, animate, transition }) => (
    <motion.img
        initial={initial}
        animate={animate}
        transition={transition}
        className="w-36 h-36 object-cover shadow-xl border border-neutral-800 shadow-neutral-800/60"
        src={src}
        alt={alt}
    />
);
