import React, { useState } from "react";
import "./index.css";   // ← CSS yahan import hoga

const App = () => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [address, setAddress] = useState("");

  const handleClick = (e) => {
    e.preventdefault();
    alert("Form Submitted!");
  setname("");
  setEmail("");
  setPass("");
  setAddress("");
  };

  return (
    <div className="page">
      <div className="glow"></div>

      <div className="card">

        <h1 className="title">✨ Premium User Form</h1>

        {/* NAME */}
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
        </div>

        {/* EMAIL */}
        <div className="field">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* PASSWORD */}
        <div className="field">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </div>

        {/* ADDRESS */}
        <div className="field">
          <label>Address</label>
          <input
            type="text"
            placeholder="Your Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

       <button className="submit-btn" type="submit" onClick={handleClick}>Submit</button>


        {/* PREVIEW */}
        <div className="preview">
          <h2>Preview:</h2>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Password:</strong> {pass}</p>
          <p><strong>Address:</strong> {address}</p>
        </div>
      </div>
    </div>
  );
};

export default App;
