import React from "react";
import HeaderContent from "./Components/HeaderContent/HeaderContent"
import BodyContent from "./Components/BodyContent/BodyContent"
import FooterContent from "./Components/FooterContent/FooterContent"

function App() {
  return (
    <>
      <div id="wrapper">
        <HeaderContent />
        <BodyContent>
          <button>Click Here</button>
          <br/>
          <a href="#">Googel</a>
        </BodyContent>

        <BodyContent>
          <p>Lorem ipsum dolor sit amet c
            onsectetur adipisicing elit. 
            Suscipit quas eius, qui ab 
            temporibus quam! Inventore sequi 
            totam ut ducimus vero. Accusantium 
            sapiente aperiam quas. Architecto 
            pariatur deserunt sed provident?</p>
        </BodyContent>
        
        <BodyContent/>
      </div>
    </>
  );
}

export default App;
