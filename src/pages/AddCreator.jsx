import { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../client";

const AddCreator = () => {
  const [name, setName] = useState("");
  const [url, setURL] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");
  const navigate = useNavigate();

  const returnScreen = () => {
    navigate("/");
  };

  const insertCreator = async () => {
    const { error } = await supabase.from("creators").insert({
      name: name,
      url: url,
      description: description,
      imageURL: imageURL,
    });
    if (error) console.error(error);
    else console.log("successfully added creator");
    returnScreen();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("adding creator...");
    insertCreator();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Url:</label>
      <input type="text" value={url} onChange={(e) => setURL(e.target.value)} />
      <label>Description:</label>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label>imageURL:</label>
      <input
        type="text"
        value={imageURL}
        onChange={(e) => setImageURL(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
};

export default AddCreator;
