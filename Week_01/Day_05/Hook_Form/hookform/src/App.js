import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [state, setState] = useState({
    email: "",
    password: "",
    confirmpassword: "",
    firstname: "",
    lastname: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={state.email}
            onChange={handleInputChange}
          />
          {state.email.length < 5 &&
            <p> Email must be at least 5 characters</p>
          }
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleInputChange}
          />
          {state.password.length < 8 &&
            <p> Password must be at least 8 characters</p>
          }
          {state.password ==! state.confirmpassword &&
            <p> Password does not match confirm password</p>
          }
        </div>  
        <div className="form-control">
          <label>Confirm Password</label>
          <input
            type="confirmpassword"
            name="confirmpassword"
            value={state.confirmpassword}
            onChange={handleInputChange} 
          />
          {state.password.length < 8 &&
            <p> Password must be at least 8 characters</p>
          }
          {state.confirmpassword ==! state.password &&
            <p> Password does not match confirm password</p>
          }
        </div>  
        <div className="form-control">
          <label>First Name</label>
          <input
            type="firstname"
            name="firstname"
            value={state.firstname}
            onChange={handleInputChange}
          />        
          {state.firstname.length < 2 &&
            <p> Field must be at least 2 characters</p>
          }
        </div>
        <div className="form-control">
          <label>Last Name</label>
          <input
            type="lastname"
            name="lastname"
            value={state.lastname}
            onChange={handleInputChange}
          />        
          {state.lastname.length < 2 &&
            <p> Field must be at least 2 characters</p>
          }
        </div>
        <div className="form-control">
          <label></label>
          <button type="submit">Login</button>
        </div>
      </form>
      <div>
        <p>First Name: {state.firstname}</p>
        <p>Last Name: {state.lastname}</p>
        <p>Email: {state.email}</p>
        <p>Password: {state.password}</p>
        <p>Confirm Password:{state.confirmpassword}</p>

      </div>
    </div>
  );
}
