import "../App.css";
import {useRef} from "react";


const Nav = ({tabs}) => {
    const markerRef = useRef(null)
    const anchorRefs = useRef([])
    return (
        <div id={"nav-container"}>
            <nav>
                <div ref={markerRef} id={"marker"}></div>
                {tabs.map(link => (
                    <a href="#"
                       onClick={(e) => {
                           markerRef.current.style.left = e.currentTarget.offsetLeft + 'px';
                           markerRef.current.style.width = e.currentTarget.offsetWidth + 'px';
                       }}

                       onMouseOver={(e) => {
                           e.currentTarget.style.transform = "scale(1.2)";
                       }}

                       onMouseOut={(e) => {
                           e.currentTarget.style.transform = "scale(1)";
                       }}

                    >{link.name}</a>

                ))}
            </nav>
        </div>


        // run animate function here



    )
}
export default Nav