
const testimonialData = [
  {
    name: "Dr Gunjan",
    image: "https://picsum.photos/200",
    description: "Well behaved Car owner as well as Driver.",
    aosDelay: "0",
  },
  {
    name: "Aakansha",
    image: "https://picsum.photos/202",
    description: "One of the best ride experienced so far with Yashoda Travels.",
    aosDelay: "300",
  },
  {
    name: "Ram",
    image: "https://picsum.photos/204",
    description: "It was very joyfull journy we felt enriched by Punit bhai knowledge.",
    aosDelay: "1000",
  },
];
const Reviews = () => {
  return (
    <>
      
      <div id="reviews" className="dark:bg-black dark:text-white py-14 sm:pb-24">
        <div className="container">
          {/* Header */}
          <div className="space-y-4 pb-12">
            <p
              data-aos="fade-up"
              className="text-3xl font-semibold text-center sm:text-4xl font-serif"
            >
               Our Clients Reviews About Us
            </p>
            <p data-aos="fade-up" className="text-center sm:px-44">
            Embark on a journey with Yashoda Travels Agency, where dreams meet destinations, and memories are woven into every mile.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-black dark:text-white">
            {testimonialData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-12 dark:bg-white/20 bg-gray-100 duration-300  rounded-lg "
              >
                <div className="grid place-items-center ">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="rounded-full w-20 h-20"
                  />
                </div>
                <div className="text-2xl">⭐⭐⭐⭐⭐</div>
                <p>{skill.description}</p>
                <p className="text-center font-semibold">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
