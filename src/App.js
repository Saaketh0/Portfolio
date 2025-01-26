import React from "react";
import "./App.css";
import Card from "./Card.js";

function App() {
  return (
    <div className="App">
      <div
        style={{
          display: "flex", // Keeps the length constant
          flexDirection: "column", // Keeps the page width constant
          alignItems: "stretch", // Keeps the page width constant
        }}
      >
        <aside
          style={{
            position: "fixed",
            height: "50px",
            width: "100%",
          }}
        >
          <nav>
            <ul className="nav_place">
              <li>
                <a className="nav_buttons" href="#Introduction">
                  Introduction
                </a>
              </li>
              <li>
                <a className="nav_buttons" href="#Projects">
                  Projects
                </a>
              </li>
              <li>
                <a className="nav_buttons" href="#Contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        <main
          style={{
            marginLeft: "0%",
            backgroundColor: "rgba(31, 31, 31, 0.8)",
          }}
        >
          <header className="App-header">
            <div
              className="bubble-text-container"
              style={{ marginLeft: "-59%" }}
            >
              {Array.from("Hi!").map((child, idx) => (
                <span
                  className="hoverText"
                  key={idx}
                  style={{ display: "inline-block" }}
                >
                  {child}
                </span>
              ))}
            </div>
            <div
              className="bubble-text-container"
              style={{ marginLeft: "-36.6%" }}
            >
              {Array.from("I'm     Saaketh").map((child, idx) => (
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
                marginLeft: "-54.5%",
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
            <p className="text-content">
              Hello and welcome to my website! My name is Saaketh Sodanapalli
              and I'm currently a junior at the University of Massachusetts
              Amherst pursuing a B.S in Computer Engineering and a dual B.S. in
              Mathematics.
            </p>
            <p className="text-content">
              I decided to be Computer Engineering because of my interest in
              computers, considering how ingrained it is in todays society. I
              really wanted to learn the ins and outs of both software and
              hardware, leading me to pick CompE over CompSci. I decided to
              pursue a secondary major in Mathematics with a Mathematical
              Computing concentration, as I've wanted to pursue a career in AI
              and Machine Learning and the math required for that. I love to
              learn new things, and I'm always looking for new opportunities to
              learn.
            </p>
            <p className="text-content">
              Outside my studies, I like to workout a lot and am currently a
              part of my universities club swim team (Go UMCS!), with me making
              the national swim meet every year so far! Alongside swimming, I've
              been getting more into running and triathlons lately, if I can
              figure out how to avoid shin splints. I also like to read books,
              like thrillers and fantasy, although lately I've been starting to
              read some non-fiction like Atomic Habits.
            </p>
            <p className="text-content">
              Hope you like my website! Below are my projects and below that is
              my contact information. I'd love to hear any suggestions on
              improvements for my website too, I'd love to make it look even
              better than it is right now.
            </p>
          </section>
          <section className="sections1" id="Projects">
            <h1 className="Header">Projects</h1>
            <div className="cards-matrix">
              <Card
                title="miniGPT"
                description="This is the current project I am working on. It is a mini version of the GPT-2 model, having an decoder only architecutre and 
                is currently being trained on Shakespeare's works and tokenized using Hugging Face's GPT-2 tokenizer. Currently, I am working on ironing out some kinks in the Hugging Face tokenizer, as I was originally using a simple ASCII character tokenizer. I also will make it a Q/A model instead of a text generation model. Finally, I will re-train the model on a far larger piece of text, likely from Wikimedia."
              />
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
                description="For a hackathon, my team and I developed an app that allows you to input ingredients you want to make a meal with, then scrapes Food Networks recipes to find a recipe that matches
                 the criteria entered in. We used React for the front end design, using Python and Flask for the backend. We used the Github API calls to search through all of the recipes in Food Network.
                 We sadly didn't keep the website domain up, but all of the code is available on my github."
              />
              <Card
                //image={process.env.PUBLIC_URL + "/Images/portfolio.jpg"}
                title="This Portfolio Website"
                description="I developed this portfolio website utilizing React as the core framework, with Git
                 serving as the version control system to efficiently manage and track the progress of the site.
                 I first made this website summer of 2022, and have completely redone it in January 2025."
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

          <section className="sections1" id="Contact">
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

export default App;
