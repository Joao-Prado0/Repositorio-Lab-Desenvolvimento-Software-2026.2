import './TypeWritterText.css'
import { useMemo } from 'react';
import { motion } from "framer-motion";

const BR_REGEX = /<br\s*\/?\s*>/i;

const TypewriterText = ({ text, animate = true, maxAnimatedChars = 320 }) => {
    const shouldRenderStatic = !animate || text.length > maxAnimatedChars;

    const tokens = useMemo(() => {
        const parts = text.split(/(<br\s*\/?\s*>)/gi);

        return parts.flatMap((part) => {
            if (BR_REGEX.test(part)) return [{ type: 'br' }];
            return part.split(/(\s+)/).filter(Boolean).map((value) => ({ type: 'text', value }));
        });
    }, [text]);

    const containerVariants = {
        hidden: { opacity: 1 },
        // Stagger por palavra reduz drasticamente o custo para textos maiores.
        visible: { transition: { staggerChildren: 0.035 } }
    };

    const wordVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };

    if (shouldRenderStatic) {
        return <p dangerouslySetInnerHTML={{ __html: text }} />;
    }

    return (
        <motion.p
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {tokens.map((token, index) => {
                if (token.type === 'br') {
                    return <br key={`br-${index}`} />;
                }

                if (/^\s+$/.test(token.value)) {
                    return <span key={`space-${index}`}>{token.value}</span>;
                }

                return (
                    <motion.span key={`word-${index}`} variants={wordVariants}>
                        {token.value}
                    </motion.span>
                );
            })}
            <span className="cursor">|</span>
        </motion.p>
    );
};

export default TypewriterText