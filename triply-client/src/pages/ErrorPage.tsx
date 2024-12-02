import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError() as { status: number; statusText: string };

  return (
    <div
      id="error-page"
      className="flex justify-center items-center flex-col h-screen"
    >
      <h1 className="text-2xl text-red-600 font-bold my-4">Oops!</h1>
      <p className="text-xl">Sorry, an unexpected error has occurred.</p>
      <p className="text-3xl">
        <i>
          {error.status} {error.statusText}
        </i>
      </p>
      <Link to="/">
        <button className="btn bg-green-300 hover:bg-green-400 mt-4">
          Back to Home
        </button>
      </Link>
    </div>
  );
}
