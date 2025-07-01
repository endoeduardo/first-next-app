import CustomHead from "./components/customHead";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <>
      <CustomHead
        title="Home Page"
        description="Welcome to the home page"
        keywords="home, next.js, SEO"
      />
      <Navbar />

      <main>
        <h1>Welcome</h1>
      </main>
    </>
  );
}
