import React from "react";
import { Tile } from '../tile/Tile.js';

export const TileList = (props) => {
    return (
        <div>
            {
                props.contacts?.map((contact, index) => {
                    let { name, ...rest } = contact;
                    return <Tile name={name} description={rest} key={index} />;
                })
            }
            {
                props.appointments?.map((appointment, index) => {
                    let { name, ...rest } = appointment;
                    return <Tile name={name} description={rest} key={index} />;
                })
            }
        </div>
    );
};
