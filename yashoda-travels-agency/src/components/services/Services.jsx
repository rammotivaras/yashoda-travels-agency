import { FaRupeeSign } from "react-icons/fa";
import { GrUserManager } from "react-icons/gr";
import { MdOutlineHealthAndSafety } from "react-icons/md";
const skillData = [
  {
    name: "With Good Price",
    icon: (
      <FaRupeeSign className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description:
      "We provide best price for torrist, And out services are best ",
    aosDelay: "0",
  },
  {
    name: "Experience Drivers",
    icon: (
      <GrUserManager className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description:
      "We provides experience drivers for your journy to rich your destination Ontime ",
    aosDelay: "500",
  },
  {
    name: "Care For Safety",
    icon: (
      <MdOutlineHealthAndSafety className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description:
      "We cares about your safety so thats why we provide our best services to you.",
    aosDelay: "1000",
  },
];
const Services = () => {
  return (
    <div className="py-14 dark:bg-black dark:text-white sm:min-h-[600px] sm:grid sm:place-items-center">
      <div className="container">
        <div className="pb-12">
          <h1 className="text-3xl font-semibold text-center font-serif sm:text-4xl">
            Trusted Taxi Agency
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {skillData.map((skill) => (
            <div
              key={skill.name}
              data-aos="fade-up"
              data-aos-delay={skill.aosDelay}
              style={{boxShadow:"2px 4px 6px red"}}
              className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-dark hover:bg-primary duration-300 text-white hover:text-black rounded-lg"
            >
              <div className="grid place-items-center">{skill.icon}</div>
              <h1>{skill.name}</h1>
              <p>{skill.description}</p>
              <a className="text-red-600 hover:text-white" href={skill.link}>
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
