import React from "react";

export const Tile = ({name, description}) => {
    const items = [];
    for(let [key, value] of Object.entries(description)){
        items.push(<p className="tile">{value}</p>);
    }

    return (
        <div className="tile-container">
            <p className="tile-title"> {name} </p> 
            { items }
        </div>
    );
};
