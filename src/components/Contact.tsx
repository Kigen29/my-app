import React from "react";
import { ThemeProvider,createTheme} from "@mui/material/styles";
import { useState } from 'react';
import { Button } from "@mui/material";
import { FormControl } from '@mui/material';

const Contact = () => {
    const[firstname, setFirstname] = useState<string>("");
    const[lastname, setLastname] = useState<string>("");
    const[email,setEmail] = useState<string>("");

    const[myform, setMyform] = useState({});

    React.useEffect(() => {
        console.log(Contact);
    }, [Contact]);

  return (
    <div>
      <h1>Contact Me</h1>
    <form>
        <label htmlFor="firstname">First Name:</label><br />
        <input type="text" id="fname" name="firstname" placeholder="First Name"/><br />

        <label htmlFor="lastname">Last Name:</label><br />
        <input type="text" id="lname" name="lastname" placeholder="Last Name"/><br />

        <label htmlFor="email">Email:</label><br />
        <input type="text" id="lname" name="email" placeholder="Email Address"/><br />

        <button type="submit">Submit</button>

    
    </form>
    </div>
  );
};

export default Contact;