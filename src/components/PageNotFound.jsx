import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center !p-4">
      <h1 className="text-6xl font-bold text-red-600 !mb-4">404</h1>
      <p className="text-2xl text-gray-700 !mb-6">Oops! Page not found.</p>
      <Link
        to="/"
        className="text-white bg-gray-500 !px-4 !py-2 rounded hover:bg-blue-700 transition"
      >
        back to Home
      </Link>
    </div>
  );
}

export default PageNotFound;
