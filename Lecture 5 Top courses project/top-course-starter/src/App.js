import React, { useState,useEffect } from "react";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import Spinner from "./components/Spinner";
import { apiUrl,filterData } from "./data";
import { toast } from "react-toastify";

const App = () => {

   const [courses,setCourse]= useState(null);
   const[loading,setLoading]=useState(true);
   const[filterValue,setFilterValue]=useState(filterData[0].title);
   const [filterButton,setfilterButton]=useState("1");



  async function fetchData(){
   
    try{
       const respons= await fetch(apiUrl);
       const output= await respons.json();
       // add course
       setCourse(output.data);


    }
    catch(error){
      toast.error("Network m tiikat hai");


    }
    setLoading(false);
  }
  useEffect(()=>{
    fetchData();
  },[]);


  return <div className="min-h-screen flex flex-col bg-bgDark2">

    
    
    <div>
      <Navbar/>
    </div>

    <div className=" bg-bgDark2">

    <div>
        <Filter filterData={filterData}
        filterValue={filterValue} setFilterValue={setFilterValue} filterButton={filterButton} setfilterButton={setfilterButton} />
       </div>
   
       <div className="w-11/12 max-w-1200px mx-auto flex flex-wrap justify-center 
       items-center 
       min-h-[50vh] ">
        {
          loading ? (<Spinner/>):(<Cards course={courses} filterValue={filterValue}/>)
        }
        
       </div>

    </div>

     

  </div>;
};

export default App;
