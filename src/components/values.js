import React from "react";

function Values(props) {
    return (
        <div className="Value">
            <div className="Value-box">
                <div className="margin logo">
                    <img src={props.svg} alt="furniture" />
                </div>
                <div>
                    <h3>{props.name}</h3>
                    <p>{props.desc}</p>
                </div>
            </div>                
        </div>
    )
}

export default Values;
