import React, { useState } from 'react';
import { Button } from 'reactstrap';
import { NavLink } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { Modal } from "react-bootstrap";
import { Form } from 'react-bootstrap';
import { userNames } from '../shared/usernames';
const HomeComponent = () => {
    const [show, setShow] = useState(false);
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [isUser,setUser] = useState(false);
    console.log(userNames);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let navigate = useNavigate();

    function validate(event){
        event.preventDefault();
        console.log(email+" "+password);

       userNames.forEach(user => {
           if(user.email == email && user.password == password){
               setUser(true);
           }
       });

        if(isUser){
            window.location.replace("http://localhost:3000/");
        }
        else{
            alert("Creadentials are Invalid...!");
            setEmail('');
            setPassword('');
        }


    }
 
    return (
        <div>
           <div className='container'>
           <div className="body d-md-flex align-items-center justify-content-between">
           <div className="box-1 mt-md-0 mt-5"> 
           <img src="https://images.pexels.com/photos/2033997/pexels-photo-2033997.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""> 
           </img>
           </div>
        <div className=" box-2 d-flex flex-column h-100">
            <div className="mt-5">
                <p className="mb-1 h-1">Create Account.</p>
                <p className="text-muted mb-2">Share your thouhts with the world form today.</p>
                <div className="d-flex flex-column ">
                    <p className="text-muted mb-2">Continue with...</p>
                    <div className="d-flex align-items-center"> <a href="#" className="box me-2 selectio"> <span className="fab fa-facebook-f mb-2"></span>
                            <p className="mb-0">Facebook</p>
                        </a> <a href="#" className="box me-2"> <span className="fab fa-google mb-2"></span>
                            <p className="mb-0">Google</p>
                        </a> <a href="#" className="box"> <span className="far fa-envelope mb-2"></span>
                            <p className="mb-0">Email</p>
                        </a> </div>
                    <div className="mt-3">
                        <p className="mb-0 text-muted">Already have an account?</p>
                        {/* <div className="btn btn-primary" onClick={()=>
                            navigate("/login")
                        }>Log in<span className="fas fa-chevron-right ms-1"></span></div> */}
                        <div className="btn btn-primary" onClick={handleShow}>Log in<span className="fas fa-chevron-right ms-1"></span></div>
                        
                    </div>
                </div>
            </div>
            <div className="mt-auto">
                <p className="footer text-muted mb-0 mt-md-0 mt-4">By register you agree with our <span className="p-color me-1">terms and conditions</span>and <span className="p-color ms-1">privacy policy</span> </p>
            </div>
        </div> <span className="fas fa-times"></span>
           </div>
            </div> 

<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
 <Modal.Body>
    <Form onSubmit={validate}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <Form.Text className="text-muted">
      We'll never share your email with anyone else.
        </Form.Text>
    </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
  </Form.Group>

  <Button variant="primary" >
    Login
  </Button>
</Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
            
           
        </div>
    );
};

export default HomeComponent;

