import "../App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import {AnimatePresence, motion} from "framer-motion";
import {useState, useRef, useEffect} from "react";

const Render = ({page}) => {
    const [switched, switchPage] = useState(false)

    useEffect(() => {
        switchPage(!switched);
    }, [page]);

    return (
        <div className="site-content">
            <AnimatePresence intial={false} mode={"wait"}>
                {page === "Home" && <Home key={"Home"} />}
                {page === "About" && <About key={"About"}/>}
                {page === "Projects" && <Projects key={"Projects"}/>}
            </AnimatePresence>
        </div>
    )
}

export default Render;

