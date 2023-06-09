import Card from "./Card";



import React, { useState } from "react";

const Cards=(props)=>{
    let course=props.course;

    let filterValue=props.filterValue;

    const[likedCourse,setLikedCourses]=useState([]);


   

    function getcourse(){
      
        if(filterValue==='All'){
        let allcourses=[];
        Object.values(course).forEach(array=>{
            array.forEach( data=>{
                allcourses.push(data);
            })

        }

            )
            return allcourses;
    }
                
   else{
    return course[filterValue];
   }
    
    
        
    }

    return(<div className=" flex flex-wrap justify-center  gap-4 mb-4">
        {
     getcourse().map((course) =>(

        <Card   key={course.id} course={course} likedCourse={likedCourse} setLikedCourses={setLikedCourses}   ></Card>

     ))
     



        }
    </div>)

}
export default Cards;
