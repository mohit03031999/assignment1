///import '../css/App.css';
//import profilepic from '../static/images/Photo.jpeg';
const contentNode = document.getElementById('contents');

const component = (
    <div>
        <h1 className="heading">Mohit Agarwal</h1>
        <img className="profile-pic" src="./images/Mohit.jpg" alt="Profile-pic" height="202"></img>
        <p className="paragraph" >
            Hello, my name is Mohit Agarwal currenlty a graduate student at San Diego State University in Coputer Science department.I enjoy playing cricket and hiking. I am a self-starter with a strong desire to succeed. I thrive on challenge and constantly set goals for myself, so I have something to strive toward. I'm continuously looking for methods to improve and attain excellence.
        </p>
        <a href='https://github.com/mohit03031999/assignment1.git'>
            <button className="button1">View My GitHub Repo</button>
        </a>
    </div>
);


ReactDOM.render(component, contentNode);