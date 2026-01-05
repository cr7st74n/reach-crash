import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import Developers from "./components/Developers";
import Jobs from "./components/jobs";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <!-- Hero --> */}
      <Hero title ="Cr7ston and React" subtitle="Test this by cr7ston"/>

      {/* <!-- Developers and Employers --> */}
      <Developers />

      {/* <!-- Jobs Section --> */}

      <Jobs />  

    </div>
  );
};
export default App;
