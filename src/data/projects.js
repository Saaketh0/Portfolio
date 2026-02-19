const projects = [
  {
    title: "Drone (In Progress)",
    description:
      "I recently gained an interest in robotics and decided to build a full 10-inch drone from scratch, including a camera and receiver to view the feed on my laptop. This project is being partially funded by M5, the ECE Makerspace, and I will show my project at their exhibition in April.",
  },
  {
    title: "Job Scraper",
    description:
      "I grew tired of going to 10 different job sites, hoping each one would have a unique posting, while also knowing the jobs might have been out for a while by the time I saw them. So I decided to create my own bot. Every hour, my script scrapes around 200 of the most popular tech companies' job boards and checks whether any new postings relevant to me have been added. It takes those postings and sends me the information and application links by email. I am still working on making the queries faster and including more jobs, but the MVP has already saved me a lot of time in my job search.",

  },
  {
    title: "Full Body Motion Tracking Device (In Progress)",
    description:
      "For my senior capstone, my team and I are building a full-body sprint tracking system that combines sensors for form and biometric feedback. I am focused on the software side, including 3D movement analysis, heartbeat analysis, sensor fusion, and backend processing.",
  },
  {
    title: "Autosearch Complete RNN",
    description:
      "For my AI class, I built a character-level RNN autocomplete system in PyTorch. I also built a custom sliding-window pipeline that reduced preprocessing time and trained the model on War and Peace.",
  },
  {
    title: "Full Stack Nutrition Tracking App",
    description:
      "I built a nutrition tracking app with barcode scanning, automatic food analysis, and micronutrient tracking so it combines the features I liked most across existing tools.",
  },
  {
    title: "miniGPT",
    description:
      "I implemented a mini GPT-style decoder-only model and trained it on Shakespeare data, then moved from a simple tokenizer toward GPT-2 tokenizer compatibility. The long-term goal is a larger corpus and Q/A style behavior.",
  },
  {
    title: "Spotify Current Song Player",
    description:
      "I created a Chrome extension that shows the currently playing Spotify song and includes skip controls. It uses JavaScript, HTML/CSS, and browser APIs with Spotify integration.",
    image: "/Images/Chrome_Extension_Smaller.jpg",
  },
  {
    title: "Ultrasonic Distance Tracker",
    description:
      "For my embedded systems class, I built a device using an Arduino Uno, HC-SR04 ultrasonic sensor, and 4-digit 7-segment display to measure and show distance in centimeters.",
    image: "/Images/IMG_5548.jpg",
  },
  {
    title: "Cooking Recipe Generator",
    description:
      "For a hackathon, my team built a recipe search app that accepted ingredient constraints and scraped candidate recipes using a React front end and Python/Flask backend.",
  },
  {
    title: "This Portfolio Website",
    description:
      "I built this portfolio with React and Git and did a major redesign in January 2025, and another January 2026. Touched up website again Feb 2026.",
  },
  {
    title: "Snake Game",
    description:
      "In ECE 122, I implemented Snake in Python with Tkinter, including game mechanics and visuals.",
    image: "/Images/Snake_game.png",
  },
  {
    title: "Tetris",
    description:
      "In ECE 122, I built a fully functional Tetris clone in Python with Tkinter, focusing on game logic and UI behavior.",
    image: "/Images/Tetris_game.png",
  },
];

export default projects;
