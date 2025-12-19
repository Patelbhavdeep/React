import { useState } from "react";
import './index.css'

function App() {
  const [form, setform] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
  }); 
  const [error, setError] = useState({});

  const handlesubmit = (e) => {
    e.preventDefault();
    const error = {};
    if (!form.name.trim()){
      alert((error.name = "name is required"));
    }
    if (!form.email.includes("@")){
      alert((error.email = "email is required"));
    }
    if (!form.password()){
      alert((error.password = "password is required"));
    }
    if (!form.age.trim()){
      alert((error.age = "age is required"));
    }
    else("form submitted successfully");
    setError(error);
    console.log(" name :", form.name);
    console.log(" email :", form.email);
    console.log(" password :", form.password);
    console.log(" age :", form.age);

   if (Object.keys(error).length === 0) {
      console.log("Form submitted successfully");
    }
  };

  const handlechange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };


  return (
    <>
     <div className="page">
  <div className="card">
    <h2 className="title">Registration Form</h2>

    <form onSubmit={handlesubmit}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        value={form.name}
        onChange={handlechange}
      />

      <label>Email</label>
      <input
        type="text"
        name="email"
        placeholder="Enter your email"
        value={form.email}
        onChange={handlechange}
      />

      <label>Password</label>
      <input
        type="password"
        name="password"
        placeholder="Enter your password"
        value={form.password}
        onChange={handlechange}
      />

      <label>Age</label>
      <input
        type="age"
        name="age"
        placeholder="Enter your age"
        value={form.age}
        onChange={handlechange}
      />

      <button type="submit">Submit</button>
    </form>
  </div>
</div>

    </>
  );
}

export default App;
