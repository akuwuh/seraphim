import "../App.css";
import {useEffect, useRef, useState} from "react";


const Nav = ({tabs, onPageChange, currPage}) => {
    const markerRef = useRef(null)
    const anchorRefs = useRef([])

    useEffect(() => {
        // Check if an active link is set
        if (currPage !== null) {
            // Get the corresponding anchor element
            const activeAnchor = anchorRefs.current.find(
                (ref) => ref.textContent === currPage
            );

            markerRef.current.style.left = activeAnchor.offsetLeft + 'px';
            markerRef.current.style.width = activeAnchor.offsetWidth + 'px';
        }
    }, [currPage]);

    return (
        <div id={"nav-container"}>
            <nav>
                <div ref={markerRef} id={"marker"}></div>
                {tabs.map((link, index) => (
                    <a href="#"
                       ref={(el) => (anchorRefs.current[index] = el)}
                       onClick={() => {
                           onPageChange(link.name)
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