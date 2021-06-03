import "./App.css";
import Navbar from "./component/Navbar";
import MainContent from "./component/sections/maincontent";
import Robust from "./component/sections/robust";
import Workflow from "./component/sections/workflow";
import CustomerTestimionals from "./component/sections/Customertestimonials";
import Contact from "./component/sections/contact";
import Footer from "./component/footer";
function App() {
  return (
    <div
      className=" bgill"
      style={{ backgroundImage: "url(./illustration-section-01.svg)" }}
    >
      <div className="max-w-7xl  mx-auto px-4 sm:px-8 lg:px-24 ">
        <Navbar />
        <MainContent />
        <div className="grid grid-cols-1 divide-y divide-gray divide-opacity-25 ">
          <Robust />

          <Workflow />
          <CustomerTestimionals />
        </div>
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
