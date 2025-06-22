import { useState } from "react";
import "./App.css";

import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/BannerSection/Banner";
import Care from "./Components/CareSection/Care";
import Product from "./Components/ProductSection/Product";
import BannerTwo from "./Components/BannerTwoSection/BannerTwo";
import New from "./Components/NewArrival/New";
import Feedback from "./Components/FeedBack/Feedback";
import Footer from "./Components/Footer/footer";
import ParaGraph from "./Components/ParaGraph/ParaGraph";
import LoadingScreen from "./Animation/LoadingScreen";

function App() {
  const [loadingDone, setLoadingDone] = useState(false);

  return (
    <>
      {!loadingDone && (
        <LoadingScreen onComplete={() => setLoadingDone(true)} />
      )}
      {loadingDone && (
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
      )}
    </>
  );
}

export default App;
