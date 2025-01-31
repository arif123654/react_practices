import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { testimonials } from "../lib/constants/testimonials";
import { FaQuoteRight } from "react-icons/fa";


const TestimonialSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    arrows: false,
    customPaging: () => (
      <div className="w-4 h-4 rounded-full bg-gray-300 cursor-pointer"></div>
    ),
    appendDots: (dots: React.ReactNode) => (
      <div className="flex justify-center mt-4">
        {dots}
      </div>
    )
  };

  return (
    <div className="bg-pink-100 p-8">
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md relative flex-auto">
            <img src={testimonial.imageUrl} alt={`${testimonial.name} - ${testimonial.title}`} className="w-12 h-12 rounded-full absolute top-0 left-0" />
            <p className="text-sm text-gray-600 mb-4 pl-14 pr-10">{testimonial.quote}</p>
            <div className="absolute top-0 right-0">
              <FaQuoteRight color="#FF3E54" />
            </div>
            <div className="mt-4 text-center">
              <h2 className="text-red-500 font-bold">{testimonial.name}</h2>
              <p className="text-blue-500">{testimonial.title}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;