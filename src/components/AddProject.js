import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function AddProject() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const history = useHistory();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const uploadData = new FormData();
    uploadData.append("file", image);

    const response = await axios.post(
      `${process.env.REACT_APP_SERVER_HOSTNAME}/upload`,
      uploadData
    );

    const body = {
      title,
      description,
      imageUrl: response.data.fileUrl,
    };
    
    await axios.post(`${process.env.REACT_APP_SERVER_HOSTNAME}/projects`, body);
    toast.success("Project created");
    history.push("/projects");
  };

  return (
    <>
      <h2>Add Project</h2>
      <form onSubmit={handleFormSubmit} encType="multipart/form-data">
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

        <label>Image</label>
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />

        <button type="submit">Create</button>
      </form>
    </>
  );
}

export default AddProject;
