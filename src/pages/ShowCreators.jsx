import PropTypes from "prop-types"; // Import PropTypes
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../client";
import Creator from "../components/Creator";

const ShowCreator = () => {
  const [creators, setCreators] = useState([]);
  const navigate = useNavigate();

  const handleViewCreator = (creatorName) => {
    navigate(`/view-creator/${creatorName}`);
  };

  const handleAddCreator = () => {
    navigate("/add-creator");
  };

  const handleEditCreator = (creatorName) => {
    navigate(`/edit-creator/${creatorName}`);
  };

  useEffect(() => {
    const fetchCreators = async () => {
      const { data, error } = await supabase.from("creators").select();

      if (error) {
        console.error("Error fetching data:", error.message);
      } else {
        setCreators(data);
        console.log(data);
      }
    };

    fetchCreators();
  }, []);

  return (
    <div>
      {creators.length === 0 ? (
        <div>No content creators in the database!</div>
      ) : (
        creators.map((creator) => (
          <Creator
            key={creators.name}
            handleViewCreator={handleViewCreator}
            handleEditCreator={handleEditCreator}
            {...creator}
          />
        ))
      )}
      <button onClick={() => handleAddCreator()}>Add new creator</button>
    </div>
  );
};

ShowCreator.propTypes = {
  creators: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      imageURL: PropTypes.string,
    })
  ),
  handleViewCreator: PropTypes.func,
};

export default ShowCreator;
