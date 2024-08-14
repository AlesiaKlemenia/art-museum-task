import BackToHomeButton from "@components/BackToHomeButton";
import Layout from "@components/Layout";

const NotFound = (): JSX.Element => {
  return (
    <Layout>
      <h1 className="dark-gray">404</h1>
      <span className="dark-gray">
        The page you are looking for doesn&apos;t exist.
      </span>
      <BackToHomeButton />
    </Layout>
  );
};

export default NotFound;
