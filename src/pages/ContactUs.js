import React,{ useState } from 'react';
import './ContactUs.css';


function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Thanks for connecting with us!');
    const contact_details = {
        name: name,
        email: email
    }
    console.log(contact_details);
    addContact(contact_details);

  }
  async function addContact(contact_details) {
    console.log(contact_details);
    const response = await fetch(
      "https://e-commerce-fd56d-default-rtdb.firebaseio.com//contacts.json",
      {
        method: "POST",
        body: JSON.stringify(contact_details),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit}>
        <section>
        <label>Enter your name:
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
        </section>
    <section>
    <label>Enter your Email :
        <input 
          type="email" 
          value={email}
          placeholder="abc@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
    </section>
     
    <button>Submit</button>
    </form>
  )
}

export default ContactUs;