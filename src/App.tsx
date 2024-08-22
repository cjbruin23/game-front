import axios from "axios";
import "./App.css";
import LoginForm from "./components/Login";

type UserInformation = {
  email: string;
  username: string;
  password: string;
};

function App() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const buttonPressed = event.nativeEvent.submitter.innerText;
    const formData = new FormData(event.target);
    const email = formData.get("inputEmail")!.toString();
    const username = formData.get("inputUsername")!.toString();
    const password = formData.get("inputPassword")!.toString();

    const userInformation = {
      email,
      username,
      password,
    };

    callApi(userInformation, buttonPressed);
  };

  const callApi = async (userInformation: UserInformation, action: string) => {
    console.log("userInformation", userInformation);
    const payload = {
      userInformation,
      action
    }
    axios
      .post("http://localhost:8080/player", payload)
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => console.log("err", err));
  };

  return (
    <>
      <div id="header">
        <h1>
          <strong>Welcome to Conquest!</strong>
        </h1>

        <form onSubmit={handleSubmit}>
          <LoginForm />
        </form>
      </div>
    </>
  );
}

export default App;
