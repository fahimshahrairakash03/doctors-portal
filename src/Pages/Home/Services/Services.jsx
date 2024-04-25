import React from "react";
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import Service from "./Service";

const Services = () => {
  const serviceData = [
    {
      id: 1,
      name: "Fluoride Treatment",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, earum.",
      img: fluoride,
    },
    {
      id: 1,
      name: "Cavity Treatment",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, earum.",
      img: cavity,
    },
    {
      id: 1,
      name: "Whitening Treatment",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, earum.",
      img: whitening,
    },
  ];
  return (
    <div className="mt-16">
      <div className="text-center">
        <h3 className="text-primary uppercase text-xl font-bold">
          Our Services
        </h3>
        <h2 className="text-3xl">Services We Provide</h2>
      </div>
      <div className=" mt-4 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
        {serviceData.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
