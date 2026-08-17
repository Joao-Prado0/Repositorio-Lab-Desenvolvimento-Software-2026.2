import { motion } from "framer-motion";

const TypewriterText = ({ text }) => {
    const letters = text.split("");

    const containerVariants = {
        hidden: { opacity: 1 },
        // 'staggerChildren' define o tempo entre a aparição de cada letra
        visible: { transition: { staggerChildren: 0.03 } }
    };

    const letterVariants = {
        // As letras começam escondidas (ocupando 0 espaço) e aparecem
        hidden: { opacity: 0, display: "none" },
        visible: { opacity: 1, display: "inline" }
    };

    return (
        <motion.p
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {letters.map((letter, index) => (
                <motion.span key={index} variants={letterVariants}>
                    {letter}
                </motion.span>
            ))}
            <span className="cursor">|</span>
        </motion.p>
    );
};

export default TypewriterText