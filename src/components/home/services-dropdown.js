import React, { useState } from "react";
import "../../styles/home/services-dropdown.css";

function ServicesDropdown() {
  const [activeIndex, setActiveIndex] = useState(null);

  const services = [
    { id: "01", title: "Fleet Wraps", description: "Transform your fleet into mobile billboards with custom-designed wraps that enhance brand visibility wherever your vehicles go. Our high-quality wraps are durable, eye-catching, and built to last.", link: "/fleet-wraps" },
    { id: "02", title: "Custom Graphics", description: "Bring your brand's vision to life with custom graphics that capture attention and communicate your message effectively. From logos to promotional materials, our designs are tailored to make an impact.", link: "/custom-graphics" },
    { id: "03", title: "Branding", description: "Build a strong, cohesive brand identity that resonates with your audience. Our branding services cover everything from logo design to brand strategy, ensuring consistency across all touchpoints.", link: "/branding" },
    { id: "04", title: "Wall Murals", description: "Make a bold statement with bespoke wall murals that transform spaces and tell your brand's story. Perfect for offices, retail environments, and public spaces, our murals are designed to inspire and engage.", link: "/wall-murals" },
  ];

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="services-dropdown-content">
      <h1 className="services-header">What We Can Do for Our Clients</h1>
      {services.map((service, index) => (
        <div key={service.id} className={`dropdown-section ${activeIndex === index ? "active" : ""}`}>
          <span className="service-id">{service.id}</span>
          <h1 className="dropdown-text">{service.title}</h1>
          <span className="dropdown-plus-sign" onClick={() => handleClick(index)}>
            {activeIndex === index ? "-" : "+"}
          </span>
          {activeIndex === index && (
            <div className="dropdown-content">
              <p className="dropdown-description">{service.description}</p>
              <a href={service.link} className="service-link">Learn more</a>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ServicesDropdown;
