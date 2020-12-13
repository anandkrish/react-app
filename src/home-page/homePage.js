import React, {Component, Fragment, useEffect, useState} from "react";
import LinkedPage from "../linked-page/linkedPage";

function HomePage() {
    const [showChild, setShowChild] = useState(false);
    const [childValue, setChildValue] = useState("Foo");

    useEffect(() => {
        document.title = childValue;
    }, [childValue]);

    // handleChange(value) {
    //     setChildValue(value)
    // }
    return (
        <Fragment>
            <h3>Parent Component</h3>
            <button onClick={() => setShowChild(false)}>Hide Child</button>
            <button onClick={() => setShowChild(true)}>Load Child</button>
            { showChild && 
                <LinkedPage name= {childValue} handleChange = {setChildValue}></LinkedPage>
            }
            
        </Fragment>
    )

}


export default HomePage;