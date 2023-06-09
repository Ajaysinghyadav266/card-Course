import React from "react";
import {FcLike,FcLikePlaceholder} from "react-icons/fc"
import { toast } from 'react-toastify';
// import { Toast } from "react-toastify/dist/components";


function Card(props){
    let data=props.course;
    let likedCourse=props.likedCourse;
    let setLikedCourses=props.setLikedCourses;



    function clickHandler(){

        if(likedCourse.includes(data.id)){
            //phele se like hua rkha hai
            
            setLikedCourses((prev)=>prev.filter((cid)=>(cid!==data.id))

            )
            //remove
            toast.warning("Liked removed");
        }
        else{
            if(likedCourse.length===0){
                setLikedCourses([data.id]);
            }
            else{
                setLikedCourses((prev)=>[...prev, data.id]);
            }
            toast.success("Liked Course");
        }

    }

    return (<div className="w-[300px] bg-bgDark  rounded-md
    overflow-hidden
   bg-opacity-80 ">
        
            <div className="relative">
            <img src={data.image.url}/>
            <div className="w-[40px] h-[40px] bg-white 
            rounded-full absolute right-2 bottom-3
            grid place-items-center">
            <button onClick={clickHandler}>
         {
            likedCourse.includes(data.id)?<FcLike fontSize="1.75rem"/>:<FcLikePlaceholder/>
        }
            </button>
            </div>
            </div>
            


            
       
       <div className="p-4">
        <p className="text-white font-semibold text-lg
        leading-6">{data.title}</p>
        <p className="mt-2 text-white">{data.description}</p>
       </div>
            

        </div>
    )

}

export default Card;