import React, { useState } from "react";
import HappyWoman from "../../images-and-icons/happy-woman.jpg";
import Quotes from "../../images-and-icons/quote.svg";
import "../../styles/home/testimonial.css";

const testimonials = [
  {
    text: "These guys can do it all. From stickers, to signs, to banners, to vehicle wraps. They will get it done.",
    name: "Craig Scholle",
  },
  {
    text: "Best place around for logo design and vehicle wraps!!",
    name: "Cody Smith",
  },
  {
    text: "Excellent experience, great design for my new work van, couldn't be happier!!!",
    name: "William Nail",
  },
  {
    text: "Best place to take care of your signage. They are the most affordable sign company in the area.",
    name: "Mark Lutz",
  },
  {
    text: "These guys knocked it out of the park on my vehicle wrap highly recommend",
    name: "Shawn Thoma",
  }
];


function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
/*
  const goToNextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToPreviousTestimonial = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };
*/

  return (
    <div className="testimonial-content">
      <div className="testimonial-text-container">
        <h1 className="testimonial-heading">Testimonials</h1>
        <img src={Quotes} alt="quotation marks" className="quotation-marks" />
        <p className="testimonial-text-main">
          {testimonials[currentIndex].text}
        </p>
        <h3 className="review-name">{testimonials[currentIndex].name}</h3>
        <p className="review-title">{testimonials[currentIndex].title}</p>
        <div className="testimonial-indicators">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`indicator ${
                currentIndex === index ? "active" : ""
              }`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
      <div className="testimonial-photo-div">
        <img
          src={HappyWoman}
          alt="Women working together at computer"
          className="testimonial-photo"
        />
      </div>
    </div>
  );
}

export default Testimonial;
