import React, { useState } from "react";

// Child Component (using props)
function Display({ name, age }) {
  return (
    <div>
      <h3>Entered Data:</h3>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}

// Parent Component
function App() {
  // State
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Event Handlers
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>React Form Example</h2>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)} // Event
        />
        <br /><br />

        <input
          type="number"
          placeholder="Enter Age"
          value={age}
          onChange={(e) => setAge(e.target.value)} // Event
        />
        <br /><br />

        <button type="submit">Submit</button>
      </form>

      {/* Props */}
      {submitted && <Display name={name} age={age} />}
    </div>
  );
}

export default App;