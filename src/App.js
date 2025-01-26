import React from "react";
import "./App.css";
import Card from "./Card.js";

function App() {
  return (
    <div
      className="App"
      style={{
        //marginTop: "80px",
        width: "100%",
        padding: "0",
        boxSizing: "border-box",
        maxWidth: "100vw",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "100%",
          margin: "0",
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
        }}
      >
        <aside
          id="border"
          className="border js-fullheight"
          style={{
            fontSize: "16px",
            top: 0,
            left: 0,
            position: "fixed",
            backgroundColor: "rgba(27, 19, 11, 0.8)",
            backdropFilter: "blur(5px)",
            height: "50px",
            width: "100%",
            zIndex: 1000,
          }}
        >
          <div
            className="centerImage"
            style={{
              padding: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h1
              style={{ fontSize: "24px", color: "#FAF9F6", margin: "0 20px" }}
            >
              Saaketh Sodanapalli
            </h1>
            <nav style={{ marginRight: "40px" }}>
              <ul
                style={{
                  listStyleType: "none",
                  fontSize: "20px",
                  display: "flex",
                  gap: "50px", // Increased gap between navigation items
                  margin: 0,
                  padding: 0,
                }}
              >
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
        </aside>

        <main
          style={{
            marginLeft: "0%",
            backgroundColor: "rgba(31, 31, 31, 0.8)",
          }}
        >
          <header className="App-header">
            <div className="bubble-text-container">
              {Array.from("Hi!").map((child, idx) => (
                <span
                  className="hoverText"
                  key={idx}
                  style={{ display: "inline-block" }}
                >
                  {child}
                </span>
              ))}
              <br />
            </div>
            <div className="bubble-text-container">
              {Array.from("I'm Saaketh").map((child, idx) => (
                <span
                  className="hoverText"
                  key={idx}
                  style={{ display: "inline-block" }}
                >
                  {child}
                </span>
              ))}
            </div>
            <a
              className="spec_button"
              href={`${process.env.PUBLIC_URL}/Images/Resume_Saaketh_Sodanapalli.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginLeft: "-40%",
                marginTop: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "fit-content",
                gap: "10px",
              }}
            >
              Resume Link
              <img
                className="spec_img"
                src={process.env.PUBLIC_URL + "/Images/pngwing.com.png"}
                alt=""
                style={{
                  height: "25px",
                  display: "block",
                  margin: "auto 0",
                }}
              />
            </a>
          </header>
          <section className="sections1" id="Introduction">
            <h1 className="Header"> Introduction </h1>
            <p className="text-content" style={{ textIndent: "50px" }}>
              Hello and welcome to my website! My name is Saaketh Sodanapalli
              and I'm currently a junior at the University of Massachusetts
              Amherst double majoring in Computer Engineering and Math.
            </p>
            <p className="text-content" style={{ textIndent: "50px" }}>
              Outside my studies, I like to workout a lot and am currently a
              part of my universities club swim team, with me making club
              nationals both years! I have also been starting to get into
              running and triathlons lately. I also like to read books, ranging
              from a wide amount of genres, from thrillers to fantasy although
              lately I've been starting to read some non-fiction like Atomic
              Habits.
            </p>
            <p className="text-content" style={{ textIndent: "50px" }}>
              I've always been interested in Computers and coding, with my
              entire family having jobs focused in that field, leading me to
              this major. So far, I am interested in developing and using AI to
              help solve and simplify problems, as well as developing new
              hardware such as embedded systems and robotics to help solve
              problems and improve the quality of life of people.
            </p>
          </section>
          <section className="sections1" id="Projects">
            <h1 className="Header">Projects</h1>
            <div className="cards-matrix">
              <Card
                title="Spotify Current Song Player"
                description="I created a Chrome Extension that displays the current song playing alongside an option to skip the song. I used JavaScript, HTML, and CSS for this project, accessing various Chrome APIs alongside the Spotify API. This project is also currently a work in progress with some troubleshooting needed for the skip button to fully function."
                image={
                  process.env.PUBLIC_URL +
                  "/Images/Chrome_Extension_Smaller.jpg"
                }
              />
              <Card
                image={process.env.PUBLIC_URL + "/Images/IMG_5548.jpg"}
                title="Ultrasonic Distance Tracker"
                description="For my embedded systems class, I designed a device that could track the distance from a sensor and display it on an OLED screen. I used the Arduino Uno, with HC-SR04 Ultrasonic Sensor and a 4 digit 7 segment LED Display to display the distance in cm. I coded this project in C, and was able to measure the distance from anything within 200 centimeters."
              />
              <Card
                //image={process.env.PUBLIC_URL + "/Images/recipe_generator.jpg"}
                title="Cooking Recipe Generator"
                description="For a hackathon, my team and I developed an app that allows you to input ingredients you want to make a meal with, then scrapes Food Networks recipes to find a recipe that matches the criteria entered in. We used React for the front end design, using Python and Flask for the backend. We used the Github API calls to search through all of the recipes in Food Network."
              />
              <Card
                //image={process.env.PUBLIC_URL + "/Images/portfolio.jpg"}
                title="This Portfolio Website"
                description="I developed this portfolio website utilizing React as the core framework, with Git serving as the version control system to efficiently manage and track the progress of the site."
              />
              <Card
                image={process.env.PUBLIC_URL + "/Images/Snake_game.png"}
                title="Snake Game"
                description="In my introductory programming course, ECE 122, I programmed the classic Snake game utilizing Python and the Tkinter library. I crafted the visual displays and underlying mechanics to bring this game to life."
              />
              <Card
                image={process.env.PUBLIC_URL + "/Images/Tetris_game.png"}
                title="Tetris"
                description="Also in ECE 122, I created a fully functional Tetris game using Python and Tkinter. This project demonstrated my ability to implement complex game mechanics and user interfaces."
              />
            </div>
          </section>

          <section
            className="sections1"
            style={{ padding: "0px 75px 0px 75px" }} //This adds the little bit of space at the very bottom of the page
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
    </div>
  );
}
/*
const BubbleText = () => {
  return (
    <div className="bubble-text-container">
      {Array.from("Bubbbbbbbble text").map((child, idx) => (
        <span
          className="hoverText"
          key={idx}
          style={{ display: "inline-block" }}
        >
          {child}
        </span>
      ))}
    </div>
  );
};
*/
export default App;
