import React from "react";
import mm from "../assets/img/mm.jpg"

function Practice(){
    return(
        <div className="">
            <div>
           
              <div className="flex justify-center item-center h-screen" > 
                   <div className="w-96 shadow-md">
                   <div className="h-60 overflow-hidden">
                   < img src={mm} alt="" />
                </div>
                </div>
               <div className="p-5">
                    <h3>Logo</h3>
                    <h3>Menu</h3>
              </div>
                   <h3 className="font-bold capitalize">Lorem ipsum dolor sit amet. </h3>
                   <h6>GHC 4500</h6>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde cupiditate in animi voluptatem libero iste facere cumque molestiae modi reiciendis.
                 </p> 
                
               </div>
           </div>
        </div>
    );
};
export default Practice;