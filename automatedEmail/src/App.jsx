import { useState } from "react";
// import dotenv from 'dotenv';
import "./App.css";


// dotenv.config();

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message,setMessage]=useState("");


  const baseURL="https://email-automation-livid.vercel.app/"


  const handleSubmit = async(e) => {
    e.preventDefault();
    let dataSend= {
      email:email,
      name:name,
    }
    try {
      const res=await fetch(`https://corsproxy.io/${baseURL}/email/sendEmail`,{
        method:"POST",
        body:JSON.stringify(dataSend),
        headers:{
          Accept: "application/json",
          "Content-Type": "application/json",
        }
  
      })
      if (res.ok) {
        // Response status is in the range 200-299
        const responseData = await res.json();
        alert("Email Sent successfully");
        setMessage(responseData.message); // Set any message received from the server
        setEmail("");
        setName("");
      } else {
        // Response status is not in the range 200-299
        const errorData = await res.json();
        console.error("Email sending failed:", errorData.error);
        // Handle the error, e.g., display an error message to the user
      }} catch (error) {
      console.log(error)
    }
 
 
  

  };

  return (
    <>
     <div className="subscription-form-container">
      <div><h2 style={{color:'blueviolet'}}>
        Subscribe to our Mail Newsletter !</h2></div>
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
        <button type="submit">Subscribe :)</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
    </>
  );
}

export default App;
