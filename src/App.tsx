import "@/App.css";
import Home from "@components/Home";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [userName, setUserName] = useState("");

  function handleNameFormSubmission(username: string) {
    console.log("data", username);
    setUserName(username);
  }

  useEffect(() => {
    axios
      .get("http://localhost:5164/weatherforecast")
      .then((res) => console.log("res", res))
      .catch((err) => console.log("err", err));
  }, []);

  return (
    <>
      <Home submitForm={handleNameFormSubmission} />

      <div>{userName ? `Welcome ${userName}` : ""}</div>
    </>
  );
}

export default App;
