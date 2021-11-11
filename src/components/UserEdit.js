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
        console.log(loggedInUser);
      getUser();
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
    <div>
        Hello
    </div>
    );
}

export default UserEdit;