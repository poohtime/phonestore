import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Header } from "./components/header/header";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Header />
    //     <>
    //       <a
    //         href="https://kauth.kakao.com/oauth/authorize?client_id=f4ced7c8d7fa80747d0e59e60e33ed67&
    // redirect_uri=http://localhost:3000/auth/login&response_type=code"
    //         target="_blank"
    //       >
    //         <img src={viteLogo} className="logo" alt="Vite logo" />
    //       </a>
    //       <div>
    //         <a href="https://vitejs.dev" target="_blank">
    //           <img src={viteLogo} className="logo" alt="Vite logo" />
    //         </a>
    //         <a href="https://react.dev" target="_blank">
    //           <img src={reactLogo} className="logo react" alt="React logo" />
    //         </a>
    //       </div>
    //       <h1>Vite + React</h1>
    //       <div className="card">
    //         <button onClick={() => setCount((count) => count + 1)}>
    //           count is {count}
    //         </button>
    //         <p>
    //           Edit <code>src/App.tsx</code> and save to test HMR
    //         </p>
    //       </div>
    //       <p className="read-the-docs">
    //         Click on the Vite and React logos to learn more
    //       </p>
    //     </>
  );
}

export default App;
