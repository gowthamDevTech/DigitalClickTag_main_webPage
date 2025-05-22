'use client';

export default function CareerForm1() {
  // You might want to manage file state if you're truly handling uploads
  // const [resumeFile, setResumeFile] = React.useState(null);

  // const handleFileChange = (event) => {
  //   setResumeFile(event.target.files[0]);
  // };

  const handleSubmit = (event:any) => {
    event.preventDefault();
    // Here you would typically handle form submission, including the resume file.
    // Example:
    // const formData = new FormData(event.target);
    // if (resumeFile) {
    //   formData.append('resume', resumeFile);
    // }
    // console.log('Form Data:', Object.fromEntries(formData.entries()));
    // console.log('Resume File:', resumeFile);
    alert('Application Submitted! (Check console for dummy data)');
  };

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-purple-500 to-indigo-600 text-white min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 md:p-12 lg:p-16 rounded-xl shadow-2xl w-full max-w-3xl transform hover:scale-105 transition-all duration-300 ease-in-out">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center text-gray-800 tracking-tight">
          Join Our Visionaries
        </h2>
        <p className="text-lg text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          We're always looking for passionate individuals to grow with us. Tell us about yourself and how you can contribute to our journey.
        </p>

        <form onSubmit={handleSubmit} className="grid gap-6 md:grid-cols-2">
          {/* Full Name */}
          <div className="relative">
            <input
              className="peer p-4 w-full border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors duration-200 text-gray-800 placeholder-transparent"
              type="text"
              id="fullName"
              name="fullName" // Add name attribute for form data
              placeholder="Full Name"
              required
            />
            <label
              htmlFor="fullName"
              className="absolute left-4 -top-3.5 text-gray-600 text-sm transition-all duration-200 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-indigo-600 peer-focus:text-sm"
            >
              Full Name
            </label>
          </div>

          {/* Email Address */}
          <div className="relative">
            <input
              className="peer p-4 w-full border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors duration-200 text-gray-800 placeholder-transparent"
              type="email"
              id="emailAddress"
              name="emailAddress" // Add name attribute
              placeholder="Email Address"
              required
            />
            <label
              htmlFor="emailAddress"
              className="absolute left-4 -top-3.5 text-gray-600 text-sm transition-all duration-200 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-indigo-600 peer-focus:text-sm"
            >
              Email Address
            </label>
          </div>

          {/* Position Applying For */}
          <div className="relative md:col-span-2">
            <input
              className="peer p-4 w-full border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors duration-200 text-gray-800 placeholder-transparent"
              type="text"
              id="position"
              name="position" // Add name attribute
              placeholder="Position Applying For"
              required
            />
            <label
              htmlFor="position"
              className="absolute left-4 -top-3.5 text-gray-600 text-sm transition-all duration-200 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-indigo-600 peer-focus:text-sm"
            >
              Position Applying For
            </label>
          </div>

          {/* Why should we hire you? */}
          <div className="relative md:col-span-2">
            <textarea
              className="peer p-4 w-full border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors duration-200 text-gray-800 placeholder-transparent min-h-[120px] resize-y"
              id="whyHireYou"
              name="whyHireYou" // Add name attribute
              rows={4}
              placeholder="Why should we hire you?"
            />
            <label
              htmlFor="whyHireYou"
              className="absolute left-4 -top-3.5 text-gray-600 text-sm transition-all duration-200 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-indigo-600 peer-focus:text-sm"
            >
              Why should we hire you?
            </label>
          </div>

          {/* Resume Upload Field */}
          <div className="relative md:col-span-2">
            <label
              htmlFor="resume"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Upload Your Resume (PDF, DOCX)
            </label>
            <input
              type="file"
              id="resume"
              name="resume" // Important for accessing file in FormData
              accept=".pdf,.doc,.docx" // Restrict file types
              className="hidden" // Hide default file input
              // onChange={handleFileChange} // Uncomment if you want to manage file state
              required // Make resume upload required
            />
            <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-indigo-500 transition-colors duration-200 group">
              <label htmlFor="resume" className="block w-full h-full cursor-pointer">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400 group-hover:text-indigo-500 transition-colors duration-200"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L40 32"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="mt-2 text-sm text-gray-600 group-hover:text-indigo-700 transition-colors duration-200">
                  <span className="font-medium text-indigo-600 group-hover:text-indigo-800">
                    Click to upload
                  </span>{' '}
                  or drag and drop
                </p>
                <p className="text-xs text-gray-500">PDF, DOCX up to 5MB</p>
                {/* You can display the selected file name here if using state */}
                {/* {resumeFile && (
                  <p className="mt-2 text-sm text-indigo-600 font-medium">
                    Selected: {resumeFile.name}
                  </p>
                )} */}
              </label>
            </div>
          </div>


          {/* Submit Button */}
          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="px-10 py-4 bg-indigo-600 text-white font-bold rounded-full shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transform hover:scale-105 transition-all duration-300 ease-in-out text-lg"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}