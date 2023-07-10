import "../../App.css";
import {motion} from "framer-motion";
const Projects = () => {
    return (
        <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration: 0.35, ease:"easeInOut"}}
            exit={{opacity:0}}
        >
            <h1 style={{ fontSize: "2em", color: "blue" }}>
                Current Page: Projects
            </h1>
        </motion.div>
    );
};

export default Projects;