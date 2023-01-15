import { easeOut, motion } from "framer-motion"

export const BigTitle = ({children}) => (
    <motion.h1 
    initial={{opacity: 0, y: 70}}
    animate={{opacity: 1, y: 0}}
    transition={{duration: 1, ease: easeOut}}
    className="text-7xl mb-6 text-center tracking-tighter">{children}</motion.h1>
)