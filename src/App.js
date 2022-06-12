import React from "react";
import Analytics from "./Components/Analytics";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Newsletter from "./Components/Newsletter";
import Card from "./Components/Card";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
     <Navbar></Navbar>
     <Hero></Hero>
     <Analytics></Analytics>
     <Newsletter></Newsletter>
     <Card></Card>
     <Footer></Footer>
    </div>
  );
}

export default App;
