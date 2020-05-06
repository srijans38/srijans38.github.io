import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="hi">Hi!</h1>
        <p className="name">I am Srijan Sharma</p>
        <p className="p1">
          I study Information Technology at Bhilai Institute of Technology,
          Durg. I have experience with Django, Flutter, Vue.js and React. You
          can find my work on <a href="https://github.com/srijans38">Github</a>.
        </p>
        <p className="p2">
          Apart from this, I am a space nerd{" "}
          <span role="img" aria-label="space">
            🚀
          </span>
          , a Formula 1 fan{" "}
          <span role="img" aria-label="space" className="f1">
            🏎️
          </span>{" "}
          and support FC Barcelona{" "}
          <span role="img" aria-label="space">
            🔵🔴
          </span>{" "}
        </p>
        <p className="p3">
          You can also find me on{" "}
          <a href="https://www.instagram.com/theguywithabignose/">Instagram</a>{" "}
          or <a href="mailto:srijans38@gmail.com">Email</a>.
        </p>
      </header>
    </div>
  );
}

export default App;
