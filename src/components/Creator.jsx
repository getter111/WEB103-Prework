import PropTypes from "prop-types"; // Import PropTypes

const Creator = ({
  name,
  url,
  description,
  imageURL,
  handleViewCreator,
  handleEditCreator,
}) => {
  return (
    <div>
      <h1 onClick={() => handleViewCreator(name)} style={{ cursor: "pointer" }}>
        <a>{name}</a>
      </h1>
      <h2>{description}</h2>
      <h3>
        <a href={url} target="_blank">
          Watch {name}
        </a>
      </h3>
      {imageURL && (
        <img
          src={imageURL}
          alt={`picture of ${name}`}
          width={350}
          height={200}
        />
      )}
      <button onClick={() => handleEditCreator(name)}>Edit</button>
    </div>
  );
};

Creator.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageURL: PropTypes.string,
  handleViewCreator: PropTypes.func,
  handleEditCreator: PropTypes.func,
};

export default Creator;
