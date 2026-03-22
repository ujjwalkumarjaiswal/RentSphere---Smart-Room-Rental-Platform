import { useState } from "react";
import API from "../services/api";

function AddProperty() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    rent: "",
    location: "",
    latitude: "",
    longitude: "",
    images: null
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const token = localStorage.getItem("token");

    const form = new FormData();

    form.append("title", formData.title);
    form.append("description", formData.description);
    form.append("rent", formData.rent);
    form.append("location", formData.location);
    form.append("latitude", formData.latitude);
    form.append("longitude", formData.longitude);
    form.append("image", formData.image);

    await API.post("/property/add", form, {
      headers: {
        Authorization: token,
        "Content-Type": "multipart/form-data"
      }
    });

    alert("Property added successfully ✅");

  } catch (error) {
    alert("Error adding property ❌");
  }
};

  return (
    <div>
      <h2>Add Property</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" onChange={handleChange} /><br />
        <input name="description" placeholder="Description" onChange={handleChange} /><br />
        <input name="rent" placeholder="Rent" onChange={handleChange} /><br />
        <input name="location" placeholder="Location" onChange={handleChange} /><br />
        <input name="latitude" placeholder="Latitude" onChange={handleChange} /><br />
        <input name="longitude" placeholder="Longitude" onChange={handleChange} /><br />
       <input type="file" name="image" onChange={(e) =>
  setFormData({ ...formData, image: e.target.files[0] })
  
} /><br />

        <button type="submit">Add Property</button>
      </form>
    </div>
  );
}

export default AddProperty;