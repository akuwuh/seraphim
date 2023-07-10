import {motion} from "framer-motion";
import "../../App.css";

const Home = () => {
    return (
        <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration: 0.35, ease:"easeInOut"}}
            exit={{opacity:0}}
        >
            <h1 style={{ fontSize: "2em", color: "blue" }}>
                Current Page: Home
            </h1>
        </motion.div>
    );
};

export default Home;