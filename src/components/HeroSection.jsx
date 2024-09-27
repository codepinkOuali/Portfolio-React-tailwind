import React from "react";

const HeroSection =()=>{
    return(
        <section className="relative w-full" data-aos='zoom-in'>
            <div className="w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-screen-lg lg:max-w-screen-xl mx-auto relative">
                <div className="grid lg:grid-cols-2 relative pt-24 lg:max-w-none max-w-2xl md:max-w-3xl mx-auto">
                    <div className="lg:py-6 md:mt-5">
                        <h1 className="text-balance text-6xl/[0.9] font-medium tracking-tight text-gray-950 sm:text-8xl/[0.8] 
                        md:text-[5.5rem]/[0.9]">
                            HI,I'm Web Developer
                        </h1>
                        <p className="mt-8 max-w-lg text-xl/7 font-medium text-white sm:text-2xl/8">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Ipsam maiores eaque nobis deleniti ratione et ullam sint adipisci, 
                            nostrum impedit. Sunt quae reprehenderit minus itaque, illum eligendi 
                            ipsum maiores excepturi.
                        </p>
                        <div className="flex items-center gap-3 pt-9 flex-col sm:flex-row sm:w-max sm:mx-auto lg:mx-0">
                            <button className="md:block w-48 bg-primary2 p-4 font-bold border border-b-4 border-black 
                            rounded-3xl hover:text-primary hover:border-primary2
                            ">
                                Hire Me
                            </button>
                            <button className="md:block  bg-primary p-4 font-bold border border-b-4 border-black 
                            rounded-3xl text-white
                            ">
                                <a href='/resume.pdf' download='resume.pdf' className="flex justify-between hover:scale-105 transition-all
                                ease-in-out 
                                ">
                                    Download Resume
                                    <img src="https://img.icons8.com/ios-glyphs/30/ffffff/download--v1.png" alt="download" 
                                    className="ml-2" width={25} height={25}/>
                                </a>
                            </button>
                        </div>
                    </div>
                    <div className="lg:h-full md:flex">
                        <div className="flex w-full h-full min-h-[24rem] lg:min-h-[none] lg:w-full lg:h-full relative md:justify-end">
                            <img src="/hero-pic.png" alt="Hero Picture" width={550} height='auto' loading="lazy" className="w-[550px]
                            h-auto lg:w-[400px] lg:h-auto
                            " />
                            <div className="absolute top-96 left-20 flex items-center justify-center">
                                <div className="relative inline-block text-white text-3xl font-bold px-4 py-2">
                                    <span className="block w-60 text-center bg-black text-white text-2xl font-bold skew-y-3 py-1 
                                    shadow-lg
                                    ">
                                        MARK
                                    </span>
                                    <span className="block w-60 text-center bg-black text-white text-2xl font-bold skew-y-3 py-1 
                                    shadow-lg
                                    ">
                                        CHRIS
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection
