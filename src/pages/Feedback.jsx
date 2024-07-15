const Feedback = () => {
  return (
    <section className="w-full py-16 md:py-20 lg:py-14 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-xl font-extrabold text-transparent sm:text-6xl">
            We Value Your Feedback
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-400 mt-4 md:text-xl animate-fade-in">
            Share your thoughts and help us improve the Knuth Programming Hub.
          </p>
        </div>
        <div className="mt-12 max-w-3xl mx-auto bg-gray-800 p-10 rounded-lg shadow-lg animate-fade-in">
          <form>
            <div className="mb-6">
              <label
                htmlFor="category"
                className="block text-lg font-medium text-gray-300 mb-3"
              >
                Select Feedback Category
              </label>
              <select
                id="category"
                className="w-full p-4 text-lg border border-gray-700 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:border-yellow-500 transition-colors duration-300"
              >
                <option value="appreciation">Appreciation</option>
                <option value="improvement">Improvement</option>
                <option value="suggestion">Suggestion</option>
                <option value="bug-report">Bug Report</option>
                <option value="ux">User Experience (UX)</option>
                <option value="content-quality">Content Quality</option>
                <option value="feature-request">Feature Request</option>
                <option value="accessibility">Accessibility</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-lg font-medium text-gray-300 mb-3"
              >
                Your Feedback
              </label>
              <textarea
                id="message"
                rows="6"
                className="w-full p-4 text-lg border border-gray-700 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:border-yellow-500 transition-colors duration-300 resize-none"
                placeholder="Enter your valuable feedback here..."
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-indigo-600 text-white px-6 py-3 text-lg rounded-md hover:bg-indigo-700 transition-colors duration-300 transform hover:scale-105 shadow-lg hover:shadow-[0_4px_15px_rgba(255,255,0,0.6)]"
              >
                Submit Feedback
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
