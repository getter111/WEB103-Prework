import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import supabase from "../client";

const EditCreator = () => {
  let { creatorName } = useParams();
  const navigate = useNavigate();

  const [creator, setCreator] = useState({
    name: "",
    url: "",
    description: "",
    imageURL: "",
  });

  const returnScreen = () => {
    navigate("/");
  };

  useEffect(() => {
    const getCreator = async () => {
      const { data, error } = await supabase
        .from("creators")
        .select()
        .eq("name", creatorName);

      if (error) {
        console.error(
          `${creatorName} not found in the database:`,
          error.message
        );
      } else {
        setCreator(data[0] || {});
      }
    };
    getCreator();
  }, [creatorName]);

  const editCreator = async () => {
    const { error } = await supabase
      .from("creators")
      .update({
        name: creator.name,
        url: creator.url,
        description: creator.description,
        imageURL: creator.imageURL,
      })
      .eq("name", creatorName);

    if (error) {
      console.error(error);
    } else {
      console.log("successfully edited creator");
      returnScreen();
    }
  };

  const deleteCreator = async () => {
    const { res, error } = await supabase
      .from("creators")
      .delete()
      .eq("name", creatorName);
    console.log(res + "was deleted...");

    if (error) {
      console.error(error);
    } else {
      console.log("successfully deleted creator");
      returnScreen();
    }
  };

  const { name, url, description, imageURL } = creator;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setCreator({ ...creator, name: e.target.value })}
      />

      <label>Url:</label>
      <input
        type="text"
        value={url}
        onChange={(e) => setCreator({ ...creator, url: e.target.value })}
      />

      <label>Description:</label>
      <input
        type="text"
        value={description}
        onChange={(e) =>
          setCreator({ ...creator, description: e.target.value })
        }
      />

      <label>imageURL:</label>
      <input
        type="text"
        value={imageURL}
        onChange={(e) => setCreator({ ...creator, imageURL: e.target.value })}
      />

      <button onClick={editCreator}>Make Edit</button>
      <button onClick={deleteCreator}>Delete Creator</button>
    </form>
  );
};

export default EditCreator;
