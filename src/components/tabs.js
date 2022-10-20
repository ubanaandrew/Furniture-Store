import React from "react";

function Tabs(props) {
    return (
        <div className="Tab">
            <div className="Tab-box">
                <div className="margin logo">
                    <img 
                    src={props.svg} 
                    alt="logo" 
                    />
                </div>
                <div>
                    <h3>{props.name}</h3>
                    <p>{props.desc}</p>
                </div>
            </div>                
        </div>
    )
}

export default Tabs;
