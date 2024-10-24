import { useState } from "react";

type Props = {
  submitForm: (data: string) => void;
}

function Home( {submitForm}: Props) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    submitForm(inputValue)
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className="mb-2">
          What is your name?
          <input type="text" value={inputValue} onChange={handleChange}></input>
        </label>
        <br/>

        <button type="submit">Submit</button>
      </form>

    </>
  );
}

export default Home;
