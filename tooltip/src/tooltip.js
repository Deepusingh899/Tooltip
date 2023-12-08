import React from "react";
import './index.css';
export default function Tooltip(props){
    const tooltipClass=`tooltiptext-${props.type}`;
    return (
        <>
            <div className="tooltip">Hover over me !
                <span className={tooltipClass}>Thanks for Hovering ! I'm a tooltip</span>
            </div>
        </>
    );
}