import React, { useState } from 'react';
import { Container, Header, Button, Form } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
// import AppLogo from "../Logo/index";
// import axios from 'axios';

export default function LogInForm() {
    // const [username, setUserName] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    // const [formObject, setFormObject] = useState({});

    const handleFormSubmit = e => {
        e.preventDefault();  
        // console.log("Username is: " + username + ", and " + "Password is: " + password)
        var userData = {
          email, 
          password
        }
        // console.log('++++++',userData);
        if (!userData.email || !userData.password) {
          return;
        }
        signUpUser(userData.email, userData.password);
    };

     const signUpUser = () =>  {
      console.log("------>",email,password);
      const signInData = {email, password};
      console.log(signInData);
      // axios.post('http://localhost:3000/api/login', {signInData})
    }
// axios.post('http://localhost:3001/api/signup', {email,password});
  return (
    <Container>
      {/* <AppLogo/> */}
    <Header as='h1'>Login Page</Header>
    <Form onSubmit={handleFormSubmit}>
      <Form.Field>
        <label>Username</label>
        <input style={{ marginTop: "125px", height: "40px", width: "50em" }}
                type="text"
                name="username"
                onChange={(event) => setEmail(event.target.value)} />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input style={{ marginTop: "30px", height: "40px", width: "50em" }}
                type="password"
                name="password"
                onChange={(event) => setPassword(event.target.value)}
                />
      </Form.Field>
      <Link to="/join">
      <Button type='submit'>Login</Button>
      </Link>
      <Link to="/signup">Need to Sign-Up?</Link>
    </Form>
    </Container>
  )
};

/* <Button/> '/' changed to '/join' above.  */

{/* <div className="Container">
            <form>
                <input style={{ marginTop: "150px", height: "40px", width: "50em" }}
                type="text"
                name="username"
                onChange={e => setUsername(e.target.value)}
                />
                <br />
                <input style={{ marginTop: "30px", height: "40px", width: "50em" }}
                type="password"
                name="password"
                onChange={e => setPassword(e.target.value)}
                />
                <br />
                <button onClick={handleSubmit} style={{ width: "10em", height: "4em", marginTop: "4em" }} type="button">Button</button>
            </form>
        </div> */}

// const handleInputChange = event => {
//     console.log(event.target.value)
//     event.preventDefault();
//     const {name, value} = event.target;
//     setLogInInfo({...login, [name]: value})
// }

// import React, { useState } from 'react';
// import { Container, Header, Button, Form } from 'semantic-ui-react';
// import {Link} from 'react-router-dom';
// // import AppLogo from "../Logo/index";

// export default function LogInForm() {
//     const [username, setUserName] = useState('');
//     const [password, setPassword] = useState('');

//     const handleFormSubmit = e => {
//         e.preventDefault();  
//         console.log("Username is: " + username + ", and " + "Password is: " + password)
//     };

//   return (
//     <Container>
//       {/* <AppLogo/> */}
//     <Header as='h1'>Login Page</Header>
//     <Form onSubmit={handleFormSubmit}>
//       <Form.Field>
//         <label>Username</label>
//         <input style={{ marginTop: "125px", height: "40px", width: "50em" }}
//                 type="text"
//                 name="username"
//                 onChange={(event) => setUserName(event.target.value)} />
//       </Form.Field>
//       <Form.Field>
//         <label>Password</label>
//         <input style={{ marginTop: "30px", height: "40px", width: "50em" }}
//                 type="password"
//                 name="password"
//                 onChange={(event) => setPassword(event.target.value)}
//                 />
//       </Form.Field>
//       <Link to="/join">
//       <Button type='submit'>Login</Button>
//       </Link>
//       <Link to="/signup">Need to Sign-Up?</Link>
//     </Form>
//     </Container>
//   )
// };
