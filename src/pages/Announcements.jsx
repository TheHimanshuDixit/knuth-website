const Announcements = () => {
  return (
    <section className="w-full py-16 md:py-20 lg:py-10 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-xl font-extrabold text-transparent sm:text-6xl">
            Upcoming Events
          </h1>
          <p className=" font-bold mx-auto max-w-3xl text-lg text-gray-400 mt-4 md:text-xl animate-fade-in">
            Check out our upcoming events and seminars at Knuth Programming Hub
            hub.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 animate-fade-in">
          {events.map((event, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-lg shadow-lg bg-gray-800 transition-transform transform hover:scale-105 hover:shadow-[0_4px_15px_rgba(255,255,0,0.6)] duration-300"
            >
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-100">
                  {event.title}
                </h3>
                <p className="text-gray-500 mt-2">
                  {event.date} | {event.time}
                </p>
              </div>
              <div className="px-6 py-4">
                <p className="text-gray-400">{event.description}</p>
              </div>
              <div className="px-6 pb-6">
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const events = [
  {
    title: "Competitive Programming Bootcamp",
    date: "July 15, 2024",
    time: "6:00 PM - 8:00 PM",
    description:
      "Sharpen your problem-solving skills and learn advanced algorithms to excel in competitive programming contests.",
  },
  {
    title: "Hackathon Prep Workshop",
    date: "August 5, 2024",
    time: "6:00 PM - 8:00 PM",
    description:
      "Prepare for upcoming hackathons with hands-on projects and team collaboration strategies.",
  },
  {
    title: "Code Golf Challenge",
    date: "September 1, 2024",
    time: "6:00 PM - 8:00 PM",
    description:
      "Compete in writing the shortest code solutions to a set of challenging problems. Prizes for the top performers!",
  },
  {
    title: "Advanced Data Structures",
    date: "October 10, 2024",
    time: "6:00 PM - 8:00 PM",
    description:
      "Master advanced data structures to optimize your algorithms and solve complex coding problems efficiently.",
  },
  {
    title: "AI in Competitive Coding",
    date: "November 5, 2024",
    time: "6:00 PM - 8:00 PM",
    description:
      "Explore the intersection of artificial intelligence and competitive coding, and learn how to implement AI algorithms.",
  },
  {
    title: "Annual Coding Contest",
    date: "December 1, 2024",
    time: "6:00 PM - 8:00 PM",
    description:
      "Join the most anticipated coding contest of the year and compete with the best coders in the college.",
  },
];

export default Announcements;
