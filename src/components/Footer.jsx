import React from "react";

const Footer = () =>{
    return(
        <footer className="z-10 border-l-transparent border-r-transparent text-white bg-primary">
            <div className="container p-8 flex justify-between">
                <div className="text-white text-3xl font-bold flex">
                    LOGO
                    <img src="https://img.icons8.com/material-outlined/24/f9e400/filled-circle--v1.png" alt="filled-circle"
                    className="w-2 h-3 ml-2"
                    />
                </div>
                <p className="text-white">All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer;