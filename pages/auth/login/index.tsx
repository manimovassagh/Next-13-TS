import { FormEvent, FunctionComponent, useState } from "react";

interface FormProps {
  onSubmit: (first: string, last: string) => void;
}

const Form: FunctionComponent<FormProps> = ({ onSubmit }) => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(first, last);
  };

  return (
    <div className="shadow-md w-1/2 mx-auto mt-24">
      <form
        className="flex flex-col items-center justify-center w-1/3 mx-auto p-4"
        onSubmit={handleSubmit}
      >
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="first"
        >
          First name:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          id="first"
          name="first"
          value={first}
          onChange={(event) => setFirst(event.target.value)}
        />
        <label
          className="block text-gray-700 text-sm font-bold mb-2 mt-4"
          htmlFor="last"
        >
          Last name:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          id="last"
          name="last"
          value={last}
          onChange={(event) => setLast(event.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
