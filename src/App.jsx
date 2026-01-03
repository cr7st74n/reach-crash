import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import Developers from "./components/Developers";
import Jobs from "./components/jobs";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <!-- Hero --> */}
      <Hero />

      {/* <!-- Developers and Employers --> */}
      <Developers />

      {/* <!-- Jobs Section --> */}

      <Jobs />  

    </div>
  );
};
export default App;
