import { useState } from "react";
import PropTypes from "prop-types";

const Coordinators = () => {
  const [showCurrentYear, setShowCurrentYear] = useState(false);
  const [showPreviousYear, setShowPreviousYear] = useState(false);
  const [showTwoYearsAgo, setShowTwoYearsAgo] = useState(false);

  const toggleCurrentYear = () => setShowCurrentYear(!showCurrentYear);
  const togglePreviousYear = () => setShowPreviousYear(!showPreviousYear);
  const toggleTwoYearsAgo = () => setShowTwoYearsAgo(!showTwoYearsAgo);

  return (
    <section className="w-full min-h-screen py-16 md:py-20 lg:py-10 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-xl font-extrabold text-transparent sm:text-6xl">
            Coordinators
          </h1>
          <p className="font-extrabold mx-auto max-w-3xl text-lg text-gray-400 mt-4 md:text-xl animate-fade-in">
            Meet our dedicated coordinators for the present year and the
            previous two years.
          </p>
        </div>
        <div className="mt-12 space-y-8">
          <div>
            <button
              onClick={toggleCurrentYear}
              className=" text-center w-full text-3xl font-bold text-gray-100 hover:text-yellow-200 transition-colors duration-300"
            >
              Coordinators 2023-24
            </button>
            {showCurrentYear && (
              <div className="mt-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 animate-fade-in">
                {currentYearCoordinators.map((coordinator, index) => (
                  <CoordinatorCard key={index} coordinator={coordinator} />
                ))}
              </div>
            )}
          </div>
          <div>
            <button
              onClick={togglePreviousYear}
              className="w-full text-center text-3xl font-bold text-gray-100 hover:text-yellow-200 transition-colors duration-300"
            >
              Coordinators 2022-23
            </button>
            {showPreviousYear && (
              <div className="mt-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 animate-fade-in">
                {previousYearCoordinators.map((coordinator, index) => (
                  <CoordinatorCard key={index} coordinator={coordinator} />
                ))}
              </div>
            )}
          </div>
          <div>
            <button
              onClick={toggleTwoYearsAgo}
              className="w-full text-center text-3xl font-bold text-gray-100 hover:text-yellow-200 transition-colors duration-300"
            >
              Coordinators 2021-22
            </button>
            {showTwoYearsAgo && (
              <div className="mt-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 animate-fade-in">
                {twoYearsAgoCoordinators.map((coordinator, index) => (
                  <CoordinatorCard key={index} coordinator={coordinator} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const CoordinatorCard = ({ coordinator }) => (
  <div className="flex flex-col border border-gray-700 rounded-lg shadow-lg bg-gray-800 transition-transform transform hover:scale-105 hover:shadow-[0_4px_15px_rgba(255,255,0,0.6)] duration-300">
    <img
      src={coordinator.image}
      alt={coordinator.name}
      className="w-full h-56 object-cover rounded-t-lg"
    />
    <div className="p-6">
      <h3 className="text-3xl font-bold text-gray-100">
        {coordinator.name}
      </h3>
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

const currentYearCoordinators = [
  {
    name: "Himanshu Dixit",
    position: "Coordinator",
    instagram: "https://www.instagram.com/himanshudixit",
    linkedin: "https://www.linkedin.com/in/himanshudixit",
    image: "Himanhsu.jpeg",
  },
  {
    name: "Sparsh Kumar",
    position: "Coordinator",
    instagram: "https://www.instagram.com/sparshkumar",
    linkedin: "https://www.linkedin.com/in/sparshkumar",
    image: "path/to/sparshkumar.jpg",
  },
  {
    name: "Manya Jindal",
    position: "Coordinator",
    instagram: "https://www.instagram.com/manyajindal",
    linkedin: "https://www.linkedin.com/in/manyajindal",
    image: "path/to/manyajindal.jpg",
  },
  {
    name: "Siddhartha Katiyar",
    position: "Coordinator",
    instagram: "https://www.instagram.com/siddharthakatiyar",
    linkedin: "https://www.linkedin.com/in/siddharthakatiyar",
    image: "path/to/siddharthakatiyar.jpg",
  },
  {
    name: "Arnav Teotia",
    position: "Coordinator",
    instagram: "https://www.instagram.com/arnavteotia",
    linkedin: "https://www.linkedin.com/in/arnavteotia",
    image: "path/to/arnavteotia.jpg",
  },
  {
    name: "Varun Singhal",
    position: "Coordinator",
    instagram: "https://www.instagram.com/varunsinghal",
    linkedin: "https://www.linkedin.com/in/varunsinghal",
    image: "path/to/varunsinghal.jpg",
  },
  {
    name: "Princi Agrawal",
    position: "Coordinator",
    instagram: "https://www.instagram.com/princiagrawal",
    linkedin: "https://www.linkedin.com/in/princiagrawal",
    image: "path/to/princiagrawal.jpg",
  },
  {
    name: "Paakhi Maheshwari",
    position: "Coordinator",
    instagram: "https://www.instagram.com/paakhimaheshwari",
    linkedin: "https://www.linkedin.com/in/paakhimaheshwari",
    image: "path/to/paakhimaheshwari.jpg",
  },
  {
    name: "Himral Garg",
    position: "Coordinator",
    instagram: "https://www.instagram.com/himralgarg",
    linkedin: "https://www.linkedin.com/in/himralgarg",
    image: "path/to/himralgarg.jpg",
  },

  {
    name: "Harsh Sharma",
    position: "Coordinator",
    instagram: "https://www.instagram.com/harshsharma",
    linkedin: "https://www.linkedin.com/in/harshsharma",
    image: "path/to/harshsharma.jpg",
  },
];

const previousYearCoordinators = [
  {
    name: "Saksham Sahgal",
    position: "Coordinator",
    instagram: "https://www.instagram.com/sakshamsahgal",
    linkedin: "https://www.linkedin.com/in/sakshamsahgal",
    image: "path/to/sakshamsahgal.jpg",
  },
  {
    name: "Ananya Chopra",
    position: "Coordinator",
    instagram: "https://www.instagram.com/ananyachopra",
    linkedin: "https://www.linkedin.com/in/ananyachopra",
    image: "path/to/ananyachopra.jpg",
  },
  {
    name: "Harshit Dudani",
    position: "Coordinator",
    instagram: "https://www.instagram.com/harshitdudani",
    linkedin: "https://www.linkedin.com/in/harshitdudani",
    image: "path/to/harshitdudani.jpg",
  },
  {
    name: "Naman Kumar",
    position: "Coordinator",
    instagram: "https://www.instagram.com/namankumar",
    linkedin: "https://www.linkedin.com/in/namankumar",
    image: "path/to/namankumar.jpg",
  },
  {
    name: "Nishant Taliwal",
    position: "Coordinator",
    instagram: "https://www.instagram.com/nishanttaliwal",
    linkedin: "https://www.linkedin.com/in/nishanttaliwal",
    image: "path/to/nishanttaliwal.jpg",
  },
  {
    name: "Pragya Singhal",
    position: "Coordinator",
    instagram: "https://www.instagram.com/pragyasinghal",
    linkedin: "https://www.linkedin.com/in/pragyasinghal",
    image: "path/to/pragyasinghal.jpg",
  },
  {
    name: "Tanmay Kumar",
    position: "Coordinator",
    instagram: "https://www.instagram.com/tanmaykumar",
    linkedin: "https://www.linkedin.com/in/tanmaykumar",
    image: "path/to/tanmaykumar.jpg",
  },
  {
    name: "Tushar Yadav",
    position: "Coordinator",
    instagram: "https://www.instagram.com/tusharyadav",
    linkedin: "https://www.linkedin.com/in/tusharyadav",
    image: "path/to/tusharyadav.jpg",
  },
];

const twoYearsAgoCoordinators = [
  {
    name: "Piyush Mittal",
    position: "Coordinator",
    instagram: "https://www.instagram.com/piyushmittal",
    linkedin: "https://www.linkedin.com/in/piyushmittal",
    image: "path/to/piyushmittal.jpg",
  },
  {
    name: "Rachit Pratap Singh",
    position: "Coordinator",
    instagram: "https://www.instagram.com/rachitpratapsingh",
    linkedin: "https://www.linkedin.com/in/rachitpratapsingh",
    image: "path/to/rachitpratapsingh.jpg",
  },
  {
    name: "Srejan Kumar Bera",
    position: "Coordinator",
    instagram: "https://www.instagram.com/srejankumarbera",
    linkedin: "https://www.linkedin.com/in/srejankumarbera",
    image: "path/to/srejankumarbera.jpg",
  },
  {
    name: "Ansh Gupta",
    position: "Coordinator",
    instagram: "https://www.instagram.com/anshgupta",
    linkedin: "https://www.linkedin.com/in/anshgupta",
    image: "path/to/anshgupta.jpg",
  },
  {
    name: "Dhiren Chugh",
    position: "Coordinator",
    instagram: "https://www.instagram.com/dhirenchugh",
    linkedin: "https://www.linkedin.com/in/dhirenchugh",
    image: "path/to/dhirenchugh.jpg",
  },
  {
    name: "Divyansh Gupta",
    position: "Coordinator",
    instagram: "https://www.instagram.com/divyanshgupta",
    linkedin: "https://www.linkedin.com/in/divyanshgupta",
    image: "path/to/divyanshgupta.jpg",
  },
  {
    name: "Abhinay Singh",
    position: "Coordinator",
    instagram: "https://www.instagram.com/abhinaysingh",
    linkedin: "https://www.linkedin.com/in/abhinaysingh",
    image: "path/to/abhinaysingh.jpg",
  },
  {
    name: "Deepanshu Choudhary",
    position: "Coordinator",
    instagram: "https://www.instagram.com/deepanshuchoudhary",
    linkedin: "https://www.linkedin.com/in/deepanshuchoudhary",
    image: "path/to/deepanshuchoudhary.jpg",
  },
  {
    name: "Shivansh Gupta",
    position: "Coordinator",
    instagram: "https://www.instagram.com/shivanshgupta",
    linkedin: "https://www.linkedin.com/in/shivanshgupta",
    image: "path/to/shivanshgupta.jpg",
  },
  {
    name: "Ishita Bansal",
    position: "Coordinator",
    instagram: "https://www.instagram.com/ishitabansal",
    linkedin: "https://www.linkedin.com/in/ishitabansal",
    image: "path/to/ishitabansal.jpg",
  },
  {
    name: "Harshita Goyal",
    position: "Coordinator",
    instagram: "https://www.instagram.com/harshitagoyal",
    linkedin: "https://www.linkedin.com/in/harshitagoyal",
    image: "path/to/harshitagoyal.jpg",
  },
  {
    name: "Girdhar Agarwal",
    position: "Coordinator",
    instagram: "https://www.instagram.com/girdharagarwal",
    linkedin: "https://www.linkedin.com/in/girdharagarwal",
    image: "path/to/girdharagarwal.jpg",
  },
  {
    name: "Bhumi Agarwal",
    position: "Coordinator",
    instagram: "https://www.instagram.com/bhumiagarwal",
    linkedin: "https://www.linkedin.com/in/bhumiagarwal",
    image: "path/to/bhumiagarwal.jpg",
  },
  {
    name: "Amar Shukla",
    position: "Coordinator",
    instagram: "https://www.instagram.com/amarshukla",
    linkedin: "https://www.linkedin.com/in/amarshukla",
    image: "path/to/amarshukla.jpg",
  },
];

export default Coordinators;
