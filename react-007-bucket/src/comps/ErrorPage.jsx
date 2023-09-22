import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError;
  return (
    <div>
      <h1>오메</h1>
      <p>관리자 문의</p>
      <p>{error.statusText || error.message}</p>
    </div>
  );
};

export default ErrorPage;
