import { useState } from "react";
import CoordinatorCard from "../components/CoordinatorCard";
import {
  currentYearCoordinators,
  previousYearCoordinators,
  twoYearsAgoCoordinators,
} from "../data/coordinatorData";

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

export default Coordinators;
