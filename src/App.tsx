import axios from "axios";
import "./App.css";

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
          <label>Email:</label>
          <input type="text" name="inputEmail" className="border-2 mb-4" />
          <br />

          <label>Username:</label>
          <input type="text" name="inputUsername" className="border-2 mb-4" />
          <br />

          <label>Password:</label>
          <input type="text" name="inputPassword" className="border-2 mb-4" />
          <br />

          <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200">
            <span>Login</span>
            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
              <div className="relative h-full w-8 bg-white/20"></div>
            </div>
          </button>
          <button type="submit">Login</button>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </>
  );
}

export default App;
