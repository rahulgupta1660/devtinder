import { useRouteError } from "react-router";

const Error = () => {
  const error = useRouteError();
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      Something went wrong!
      <p>{error?.status}</p>
    </div>
  );
};
export default Error;
