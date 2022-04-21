import './App.css';
import travel_01 from "./assets/travel_01.jpg";
import travel_02 from "./assets/travel_02.jpg";
import travel_03 from "./assets/travel_03.jpg";
import Hero from "./components/Hero";
import Slider from "./components/Slider";
import Navbar from "./components/Navbar";

const navbarLinks = [
  {url: "https://www.linkedin.com/in/daniel-martinez-paiz/", title: "LinkedIn"},
  {url: "https://github.com/daniel-mar/daniel-mar/blob/main/README.md", title: "Github"}
];

function App() {
  return (
    <div className="App">
      {/* nav section */}
      <Navbar navbarLinks={navbarLinks}/>
      <Hero imageSrc={travel_01}/>
      {/* the slider accepts props: imageSrc, title, subtitle, flipped */}
      <Slider imageSrc={travel_02}
      title={"Continued Growth"}
      subtitle={"Practicing software development for three years; learning from developers on platforms like Coursera & YouTube! After enjoying myself throughout the development process and growing over the years. I have recently attended an immersive fullstack coding bootcamp at Coding Dojo to continue the life-long learning process!"}
      />

      <Slider imageSrc={travel_03}
      title={"Into the unknown"}
      subtitle={"Accustoming myself to being comfortable with discomfort. Understanding that I do not know it all but I can identify where to start learning, in order to fill the gaps, one day at a time."}
      flipped={true}
      />
    </div>
  );
}

export default App;
