import React from "react";

const Parent = () => {
    function greeting(name) {
        console.log('Hello ' + name);
      }
      
      function processUserInput(callback) {
        var name = "vaibhav";
        callback(name);
      }
      
      processUserInput(greeting);
    
    return (
        <div>

        </div>
    )
   
}

export default Parent;