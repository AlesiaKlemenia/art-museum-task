import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorBoundary = (): JSX.Element => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <h1>
        {error.status} {error.statusText}
      </h1>
    );
  }
  return <h1>Something went wrong. We are not sure what...</h1>;
};

export default ErrorBoundary;
