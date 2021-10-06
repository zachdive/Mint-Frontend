import React, {useContext, useState, useEffect} from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { LoggedUserConsumer } from "../context/loggedUser";

import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";


function UserEdit({match}) {
    const loggedInUser = useContext(LoggedUserConsumer);
    //
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [farmerAdress, setFarmerAdress] = useState("");
    const [city, setCity] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const history = useHistory();
  
    useEffect(() => {
      async function getUser() {
        const project = loggedInUser;
  
        setFirstName(project.firstName);
        setLastName(project.lastName); 
        setPhoneNumber(project.phoneNumber);
        setFarmerAdress(project.farmerAdress);
        setCity(project.city);
        setZipCode(project.zipCode);
        setImageUrl(project.imageUrl);    }
      getUser();
    }, []);
  
    const handleFormSubmit = async (e) => {
      e.preventDefault();
      debugger;
      const body = {
        firstName,
        lastName,
        phoneNumber,
        farmerAdress,
        city,
        zipCode,
        imageUrl,
      };
  
      await axios.put(
        `${process.env.REACT_APP_SERVER_HOSTNAME}/user/${match.params.id}`,
        body
      );
  
      toast.success("User updated");
      history.push("/user");
    };

    return (
    <div className="row">
        <div className="col-md-3">
            <img src={loggedInUser.imageUrl} width="100px" height="100px" alt="user-img"/>
        </div>
        <div className="col-md-6">
            <Form onSubmit={handleFormSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="firstName" placeholder="Enter first name" value={firstName}  onChange={(e) => setFirstName(e.target.value)}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="lastName" placeholder="Enter last name" value={lastName}  onChange={(e) => setLastName(e.target.value)}/>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridAddress2">
                        <Form.Label>Phone number</Form.Label>
                        <Form.Control placeholder="000 000 000" value={phoneNumber}  onChange={(e) => setPhoneNumber(e.target.value)}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" value={farmerAdress} onChange={(e) => setFarmerAdress(e.target.value)}/>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control placeholder="Lisbon" value={city} onChange={(e) => setCity(e.target.value)}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control placeholder="1000-000" value={zipCode} onChange={(e) => setZipCode(e.target.value)}/>
                    </Form.Group>
                </Row>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    </div>
    );
}

export default UserEdit;