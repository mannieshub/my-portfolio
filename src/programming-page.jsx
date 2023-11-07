import React from 'react'
import './App.css'
import './App.scss'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

//import components
import NavbarComponent from "./navbar- component";

export default function programmingPage(){
    return(
        <>
        <body style={{backgroundColor:"#474747", height: "100vh"} }>
            <div>
                <NavbarComponent title="Programming and Tools"></NavbarComponent>
            </div>
        </body>
        </>
    )
}