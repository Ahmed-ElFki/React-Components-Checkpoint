import React from 'react';

let FN = "Ahmed", LN = "ELFKI";

let FullName = () => {
    return(
        <div>
            <p><span>First Name</span> : {FN}</p>
            <p><span>Last Name</span> : {LN}</p>
        </div>
    )
}

export default FullName;