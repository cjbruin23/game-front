import "@/App.css";
import Home from "@components/Home";
import { useState } from "react";

function App() {
  const [userName, setUserName] = useState("")
  
  function handleNameFormSubmission(username: string) {
    console.log('data', username)
    setUserName(username)
  }

  return (
    <>
    <Home submitForm={handleNameFormSubmission}/>

    <div>{userName ? `Welcome ${userName}` : ""}</div>

    </>
  );
}

export default App;
