import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { LoggedUserConsumer } from "../context/loggedUser";
import Button from 'react-bootstrap/Button'


function UserProfile() {
    const loggedInUser = useContext(LoggedUserConsumer);
    return (
        <>
        <div className="row1">
                <div className="col-md-6 row1-flex">
                    <div>
                        <img className= "roww1-image" src={loggedInUser.imageUrl} alt="user profile pic" />
                    </div>
                    <div className= "roww1-text">
                        <h1>{`${loggedInUser.firstName} ${loggedInUser.lastName}`}</h1>
                        {loggedInUser.isFarmer ? (<h3>FARMER</h3>) : (<h3>CONSUMER</h3>)}
                        <NavLink exact to={`/user/${loggedInUser._id}/edit`}>
                        <Button variant="outline-success">Edit</Button>{' '}
                        </NavLink>

                        {/* <p>{`${loggedInUser.phoneNumber}`}</p> */}
                    </div>
                </div>
        </div>
        <div className= "row2">
        </div>
        </>
    );
}

export default UserProfile;