import { motion } from "framer-motion";

export const Signup = () => (
    <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{
            type: "spring",
            duration: 2,
        }}
        className="border-l border-black w-1/2 h-full bg-white basis-0 grow flex items-center justify-center p-12">
        <div className="flex flex-col w-full">
            <h3 className="font-semibold text-lg mb-2">Sign-up</h3>
            <Input
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 1 }}
                placeholder="Coloque seu e-mail..."
            />
            <Input
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 1.2 }}
                placeholder="Coloque sua senha..."
            />
            <span className="ml-auto text-xs text-neutral-500 mb-4 hover:underline cursor-pointer">
                Esqueci minha senha
            </span>
            <div className="flex items-center justify-start flex-row-reverse gap-2 [&_button]:w-1/4">
                <motion.button
                    whileTap={{ scale: 0.97 }}
                    className="font-semibold p-2 bg-black text-white">
                    Enviar
                </motion.button>
                <motion.button
                    whileTap={{ scale: 0.97 }}
                    className="p-2 text-neutral-500 border border-neutral-400">
                    Criar conta
                </motion.button>
            </div>
        </div>
    </motion.div>
);

export const Input = ({ placeholder, initial, animate, transition }) => (
    <motion.input
        initial={initial}
        animate={animate}
        transition={transition}
        className=" p-3 border [&_input:focus]:border-black mb-2 border-neutral-400 placeholder:text-sm"
        type="text"
        placeholder={placeholder}
    />
);
