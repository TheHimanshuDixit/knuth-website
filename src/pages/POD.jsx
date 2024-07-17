import moment from "moment";

const POD = () => {
  const currentProblem = {
    title: "Find the Longest Substring Without Repeating Characters",
    description:
      "Given a string, find the length of the longest substring without repeating characters.",
    links: [
      {
        platform: "GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/longest-substring-without-repeating-characters/",
      },
      {
        platform: "LeetCode",
        url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
      },
      {
        platform: "Codeforces",
        url: "https://codeforces.com/problemset/problem/1234/B2",
      },
    ],
    date: new Date(),
    tags: ["Strings", "Hashing", "Sliding Window"],
  };

  const pastProblems = [
    {
      title: "Two Sum Problem",
      date: moment().subtract(1, "days").toDate(),
      links: [
        {
          platform: "GeeksforGeeks",
          url: "https://www.geeksforgeeks.org/two-sum-problem/",
        },
        { platform: "LeetCode", url: "https://leetcode.com/problems/two-sum/" },
        {
          platform: "Codeforces",
          url: "https://codeforces.com/problemset/problem/1/A",
        },
      ],
      tags: ["Arrays", "Hash Map"],
      status: "solved", // Example status
    },
    {
      title: "Longest Common Subsequence",
      date: moment().subtract(2, "days").toDate(),
      links: [
        {
          platform: "GeeksforGeeks",
          url: "https://www.geeksforgeeks.org/longest-common-subsequence-dp-4/",
        },
        {
          platform: "LeetCode",
          url: "https://leetcode.com/problems/longest-common-subsequence/",
        },
        {
          platform: "Codeforces",
          url: "https://codeforces.com/problemset/problem/1234/B3",
        },
      ],
      tags: ["Dynamic Programming", "Strings"],
      status: "attempted", // Example status
    },
    {
      title: "Binary Tree Inorder Traversal",
      date: moment().subtract(3, "days").toDate(),
      links: [
        {
          platform: "GeeksforGeeks",
          url: "https://www.geeksforgeeks.org/inorder-tree-traversal-without-recursion/",
        },
        {
          platform: "LeetCode",
          url: "https://leetcode.com/problems/binary-tree-inorder-traversal/",
        },
        {
          platform: "Codeforces",
          url: "https://codeforces.com/problemset/problem/1234/B4",
        },
      ],
      tags: ["Trees", "DFS"],
      status: "unvisited", // Example status
    },
    // Add more past problems as needed...
  ];

  // Function to calculate the time left
  const getTimeLeft = (problemDate) => {
    const now = moment();
    const endOfDay = moment(problemDate).endOf("day");
    return moment.duration(endOfDay.diff(now)).humanize(true);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "solved":
        return "bg-green-500 text-green-100";
      case "attempted":
        return "bg-yellow-500 text-yellow-100";
      case "unvisited":
        return "bg-red-500 text-red-100";
      default:
        return "bg-gray-500 text-gray-100"; // Default color
    }
  };

  return (
    <section className="w-full py-16 md:py-20 lg:py-24 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-xl font-extrabold text-transparent sm:text-6xl">
            Problem of the Day
          </h2>
          <p className=" font-bold mx-auto max-w-2xl text-lg text-gray-400 mt-4 md:text-xl animate-fade-in">
            Solve today&apos;s challenge and enhance your coding skills.
          </p>
        </div>
        <div className="mt-12 max-w-4xl mx-auto bg-gray-800 p-10 rounded-lg shadow-lg shadow-yellow-500 transition-shadow duration-300 animate-fade-in">
          <h3 className="text-3xl font-semibold text-gray-100 mb-4">
            {currentProblem.title}
          </h3>
          <p className="text-lg text-gray-400 mb-6">
            {currentProblem.description}
          </p>
          <div className="space-y-4 mb-8">
            {currentProblem.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full p-4 text-lg border border-gray-700 rounded-lg bg-gray-700 text-gray-100 hover:bg-yellow-500 hover:text-gray-900 transition-colors duration-300"
              >
                Solve on {link.platform}
              </a>
            ))}
          </div>
          <div className="text-gray-400 text-sm mb-4">
            <strong>Date: </strong>
            <span className="text-yellow-500">
              {moment(currentProblem.date).format("MMMM Do YYYY")}
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {currentProblem.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-700 text-gray-300 text-sm font-medium px-3 py-1 rounded-lg"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-16 max-w-4xl mx-auto animate-fade-in">
          <h1 className="pb-8 text-center bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-xl font-extrabold text-transparent sm:text-6xl">
            Past Problems
          </h1>
          <div className="space-y-6">
            {pastProblems.map((problem, index) => (
              <div
                key={index}
                className="relative bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-yellow-500 transition-shadow duration-300"
              >
                <h4 className="text-xl font-semibold text-gray-100 mb-2">
                  {problem.title}
                </h4>
                <div className="text-gray-400 mb-4">
                  <strong>Date: </strong>
                  <span className="text-yellow-500">
                    {moment(problem.date).format("MMMM Do YYYY")}
                  </span>
                </div>
                <div className="text-gray-400 mb-4">
                  <strong>Time Left: </strong>
                  {getTimeLeft(problem.date)}
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {problem.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-700 text-gray-300 text-sm font-medium px-3 py-1 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div
                  className={`absolute top-2 right-2 text-xs font-semibold py-1 px-2 rounded-md shadow-md ${getStatusColor(
                    problem.status
                  )}`}
                >
                  {problem.status.toUpperCase()}
                </div>
                <div className="space-y-2 mt-6">
                  {problem.links.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full p-3 text-base border border-gray-700 rounded-lg bg-gray-700 text-gray-100 hover:bg-yellow-500 hover:text-gray-900 transition-colors duration-300"
                    >
                      Solve on {link.platform}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default POD;
