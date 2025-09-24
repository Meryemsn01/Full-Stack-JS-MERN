import React from "react";
import ChildComponent from "./ChildComponent";


function ParentComponent(){
    function hours(h){
     return h*2
  }
  return(
    <div>
      <ChildComponent variable={"Meryem"} hour={hours}/>
    </div>
  )
}
export default ParentComponent;