import { useState } from "react";

function Home() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          What is your name?
          <input type="text" value={inputValue} onChange={handleChange}></input>
        </label>
        <br></br>
        <button type="submit">Submit</button>
      </form>

      <div>{inputValue ? `Welcome ${inputValue}` : ""}</div>
    </>
  );
}

export default Home;
