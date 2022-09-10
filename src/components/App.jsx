import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function onChange(event) {
    const { name, value } = event.target;

    setFullName((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName
        };
      } else if (name === "lName") {
        return {
          lName: value,
          fName: prevValue.fName
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          onChange={onChange}
          name="fName"
          value={fullName.fName}
          placeholder="First Name"
        />
        <input
          onChange={onChange}
          name="lName"
          value={fullName.lName}
          placeholder="Last Name"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
