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
    const [phoneNumber, setphoneNumber] = useState("");
    const [farmerAdress, setFarmerAdress] = useState("");
    const [city, setCity] = useState("");
    const [zipCode, setZipCode] = useState("");

    const history = useHistory();
  
    useEffect(() => {
      async function getProject() {
        const project = await axios.get(
          `${process.env.REACT_APP_SERVER_HOSTNAME}/user/${match.params.id}`
        );
  
        setFirstName(project.data.firstName);
        setLastName(project.data.lastName); 
        setphoneNumber(project.data.phoneNumber);
        setFarmerAdress(project.data.farmerAdress);
        setCity(project.data.city);
        setZipCode(project.data.zipCode);    }
      getProject();
    }, []);
  
    const handleFormSubmit = async (e) => {
      e.preventDefault();
      const body = {
        firstName,
        lastName,
        phoneNumber,
        farmerAdress,
        city,
        zipCode,
      };
  
      await axios.put(
        `${process.env.REACT_APP_SERVER_HOSTNAME}/user/${match.params.id}`,
        body
      );
  
      toast.success("Project updated");
      history.push("/projects");
    };
  
    //

    return (
    <div className="row">
        <div className="col-md-3">
            <img src={loggedInUser.imageUrl} width="100px" height="100px" alt="user-img"/>
            <Form.Group className="position-relative mb-3">
              <Form.Label>Profile Picture</Form.Label>
              <Form.Control
                    type="file"
                    required
                    name="imageUrl"
                    onChange={handleFormSubmit}
              />
            </Form.Group>
        </div>
        <div className="col-md-6">
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="firstName" placeholder="Enter first name" value={loggedInUser.firstName}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="lastName" placeholder="Enter last name" value={loggedInUser.lastName}/>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridAddress2">
                        <Form.Label>Phone number</Form.Label>
                        <Form.Control placeholder="000 000 000" value={loggedInUser.phoneNumber}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" value={loggedInUser.farmerAdress}/>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity" value={loggedInUser.city}>
                    <Form.Label>City</Form.Label>
                    <Form.Control placeholder="Lisbon"/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip" value={loggedInUser.zipCode}>
                    <Form.Label>Zip</Form.Label>
                    <Form.Control placeholder="1000-000"/>
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