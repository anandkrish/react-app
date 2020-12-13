import React, {Component, Fragment, useEffect, useState} from "react";

export default function LinkedPage(props) {

    
    return (
        <Fragment>
            <h2>Child Component</h2>
            <input type="text" value={props.name} onChange={(e) => props.handleChange(e.target.value)} ></input>
        </Fragment>
    )
}
 
