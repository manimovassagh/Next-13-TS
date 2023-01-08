import { FormEvent, FunctionComponent, useState } from "react";

interface FormProps {
  onSubmit: (first: string, last: string) => void;
}

const Form: FunctionComponent<FormProps> = ({ onSubmit }) => {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (event: any) => {
    setUsernameOrEmail(event.target.value);
  };
  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const data = { usernameOrEmail, password };

    fetch("http://localhost:8085/api/v1/auth/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => { 
        console.log(response);
        localStorage.setItem("token", response.accessToken);
      });
  };

  return (
    <div className="mt-12">
      <div className="text-center text-2xl mb-4 text-blue-500">Login Form</div>
      <form className="mx-auto max-w-sm">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name or Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Name"
            value={usernameOrEmail}
            onChange={handleNameChange}
          ></input>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="text"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          ></input>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={() => handleSubmit(event)}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
