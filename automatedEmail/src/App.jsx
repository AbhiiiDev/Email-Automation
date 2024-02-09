import { useState } from "react";

import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message,setMessage]=useState("");


  const baseURL="http://localhost:3000";


  const handleSubmit = async(e) => {
    e.preventDefault();
    let dataSend= {
      email:email,
      name:name,
    }
    try {
      const res=await fetch(`${baseURL}/email/sendEmail`,{
        method:"POST",
        body:JSON.stringify(dataSend),
        headers:{
          Accept: "application/json",
          "Content-Type": "application/json",
        }
  
      })
      res.status(200).json({
        success:true,
        message:"email sent successfully"
      })
      alert("Email Sent successfully");
      setEmail("");
      setName("");
    } catch (error) {
      console.log(error)
    }
 
 
  

  };

  return (
    <>
     <div className="subscription-form-container">
      <form className="form-style" onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email ID"
          required
        />
        <button type="submit">Submit</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
    </>
  );
}

export default App;
