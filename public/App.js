"use strict";

///import '../css/App.css';
//import profilepic from '../static/images/Photo.jpeg';
var contentNode = document.getElementById('contents');

var component = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        { className: "heading" },
        "Mohit Agarwal"
    ),
    React.createElement("img", { className: "profile-pic", src: "./images/Mohit.jpg", alt: "Profile-pic", height: "202" }),
    React.createElement(
        "p",
        { className: "paragraph" },
        "Hello, my name is Mohit Agarwal currenlty a graduate student at San Diego State University in Coputer Science department.I enjoy playing cricket and hiking. I am a self-starter with a strong desire to succeed. I thrive on challenge and constantly set goals for myself, so I have something to strive toward. I'm continuously looking for methods to improve and attain excellence."
    ),
    React.createElement(
        "a",
        { href: "https://github.com/mohit03031999/assignment1.git" },
        React.createElement(
            "button",
            { className: "button1" },
            "View My GitHub Repo"
        )
    )
);

ReactDOM.render(component, contentNode);