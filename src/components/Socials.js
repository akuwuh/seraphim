import "../App.css";
import {useState} from "react";
import {ReactComponent as Github} from "../icons/gh.svg"
import {ReactComponent as Spotify} from "../icons/sp.svg"
import {ReactComponent as Linkedin} from "../icons/li.svg"
import {ReactComponent as Leetcode} from "../icons/lc.svg"
import {ReactComponent as GithubActive} from "../icons/gh active.svg"
import {ReactComponent as LinkedinActive} from "../icons/li active.svg"
import {ReactComponent as LeetcodeActive} from "../icons/lc active.svg"
import {ReactComponent as SpotifyActive} from "../icons/sp active.svg"


const Socials = () => {
    const [GHisHovered, GHsetHover]= useState(false)
    const [LIisHovered, LIsetHover]= useState(false)
    const [LCisHovered, LCsetHover]= useState(false)
    const [SPisHovered, SPsetHover]= useState(false)
    return (
        <div className={"social-container"}>
            <a target={"_blank"} href={'https://github.com/akuwuh'}
                onMouseOver={
                    function () {
                        LIsetHover(false)
                        LCsetHover(false)
                        SPsetHover(false)
                        GHsetHover(true)
                    }}

               onMouseOut={
                   function () {
                       GHsetHover(false)
                   }}>
                {GHisHovered ? <GithubActive className={"social-icon-hover"}/>: <Github className={"social-icon"}/>}
            </a>

            <a target={"_blank"} href={'https://www.linkedin.com/in/isaacnng/'}
               onMouseOver={
                   function () {
                       LIsetHover(true)
                       LCsetHover(false)
                       SPsetHover(false)
                       GHsetHover(false)
                   }}

               onMouseOut={function () {
                   LIsetHover(false)
               }}>
                {LIisHovered ? <LinkedinActive className={"social-icon-hover"}/>: <Linkedin className={"social-icon"}/>}
            </a>

            <a target={"_blank"} href={'https://leetcode.com/akuwuh'}
               onMouseOver={
                   function () {
                       LIsetHover(false)
                       LCsetHover(true)
                       SPsetHover(false)
                       GHsetHover(false)
                   }}
               onMouseOut={
                    function () {
                        LCsetHover(false)
                    }}>
                {LCisHovered ? <LeetcodeActive className={"social-icon-hover"}/>: <Leetcode className={"social-icon"}/>}
            </a>
            <a target={"_blank"} href={'https://open.spotify.com/user/x37j9ttb3am6sydnqvjcgh7m7'}
                onMouseOver={
                    function () {
                        LIsetHover(false)
                        LCsetHover(false)
                        SPsetHover(true)
                        GHsetHover(false)
                    }}
                onMouseOut={
                    function () {
                        SPsetHover(false)
                    }}>
                {SPisHovered ? <SpotifyActive className={"social-icon-hover"}/>: <Spotify className={"social-icon"}/>}
            </a>
        </div>
    )
}

export default Socials