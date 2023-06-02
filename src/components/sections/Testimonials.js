import React from "react";
import Slider from "react-slick";
import Pagetitle from "../elements/Pagetitle";
import Testimonial from "../elements/Testimonial";

const sliderData = [
  {
    id: 1,
    avatar: "images/avatar-1.svg",
    userName: "Farrah J.",
    subtitle: "College Student",
    review:
      "He not only simplified the extremely complex c++ topics, but made sure that I completely understood everything before moving on! Really enjoy his teaching and will definitely keep having him help me out!",
  },
  {
    id: 2,
    avatar: "images/avatar-2.svg",
    userName: "Michael F.",
    subtitle: "Graduate Student",
    review:
      "Logan really helped me understand the why behind the rules in the maths. He also was able to provide additional insights that are necessary to understand the course curriculum. Thank you, Logan.",
  },
  {
    id: 3,
    avatar: "images/avatar-3.svg",
    userName: "Krista K.",
    subtitle: "Physical Therapist",
    review:
      "Logan tutored my son who wanted to learn calculus (never having taken it) and helped my daughter review the algebra she learned during the school year. He was great at individualizing their meetings and figuring out the best approach with each kid. After the session my son said that he felt really excited to work with Logan and that he was looking forward to the next meeting. I would highly recommend him.",
  },
];

function Testimonials() {
  const slidetSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section id="testimonials">
      <div className="container">
        <Pagetitle title="Clients & Review" />
        <Slider {...slidetSettings} className="testimonials-wrapper">
          {sliderData.map((slider) => (
            <Testimonial key={slider.id} slider={slider} />
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Testimonials;
