import React from 'react';
import Footer from "./components/Footer"; // Assuming Footer is in the same directory
import Gallery from "./Pages/Gallery"
import Home from "./Pages/HomePage"
const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
       <Gallery />
       {/* <Home /> */}
      </div>
      <Footer />
    </div>
  );
};

export default App;