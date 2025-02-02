import yogendra2 from "./yogendra2.jpg";

export default function About() {
  return (
    <div className="about">
      <div className="about-img-2">
        <img src={yogendra2} alt="yogendra2" className="about-img" />
      </div>
      <div className="about-about">
      <h1>
        About Me
        </h1>
        <h3>Hello, my name is yogendra Bairwa and I am full-stack and python developer</h3>
        
        <p>
        I am a full-stack developer with experience in building both front-end and back-end web applications. I have strong skills in using technologies like React, HTML, CSS for the front-end, and Python for the back-end. I enjoy solving problems and creating easy-to-use, efficient websites and applications.
        </p>
      </div>
    </div>
  );
}
