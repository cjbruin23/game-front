import './App.css'

function App() {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (event: any) => {
    event.preventDefault();
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
      </form>
    </>
  )
}

export default App
