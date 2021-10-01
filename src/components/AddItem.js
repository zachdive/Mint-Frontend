import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function AddItem() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [expire, setExpire] = useState("");
  const [description, setDescription] = useState("");

  const selectCategory = ["Select the category", "Fruits and vegetables", "Meat and fish", "Dairy and eggs", "Bread and pastry", "Beverages", "Grains"];

  const history = useHistory();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const uploadData = new FormData();
    uploadData.append("file", imageUrl);

    const response = await axios.post(
      `${process.env.REACT_APP_SERVER_HOSTNAME}/upload`,
      uploadData
    );

    const body = {
      name,
      category,
      imageUrl: response.data.fileUrl,
      quantity_available: quantity,
      price,
      expire_in: expire,
      description,
    };

    console.log(body)
    
    await axios.post(`${process.env.REACT_APP_SERVER_HOSTNAME}/products`, body);
    toast.success("Product created");
    history.push("/products");
  };


  return (
    <>
      <h2>Add Product</h2>
      <form onSubmit={handleFormSubmit} encType="multipart/form-data">
        <label>Name</label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />

        <label>Category</label>
        <select name="type" value={category} onChange={(e) => setCategory(e.target.value)} required>
          {selectCategory.map((singleCategory, index) => {
            return <option key={index} value={singleCategory}>{singleCategory}</option>;
          })}
        </select>

        <label>Quantity in Stock</label>
        <input
          type="number"
          onChange={(e) => setQuantity(e.target.value)}
          value={quantity}
        />

        <label>Price</label>
        <input
          type="number"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />

        <label>Expire Date ( 00 / 00 / 0000 )</label>
        <input
          type="text"
          onChange={(e) => setExpire(e.target.value)}
          value={expire}
        />

        <label>Description</label>
        <input
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />

        <label>Image</label>
        <input type="file" onChange={(e) => setImageUrl(e.target.files[0])} />

        <button type="submit">Create</button>
      </form>
    </>
  );
}

export default AddItem;
