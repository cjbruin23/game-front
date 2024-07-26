import axios from 'axios';
import './App.css'

type UserInformation = {
  email: string;
  username: string;
  password: string;
}

function App() {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('inputEmail')!.toString();
    const username = formData.get('inputUsername')!.toString();
    const password = formData.get('inputPassword')!.toString();


    const userInformation = {
      email,
      username,
      password
    }

    callApi(userInformation)
    
  }

  const callApi = async (userInformation: UserInformation) => {
    console.log('userInformation', userInformation);
    axios.post('http://localhost:8080/player', userInformation).then((res) => {
      console.log('res', res)
    }).catch((err) => console.log('err', err))
  }
  
  return (
    <>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="text" name="inputEmail"/>
        
        <label>Username:</label>
        <input type="text" name="inputUsername"/>

        <label>Password:</label>
        <input type="text" name="inputPassword" />

        <button type="submit">Login</button>
      </form>
    </>
  )
}

export default App
