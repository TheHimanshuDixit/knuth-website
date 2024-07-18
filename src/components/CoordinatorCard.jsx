import PropTypes from "prop-types";

const CoordinatorCard = ({ coordinator }) => (
  <div className="flex flex-col border border-gray-700 rounded-lg shadow-lg bg-gray-800 transition-transform transform hover:scale-105 hover:shadow-[0_4px_15px_rgba(255,255,0,0.6)] duration-300">
    <img
      src={coordinator.image}
      alt={coordinator.name}
      className="w-full h-56 object-cover rounded-t-lg"
    />
    <div className="p-6">
      <h3 className="text-3xl font-bold text-gray-100">{coordinator.name}</h3>
      <p className="text-gray-400 mt-2 font-bold">{coordinator.position}</p>
    </div>
    <div className="flex justify-center items-center py-4 border-t border-gray-700">
      <a
        href={coordinator.instagram}
        className="text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
      >
        <img src="instagram.png" alt="Instagram" className="w-6 h-6" />
      </a>
      <a
        href={coordinator.linkedin}
        className="ml-4 text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
      >
        <img src="linkedin.png" alt="LinkedIn" className="w-6 h-6" />
      </a>
    </div>
  </div>
);

CoordinatorCard.propTypes = {
  coordinator: PropTypes.shape({
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    instagram: PropTypes.string.isRequired,
    linkedin: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default CoordinatorCard;
