import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

function EditProject({ match }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const history = useHistory();

  useEffect(() => {
    async function getProject() {
      const project = await axios.get(
        `${process.env.REACT_APP_SERVER_HOSTNAME}/projects/${match.params.id}`
      );

      setTitle(project.data.title);
      setDescription(project.data.description);
    }
    getProject();
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const body = {
      title,
      description,
      imageUrl: "http://someimage.com",
    };

    await axios.put(
      `${process.env.REACT_APP_SERVER_HOSTNAME}/projects/${match.params.id}`,
      body
    );

    toast.success("Project updated");
    history.push("/projects");
  };

  return (
    <>
      <h2>Edit Project</h2>
      <form onSubmit={handleFormSubmit}>
        <label>Title</label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <label>Description</label>
        <input
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />

        <button type="submit">Update</button>
      </form>
    </>
  );
}

export default EditProject;
