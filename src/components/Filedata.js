import React from 'react';

function Parent(){
    const data = 'Data from parent';
    return(
        <div>
            <Child name = {data}/>
        </div>
    )
}

function Child ({name}){
    return(
        <div>
            {name}
        </div>
    )
}

export default Parent;