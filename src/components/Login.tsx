function LoginForm() {
    return (
       <div id="login-form">
            <label>Email:</label>
          <input type="text" name="inputEmail" className="border-2 mb-4" />
          <br />

          <label>Username:</label>
          <input type="text" name="inputUsername" className="border-2 mb-4" />
          <br />

          <label>Password:</label>
          <input type="text" name="inputPassword" className="border-2 mb-4" />
          <br />

          <button type="submit" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Login</button>
       <button type="submit" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">SignUp</button>
       </div>
    )
}

export default LoginForm;