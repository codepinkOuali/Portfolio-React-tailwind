import React from "react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Kenzie Edgar",
      src: "https://i.pravatar.cc/100?img=1",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolore est nam necessitatibus enim exercitationem perferendis aspernatur fuga. Possimus, unde!",
    },
    {
      id: 2,
      name: "Tommie Wwart",
      src: "https://i.pravatar.cc/100?img=3",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolore est nam necessitatibus enim exercitationem perferendis aspernatur fuga. Possimus, unde!",
    },
    {
      id: 3,
      name: "Nevada Herbertson",
      src: "https://i.pravatar.cc/100?img=5",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolore est nam necessitatibus enim exercitationem perferendis aspernatur fuga. Possimus, unde!",
    },
    {
      id: 4,
      name: "Charlie Howse",
      src: "https://i.pravatar.cc/100?img=4",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolore est nam necessitatibus enim exercitationem perferendis aspernatur fuga. Possimus, unde!",
    },
  ];
  return (
    <section
      className="flex items-center justify-center py-5"
      id="testimonials"
    >
      <div className="w-full px-5 py-16 md:py-24">
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center max-w-xl mx-auto">
            <h2
              className="text-center text-4xl font-bold sm:6xl lg:mb-12"
              data-aos="fade-up"
            >
              {" "}
              What people are saying
            </h2>
          </div>
          <div
            className="py-8 xl:px-16 px-4 sm:py-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12
                    lg:grid-cols-4 
                    "
            data-aos="fade-up"
          >
            {testimonials.map((element) => (
              <div
                key={element.id}
                className="w-full mx-auto p-5 text-gray-800 font-light mb-6 bg-white border
                            border-b-4 border-black rounded-3xl
                            "
              >
                <div className="w-full flex mb-4 items-center">
                  <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                    <img src={element.src} alt="image" loading="lazy" />
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-bold text-sm uppercase text-gray-600">
                      {element.name}
                    </h6>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-sm leading-tight">
                    <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                      "
                    </span>
                    {element.comment}
                    <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                      "
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
