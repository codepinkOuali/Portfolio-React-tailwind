import React from "react";

const ServicesSection =()=>{
    const services = [
        {
            id:1,
            title:'Web Developer',
            icon:'https://img.icons8.com/pastel-glyph/64/website--v2.png',
            descirption:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime quaerat quidem accusamus ducimus, aut iste possimus, dicta id expedita est eveniet exercitationem qui sunt voluptas ab repudiandae facilis? Quisquam, alias.'
        },
        {
            id:2,
            title:'UX/UI Designer',
            icon:'https://img.icons8.com/ios-filled/50/google-pixel6.png',
            descirption:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime quaerat quidem accusamus ducimus, aut iste possimus, dicta id expedita est eveniet exercitationem qui sunt voluptas ab repudiandae facilis? Quisquam, alias.'
        },
        {
            id:3,
            title:'Mobile App Developer',
            icon:'https://img.icons8.com/ios/50/web.png',
            descirption:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime quaerat quidem accusamus ducimus, aut iste possimus, dicta id expedita est eveniet exercitationem qui sunt voluptas ab repudiandae facilis? Quisquam, alias.'
        }
    ];
    return(
        <section className="mt-11 md:mt-48" id='services'>
            <h2 className="text-center text-4xl font-bold text-gray-950 sm:text-6xl lg:mb-12" data-aos='fade-up'> My Services</h2>
            <div className="py-8 xl:px-16 px-4 sm:py-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3"
            data-aos='fade-up'
            >
            {services.map(service => (
                <div key={service.id} className="max-w-3/4 p-6 bg-white border border-b-4 border-black rounded-3xl">
                    <img src={service.icon} alt="service icon" className="w-7 h-7 mb-3" />
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-primary">{service.title}</h5>
                    <p className="mb-3 font-normal">{service.descirption}</p>
                </div>
            ))}
            </div>
        </section>
    )
}
export default ServicesSection;