import { useRouter } from "next/router";

const PortfolioId = () => {
  const router = useRouter();

  const { id } = router.query;
  return (
    <>
      <h1>PortfolioId</h1>
      <p>{id}</p>
    </>
  );
};

export default PortfolioId;
