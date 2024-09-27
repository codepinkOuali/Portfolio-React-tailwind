import React from "react";

const NumbersSection = () =>{
    return(
        <section className="md:mt-40">
            <div className="text-white bg-black w-full border-b-5 border-y-4 border-primary2 flex flex-wrap justify-center p-2 gap-5 md:gap-40">
                <div className="text-center" data-aos='fade-right'>
                    <h2 className="text-3xl">+200</h2>
                    <p>Happy clients</p>
                </div>
                <div className="text-center" data-aos='fade-right'>
                    <h2 className="text-3xl">+30</h2>
                    <p>Completed Projects</p>
                </div>
                <div className="text-center" data-aos='fade-right'>
                    <h2 className="text-3xl">+7</h2>
                    <p>Years Experience</p>
                </div>
            </div>
        </section>
    )
}

export default NumbersSection;