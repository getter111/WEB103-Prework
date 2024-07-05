import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import supabase from "../client.js";
import Creator from "../components/Creator.jsx";

const ViewCreator = () => {
  const [creator, setCreator] = useState({});
  let { creatorName } = useParams();
  const navigate = useNavigate();
  const handleEditCreator = (creatorName) => {
    navigate(`/edit-creator/${creatorName}`);
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
        setCreator(data[0]); //data is array
      }
    };
    getCreator();
  }, [creatorName]);

  if (!creator.name) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Creator
        key={creatorName}
        handleEditCreator={handleEditCreator}
        {...creator}
      />
    </div>
  );
};

export default ViewCreator;
