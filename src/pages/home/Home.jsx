import React from "react";
import "./Home.css";
import logo from "../../assets/Captura de tela 2023-11-29 135331.png";
import banner from "../../assets/foto_container copy.jpg";
function Home() {
  return (
    <>
      <div className="main">
        <div className="spaceHeader">
          <header className="header container">
            <div className="logo">
              <img src={logo} alt="Golden Age" />
            </div>
            <nav>
              <button className="btn">Quiz</button>
              <button className="btn">Login</button>
            </nav>
          </header>
        </div>
          <div className="banner">
            <div className="overlay">
              <h1>
                <p className="txt-banner">
                  Embarque nessa viagem do tempo e relembre as melhores musicas populares brasileiras
                </p>
              </h1>
            </div>
          </div>
      </div>

      {/* <div className="App">
      <main>
        <div className="banner">
        </div>
      </main>
    </div> */}
    </>
  );
}

export default Home;
