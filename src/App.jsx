import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Banner from "./Components/BannerSection/Banner";
import Care from "./Components/CareSection/Care";
import Product from "./Components/ProductSection/Product";
import BannerTwo from "./Components/BannerTwoSection/BannerTwo";
import New from "./Components/NewArrival/New";
import Feedback from "./Components/FeedBack/Feedback";
import Footer from "./Components/Footer/footer";
import ParaGraph from "./Components/ParaGraph/ParaGraph";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <ParaGraph />
      <Care />
      <Product />
      <BannerTwo />
      <New />
      <Feedback />
      <Footer />
    </div>
  );
}

export default App;
