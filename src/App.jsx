import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileNavBar from "./components/MobileNavBar";
import axios from "axios";
import { useEffect, useState } from "react";
import  { getTreadingMovie,addImage } from "./redux/slices/treadingDataSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch =  useDispatch();


  const imageURL = async()=>{
    try{
      const response = await axios.get('/configuration')
    .then((res)=>  dispatch(addImage(res.data.images.secure_base_url + "original")) )
     
    }catch(error)
    {
     console.log("Some Error are Come ",error)
    }
  }
    
  useEffect(()=>{
    dispatch(getTreadingMovie());
    imageURL()
  },[])


  return (
    <main className="pb-14 md:pb-1 bg-black">
      <Header />
      <div className="min-h-[90vh]">
      <Outlet />
      </div>
      <Footer />
      <MobileNavBar />
    </main>
  );
}

export default App;
