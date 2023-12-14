import './App.css';
import Intro from "./components/screens/Intro";
import CompaniesOverview from "./components/map/CompagniesOverview";
import CompaniesDetails from "./components/compagniesDetails/CompagniesDetails";
import Footer from "./components/screens/Footer";

function App() {
  return (
      <>
        <Intro/>
        <CompaniesOverview/>
        <CompaniesDetails/>
        <Footer/>
      </>
  );
}

export default App;
