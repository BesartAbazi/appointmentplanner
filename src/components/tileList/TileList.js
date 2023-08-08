import React from "react";
import {Tile} from '../tile/Tile.js';

export const TileList = ({ contacts }) => {
    return (
        <div>
            {
                contacts.map((contact, index) => {
                    let { name, ...rest } = contact;
                    return <Tile name={name} description={rest} key={index}/>;
                })
            }
        </div>
    );
};
