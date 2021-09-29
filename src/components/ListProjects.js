import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

function ListProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function getAllProjects() {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_HOSTNAME}/projects`,
        { withCredentials: true }
      );
      setProjects(response.data);
    }
    getAllProjects();
  }, []);

  return (
    <ul>
      {projects.map((project) => {
        return (
          <li key={project._id}>
            <NavLink to={`/projects/${project._id}`}>{project.title}</NavLink>
          </li>
        );
      })}
    </ul>
  );
}

export default ListProjects;
