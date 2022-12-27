import Link from "next/link";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter()
  return (
    <>
      <h1>Home</h1>
      <Link href={'portfolio'}>Portfolio</Link>
      <Link href={'/portfolio/OscarGomez'}>Test</Link>
      <button onClick={() => {
        router.push('/portfolio/malparido')
      }}>Click me to imperatively navigate</button>
    </>
  );
};

export default Home;
