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
      title={"Software Engineering Background"}
      subtitle={"Full stack applications w/ tech stacks: Professional: [Typescript, React18, FluentUI, ARM/ARG, Enzyme, RTL]. Python [Flask, Jinja, SQL]. C# [.NET, SQL]. MERN [MongoDB, Express, React18, Node]. Java [Springboot, SQL, Rollbar]"}
      />
      <Slider imageSrc={travel_03}
      title={"Professional Experience"}
      subtitle={"MERN background, picked up TypeScript while interning at Microsoft and learning the existing codebase which used KnockoutJs blade components, ARM, ARG for our data and Enzyme for testing. Where I had to use existing API functions or learn how to do the equivalent of KnockoutJs in React18. It was quite fun being able to learn and have mentors around me with the ability to teach me along the way. I am fortunate to have been apart of a team that had to focus to improve the policies and guidelines for companies all over the globe. Working at such a fast pace, I gained greater depth of what a software engineer can be and the different roles we all play to achieve a successful semester. I am looking for the new chapter of my journey that will provide me with a longer career experience and growth."}
      flipped={true}
      />
    </div>
  );
}

export default App;
