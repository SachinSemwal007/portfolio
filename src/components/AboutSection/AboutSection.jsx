import "./AboutSection.css";

function AboutSection() {
  return (
    <div id="about" className="about section">
      <h1>About Me</h1>
      <p id="user-detail-intro">
        A Full Stack Web Developer with expertise in <b>MERN</b> <b>Stack</b>. I have
        solved 500+ DSA problems in C++ through various coding platforms such as
        :-
        <b>
          {" "}
          <a href="https:///user/edwardnorton007/">
            Geeksforgeeks
          </a>{" "}
          ,{" "}
          <a href="https://codeforces.com/profile/sachinsemwal18">Codeforces</a>
          , <a href="https://www.codechef.com/users/sachinsemwal">Codechef</a> ,
          <a href="https://leetcode.com/u/sachinsemwal18/"> Leetcode</a>{" "}
        </b>
        etc.. My tech toolkit includes{" "}
        <b>
          React, Redux, NEXT.js, Tailwind, Node, Express, Mongoose, MongoDB,
          SQL, AWS, HTML, CSS, JavaScript, Typescript, Json, Postman , Git , Github{" "}
        </b>{" "}
        etc . I&apos;m passionate about creating efficient, elegant code and
        have experience in both front-end and back-end development. I thrive on
        problem-solving and love collaborating with teams to build innovative
        solutions. Let&apos;s connect and turn ideas into reality through
        technology. You can reach me at{" "}
        <a href="#contact" className="contactMe">
          Contact Me
        </a>
        .
      </p>
    </div>
  );
}

export default AboutSection;
