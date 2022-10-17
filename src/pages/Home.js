import React from "react";
import Instagramicon from "@material-ui/icons/Instagram"
import Twittericon from "@material-ui/icons/Twitter"
import Facebookicon from "@material-ui/icons/Facebook"
import LinkedInicon from "@material-ui/icons/LinkedIn"
import "../styles/Home.css"

function Home() {
    return (
        <div className="home">
            <div className="about">
                <h2> Hi, my name is Dany</h2>
                <div className="prompt">
                    <p>A all runner with a broad wisdom</p>
                    <Instagramicon />
                    <Twittericon  />
                    <Facebookicon />
                    <LinkedInicon />
                </div>
            </div>
            <div className="skills"> 
                <h1>Coding Skills</h1>
                <ol className="list">
                    <li className="item">
                        <h2> Front-End</h2>
                        <span>ReactJS, HTML, CSS, Bootstrap, NPM</span>
                    </li>
                    <li className="item">
                        <h2> Back-End</h2>
                        <span> NodeJS</span>
                    </li>
                    <li className="item">
                        <h2> Languages</h2>
                        <span>JavaScript, Python </span>
                    </li>
                </ol>
            </div>
        </div>
    )
}



export default Home