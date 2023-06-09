import React from "react";


function Filter(props){
    let filterData=props.filterData;
    let filterValue=props.filterValue;
    let setFilterValue=props.setFilterValue;
    let filterButton=props.filterButton;
    let setfilterButton=props.setfilterButton;


 

 function  filterHandeler(data){
 
    setFilterValue(data.title);
    setfilterButton(data.id);
    
   }
  

   
    return (<div className="w-11/12 flex flex-wrap max-w-max space space-x-4 gap-y-4 mx-auto py-4 justify-center">
        {
            filterData.map(data =>(
                <button className={`text-lg px-2 rounded-md font-medium text-white
                bg-black hover:bg-opacity-50  border-2 transition-all duration-300
                ${filterButton === data.id ? 
                    "bg-opacity-60 border-white" :
                    "bg-opacity-40 border-transparent"}
                `

              
            }
                      
                 key={data.id} onClick={()=>
                    filterHandeler(data)  }  
                 value={filterValue} >
                    {data.title}
                    
                </button>
             ) )
}
    </div>)

}
export default Filter;
