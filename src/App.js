import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <aside // Everything inside the aside <> is part of the side bar
        id="border"
        className="border js-fullheight"
        style={{
          fontSize: "16px",
          top: 0,
          left: 0,
          position: "fixed",
          backgroundColor: "#1b130b",
          height: "100vh",
          width: "15%",
        }}
      >
        <div className="centerImage" style={{ padding: "20px" }}>
          <img
            src={
              // Picture of me right here aren't I pretty (idk)
              // Why did I say this was I high? (11/15/2024)
              process.env.PUBLIC_URL +
              "/Images/Saaketh_Headshot_1-removebg-preview.png"
            }
            //className="App-logo"
            alt=""
            style={{ width: "190px", height: "270px" }}
          />
          <h1 style={{ fontSize: "30px", color: "#FAF9F6" }}>
            <p>Saaketh Sodanapalli</p>
          </h1>
          <div>
            <nav>
              <ul style={{ listStyleType: "none", fontSize: "20px" }}>
                <li className="nav_place">
                  <a className="nav_buttons" href="#Introduction">
                    Introduction
                  </a>
                </li>
                <li className="nav_place">
                  <a className="nav_buttons" href="#Projects">
                    Projects
                  </a>
                </li>
                <li className="nav_place">
                  <a className="nav_buttons" href="#Contact">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </aside>

      <main style={{ marginLeft: "15%", backgroundColor: "#FAF9F6" }}>
        <header className="App-header">
          <h1
            style={{
              fontSize: "100px",
              fontFamily: "Roboto",
              marginLeft: "-40%",
              textAlign: "left",
            }}
          >
            Hi!
            <br />
            I'm Saaketh
          </h1>
          <a // The resume clicker button
            className="spec_button"
            href={`${process.env.PUBLIC_URL}/Images/Resume_Sodanapalli_Saaketh.pdf`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume Link
            <img
              className="spec_img"
              src={process.env.PUBLIC_URL + "/Images/pngwing.com.png"} // This is for that little symbol besides 'Resume'
              alt=""
              style={{ height: "25px", top: "10px" }}
            />
          </a>
        </header>

        <section className="sections1" id="Introduction">
          <h1 className="Header"> Introduction </h1>
          <p className="text-content" style={{ textIndent: "50px" }}>
            Hello and welcome to my website! My name is Saaketh Sodanapalli and
            I'm currently a junior at the University of Massachusetts Amherst
            double majoring in Computer Engineering and Math.
          </p>
          <p className="text-content" style={{ textIndent: "50px" }}>
            Outside my studies, I like to workout a lot and am currently a part
            of my universities club swim team, with me making club nationals
            both years! I have also been starting to get into running and
            triathlons lately. I also like to read books, ranging from a wide
            amount of genres, from thrillers to fantasy although lately I've
            been starting to read some non-fiction like Atomic Habits.
          </p>
          <p className="text-content" style={{ textIndent: "50px" }}>
            I've always been interested in Computers and coding, with my entire
            family having jobs focused in that field, leading me to this major.
            So far, I am interested in developing and using AI to help solve and
            simplify problems, as well as developing new hardware such as
            embedded systems and robotics to help solve problems and improve the
            quality of life of people.
          </p>
        </section>
        <section className="sections1" id="Projects">
          <h1 className="Header">Projects</h1>
          <h3>Spotify Current Song Player</h3>
          <p style={{ textIndent: "50px" }}>
            I hated constantly switcing between Chrome and Spotify in order to
            skip songs so I created a Chrome Extension that displays the current
            song playing alongside an option to skip the song. I used
            JavaScript, HTML, and CSS for this project, accessing various Chrome
            APIs alongside the Spotify API in order to get this to work. This
            project is also currently a work in progress with some
            troubleshooting needed for the skip button to fully function.
          </p>
          <p style={{ fontSize: "15px" }}>
            Below is the extension, with the song playing in the black box on
            the top left with the complete song details on the extension pop-up
          </p>
          <img
            src={
              // Image for the chrome extension
              process.env.PUBLIC_URL + "/Images/Chrome_Extension_Smaller.jpg"
            }
            alt=""
            style={{ width: "300px", height: "200px" }}
          />
          <h3>Ultrasonic Distance Tracker</h3>
          <p style={{ textIndent: "50px" }}>
            For my embedded systems class, I had to design something that could
            track the distance from a sensor and display it on an OLED screen. I
            used the Arduino Uno, with HC-SR04 Ultrasonic Sensor and an 4 digit
            7 segment LED Display to display the distance in cm. I coded this
            project in C, and was able to measure the distance from anything
            within 200 centimeters.
          </p>
          <img
            src={process.env.PUBLIC_URL + "/Images/IMG_5548.jpg"} // Ultrasonic Tracker Image
            alt=""
            style={{ width: "310px", height: "255px" }}
          />
          <h3>Cooking Recipe Generator</h3>
          <p style={{ textIndent: "50px" }}>
            {""}
            For a hackathon, my team and I developed an app that allows you to
            input in ingrediants you want to make a meal with, then scrapes Food
            Networks recipes to find a recipe that mathces the criteria entered
            in. We used React for the front end design, using Python and Flask
            for the backend. We used the Github API calls to search through all
            of the recipes in Food Network to find any recipes that have the
            ingrediants inputted in.
          </p>
          <h3>This website!</h3>
          <p style={{ textIndent: "50px" }}>
            I developed this portfolio website utilizing React as the core
            framework, with Git serving as the version control system to
            efficiently manage and track the progress of the site.
          </p>
          <h3>Snake and Tetris</h3>
          <p style={{ textIndent: "50px" }}>
            {" "}
            In my introductory programming course, ECE 122, I programmed the two
            games, Snake and Tetris. Utilizing Python and the Tkinter library, I
            crafted the visual displays and underlying mechanics to bring these
            games to life."
          </p>
          <div>
            <img
              src={process.env.PUBLIC_URL + "/Images/Snake_game.png"}
              alt=""
              style={{ width: "200px", height: "400px" }}
            />
            <img
              src={process.env.PUBLIC_URL + "/Images/Tetris_game.png"}
              alt=""
              style={{ width: "200px", height: "400px" }}
            />
          </div>
        </section>
        <section
          className="sections1"
          style={{ padding: "0px 75px 110px 75px" }} //This adds the little bit of space at the very bottom of the page
          id="Contact"
        >
          <h1 className="Header">Contact Me!</h1>
          <p>Email: saaketh1001@gmail.com</p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/saaketh-sodanapalli-863a65228/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              LinkedIn Profile
            </a>
          </p>
          <p>Phone Number: (720)-319-1842 </p>
          <p>
            Github:{" "}
            <a
              href="https://github.com/Saaketh0"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Github Profile
            </a>
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;

/* If I ever want to add a skills section
        <section className='sections1' id="Skills">
          <h1 className='Header'>My Skills</h1>
          <div className="container">
            <div className="section" style = {{ marginLeft:"20%"}}><h3>Software</h3></div>
              <ul style = {{listStyleType:"none",marginLeft:"-100px"}}>
                <li>JavaScript</li>
                <li>React</li>
                <li>Python</li>
              </ul>
            <div className="section" style = {{marginLeft:"30%",fontSize:"25px"}}>Soft Skills</div>  
              <ul style = {{listStyleType:"none" ,marginLeft:"-80px",fontSize:"20px"}}>
                <li>
                  Communication
                  <div className="box"> I excel at communication by actively listening to others and expressing my thoughts based on feedback. My ability to adapt my communcation style to the intended audience helps me convey my point as well as build relationships and understand each other better</div>
                </li>
                <li>
                  Adaptability
                  <div className="box">Description of Adaptability</div>
                </li>
                <li>
                  Problem Solving
                  <div className="box">Description of Problem Solving</div>
                </li>
              </ul>
          </div>
        </section>
  */
