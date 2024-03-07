import React from "react";

export default function Meme() {
  return (
    <main>
      <form className="form" action="">
        <div>
          <label htmlFor="top-text">
            
            Top Text
            <input  id="top-text" className="form-input" type="text" placeholder="Top Text" />
          </label>
        </div>

        <div>
          <label>
            Bottom Text
            <input
              className="form-input"
              type="text"
              placeholder="Bottom Text"
            />
          </label>
        </div>
        <button className="form-button">Get a new image</button>
      </form>
    </main>
  );
}
