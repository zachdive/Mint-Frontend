import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, NavLink } from "react-router-dom";
import { toast } from "react-toastify";

function ProjectDetails({ match }) {
  const [project, setProject] = useState({});
  const history = useHistory();

  useEffect(() => {
    async function getProjectDetails() {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_HOSTNAME}/projects/${match.params.id}`
      );
      setProject(response.data);
    }
    getProjectDetails();
  }, []);

  const handleDeleteProject = async (id) => {
    await axios.delete(
      `${process.env.REACT_APP_SERVER_HOSTNAME}/projects/${id}`
    );
    toast.info("Project deleted");
    history.push("/");
  };

  return (
    <>
      <h2>{project.title}</h2>
      <h3>{project.description}</h3>
      {project.imageUrl && <img src={project.imageUrl} alt="project" />}

      <NavLink to={`/projects/${project._id}/edit`}>Edit</NavLink>
      <button onClick={() => handleDeleteProject(project._id)}>Delete</button>
    </>
  );
}

export default ProjectDetails;
