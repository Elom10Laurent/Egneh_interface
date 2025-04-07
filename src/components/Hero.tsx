// import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  // FaXTwitter,
  FaGithub,
  // FaYoutube,
} from "react-icons/fa6";

import image from "../assets/Kyc_Hero.png";
// import { FaceFrownIcon } from "@heroicons/react/24/outline";

const Hero = () => {
    const testimonials = [
      {
        logo: image, // replace with your real logo path
        company: "Tuple",
        quote: `“Thanks to our collaboration with this team, we significantly improved our internal efficiency. Their solution is intuitive, quick to deploy, and has transformed the way we work daily.”`,
        author: {
          name: "Judith MITSO",
          title: "CEO of Tuple",
          image: image, // replace with your image
        },
      },
      {
        logo: image,
        company: "Reform",
        quote: `“We were impressed by the quality of the service and the personalized support. The team understood our challenges and offered a solution that truly matched our needs. A great success.”`,
        author: {
          name: "Roland BIBOLA",
          title: "CEO of Reform",
          image: image,
        },
      },
    ];
    
    return (
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-24 py-6">
        {/* Hero Section */}
        <header className="flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Text Left */}
          <div className="w-full lg:w-1/2">
            <div className="text-lg text-gray-800">
              <p className="text-4xl sm:text-5xl mb-10 font-semibold text-purple-500">
                Gain confidence, stay compliant, grow your business.
              </p>
              <p className="w-full lg:w-10/12">
                Simplify business partner identity verification. Our enterprise KYC solution helps you collect, verify, and validate legal and financial information securely.
              </p>
            </div>
            <button className="rounded-full bg-yellow-400 text-white px-6 py-3 mt-10 hover:bg-blue-500 transition duration-300">
              Contact us
            </button>
          </div>
    
          {/* Image Right */}
          <div className="w-full lg:w-1/2">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={image}
              alt="hero_Image_Side"
            />
          </div>
        </header>
    
        {/* Icons */}
       <div className="flex justify-start mt-6 gap-6 text-lg">
          <a href="#">
            <FaFacebookF />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          {/* <a href="#">
            <FaXTwitter />
          </a> */}
          <a href="#">
            <FaGithub />
          </a>
          {/* <a href="#">
            <FaYoutube />
          </a> */}
        </div>
    
        {/* Main Content */}
        <div className="px-6 lg:px-20 py-12 space-y-20">
          {/* Main Title */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-gray-800">
              <span className="text-purple-500">KYC</span> for Companies
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our identity verification solution for companies helps you secure your transactions and fight fraud.
            </p>
          </div>
    
          {/* Why Choose Us */}
          <div className="space-y-10">
            <h2 className="text-3xl font-semibold text-gray-800">
              Why choose our KYC solution
            </h2>
    
            <div className="flex flex-col lg:flex-row gap-6">
              {[
                {
                  title: "Fast and efficient verification",
                  text: "Our solution lets you quickly and efficiently verify your partners' identities.",
                },
                {
                  title: "Regulatory compliance",
                  text: "We help you remain compliant with current KYC regulations.",
                },
                {
                  title: "Fraud protection",
                  text: "Our solution protects you from fraud and financial risk.",
                },
              ].map(({ title, text }, i) => (
                <div
                  key={i}
                  className="flex-1 bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 ease-in-out"
                >
                  <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
                  <p className="text-gray-600 mt-6">{text}</p>
                </div>
              ))}
            </div>
          </div>
    
          {/* Our Vision */}
          <div className="flex flex-col lg:flex-row rounded-xl shadow-md overflow-hidden">
            {/* Image Left */}
            <div className="w-full lg:w-1/2">
              <img
                className="w-full h-full object-cover"
                src="https://media.istockphoto.com/id/2183505250/photo/portrait-of-a-black-man-presenting-his-ideas-on-a-glass-wall-during-a-business-meeting.webp?a=1&b=1&s=612x612&w=0&k=20&c=kv_vqEpSYjoClhzulTxpnzaAXhpkIz828w2AP1ohHgA="
                alt="business_verification"
              />
            </div>
            {/* Content Right */}
            <div className="w-full lg:w-1/2 bg-[#FE41C4] text-white p-8 flex flex-col justify-center space-y-4">
              <h2 className="text-2xl lg:text-3xl font-bold">Our vision</h2>
              <p className="text-base lg:text-lg leading-relaxed">
                We believe in a world where companies can grow securely and confidently. Our vision is to provide a simple, effective, and affordable KYC solution for all businesses, no matter their size — and to make happy partners.
              </p>
              <div>
                <button className="bg-white text-[#FE41C4] font-semibold px-6 py-2 rounded-full hover:bg-blue-100 transition">
                  Learn more
                </button>
              </div>
            </div>
          </div>
    
          {/* Testimonials */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold">They trust us</h2>
    
            <section className="bg-white py-20 px-6 md:px-12">
              <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-gray-200 pt-12">
                {testimonials.map((testimonial, idx) => (
                  <div key={idx} className="space-y-6">
                    {/* Logo */}
                    <img
                      src={testimonial.logo}
                      alt={testimonial.company}
                      className="h-8"
                    />
    
                    {/* Quote */}
                    <blockquote className="text-gray-700 text-lg leading-relaxed italic">
                      {testimonial.quote}
                    </blockquote>
    
                    {/* Author */}
                    <div className="flex items-center space-x-4">
                      {/* <img
                        src={testimonial.author.image}
                        alt={testimonial.author.name}
                        className="h-12 w-12 rounded-full object-cover"
                      /> */}
                      <div>
                        <p className="font-semibold text-gray-900">
                          {testimonial.author.name}
                        </p>
                        <p className="text-sm text-purple-500">
                          {testimonial.author.title}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    );
    
};

export default Hero;
