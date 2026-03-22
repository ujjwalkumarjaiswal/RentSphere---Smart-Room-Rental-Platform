import { useEffect, useState } from "react";
import API from "../services/api";

function Home() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const res = await API.get("/property/all");
      setProperties(res.data);
    } catch (error) {
      console.log("Error fetching properties");
    }
  };

  return (
    <div>
      <h1>Available Properties 🏠</h1>

      {properties.length === 0 ? (
        <p>No properties found</p>
      ) : (
       properties.map((property) => (
  <div key={property._id} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
    <h3>{property.title}</h3>

    {property.images?.length > 0 && (
      <img 
        src={`http://localhost:5000/uploads/${property.images[0]}`} 
        width="200" 
        alt="property"
      />
    )}

    <p>{property.description}</p>
    <p><strong>Rent:</strong> ₹{property.rent}</p>
    <p><strong>Location:</strong> {property.location}</p>
    <p><strong>Owner:</strong> {property.ownerId?.name}</p>
    <p><strong>Contact:</strong> {property.ownerId?.phone}</p>
  </div>
))
      )}
    </div>
  );
}

export default Home;