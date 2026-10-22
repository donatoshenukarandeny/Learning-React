import React from "react";
import  "./BodyContent.css";

function BodyContent(prop) {
  return (
    <div id="bodycontent">
      <p>Main Content</p>
      {prop.children}
    </div>
  );
}

export default BodyContent;
