import React from "react";
import "./DarkMode.css";
import {useRef} from "react";
import {useState} from "react";

const DarkMode = () => {
    const moonRef = useRef(null)
    const setDark = () => {
        document.querySelector("body").setAttribute('data-theme', "dark")
        localStorage.setItem("selectedTheme", "dark")
    }

    const setLight = () => {
        document.querySelector("body").setAttribute('data-theme', "dark light")
        localStorage.setItem("selectedTheme", "dark light")
    }
    const selectedTheme = localStorage.getItem("selectedTheme")

    if (selectedTheme === "dark") {
        setDark()
    } else {
        setLight()
    }

    const [dark, setState] = useState(selectedTheme === "dark")
    const toggleTheme = (e) => {
        if (dark) {
            setLight()
            setState(false)
            moonRef.current.className = "moon sun"
            e.currentTarget.setAttribute("class", "dark light")
        } else {
            setDark()
            setState(true)
            moonRef.current.className = "moon"
            e.currentTarget.setAttribute("class", "dark")
        }
    }
    return (
        <div className={selectedTheme}
             onClick={toggleTheme}>
                    <div className={dark ? "moon": "moon sun"} ref={moonRef} onClick={toggleTheme}> </div>
        </div>
    );
};

export default DarkMode;
