import React, { useRef } from "react";

export default function Blog() {
  const containerRef = useRef(null);
  function addPost() {
    const postNode = document.createElement("div");
    postNode.innerText = "This post is appended!";
    containerRef.current.appendChild(postNode);
  }
  return (
    <>
      <div ref={containerRef} className="App">
        <div>Main container title</div>
        <div>Default post 1</div>
        <div>Default post 2</div>
      </div>
      <button onClick={addPost}>add a post</button>
    </>
  );
}
