import React from "react";

const AboutSection = () =>{
    const experiences = [
        {
            id:1,
            role:'Software Engineer',
            company:'Microsoft',
            date:'Mar 2023 - September 2024'
        },
        {
            id:2,
            role:'Frontend developer',
            company:'Spotify',
            date:'Mar 2021 - September 2022'
        }
    ];
    const education = [
        {
            id:1,
            role:'Software Engineer',
            school:'school 1',
            year:'2019 - 2021'
        },
        {
            id:2,
            role:'Frontend developer',
            school:'school 2',
            year:'2017-2019'
        }
    ];
    return(
        <section className="mt-9 md:mt-40" id='about'>
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 xl:px-16">
                <div className="mt-4 md:mt-0 text-left flex flex-col z-10 h-full">
                    <h2 className="text-4xl text-gray-950 sm:text-6xl lg:mb-8 font-bold" data-aos='zoom-in-up'> My Education</h2>
                    <div className="flex justify-start">
                        <div className="space-y-8 py-8 w-full md:w-4/5" data-aos='zoom-in-up'>
                            {education.map((element) => (
                                <div key={element.id} className="flex items-center rounded-xl bg-primary p-5 md:justify-end">
                                    <div className="w-1/4">
                                        <img src="https://img.icons8.com/ios-filled/100/ffffff/lawyer.png" alt="lawyer" />
                                    </div>
                                    <div className="w-3/4 pl-4">
                                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-primary2">{element.role}</h5>
                                        <p className="max-w-lg text-xl/7 font-medium text-white sm:text-2xl/8">{element.school}</p>
                                        <p className="max-w-lg text-xl/7 font-medium text-white sm:text-2xl/8">{element.year}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div>
                <h2 className="md:text-center text-4xl text-gray-950 sm:text-6xl lg:mb-8 font-bold" data-aos='zoom-in-up'> My Experience</h2>
                <div className="flex justify-end">
                        <div className="space-y-8 py-8 w-full md:w-4/5" data-aos='zoom-in-up'>
                            {experiences.map((element) => (
                                <div key={element.id} className="flex items-center rounded-xl bg-primary p-5 mf:justify-end">
                                    <div className="w-1/4">
                                        <img src="https://img.icons8.com/ios-filled/100/ffffff/lawyer.png" alt="lawyer" />
                                    </div>
                                    <div className="w-3/4 pl-4">
                                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-primary2">{element.role}</h5>
                                        <p className="max-w-lg text-xl/7 font-medium text-white sm:text-2xl/8">{element.company}</p>
                                        <p className="max-w-lg text-xl/7 font-medium text-white sm:text-2xl/8">{element.date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default AboutSection;