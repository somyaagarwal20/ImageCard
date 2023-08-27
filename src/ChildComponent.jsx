import React from 'react'

const ChildComponent = ({ onDataFromChild }) => {
    const sendDataToParent = () => {
        const data = "logged in";
        onDataFromChild(data);
    };
    return (
        <div>
            <div> ChildComponent</div>
            <button onClick={sendDataToParent} >send </button>
        </div>
    );
};

export default ChildComponent
