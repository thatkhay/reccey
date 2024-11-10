'use client'

import Button from "./components/Button";
import Form from "./components/Form";
import { about } from "@/lib/about";
import consultantImg from './images/cosultant.svg'
import videoEditorImg from './images/video-editor.svg'
import designerImg from './images/designer.svg'
import photographerImg from './images/photographer.svg'
import dashboardImg from './images/dashboard.svg'
import sellImg from './images/sell.svg'
import storeImg from './images/store.svg'
import productRealese from './images/productrelease.svg'
import faq from './images/faq-img.svg'
import star from './images/star.svg'
import instagram from './images/Instagram.svg'
import { creators } from "@/lib/creators";
import Image from "next/image";
import { slider } from "@/lib/slider";
import { useState } from "react";


const Page = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slider.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slider.length) % slider.length);
  };
  return (
    <div className=" text-black lg:px-32 p-2 py-10 flex flex-col border border-black ">
      <div className="lg:flex justify-between hidden ">
        <div className="relative max-w-[10rem] max-h-[10rem]">
          <div className=" rounded-full border-black h-[9.375rem] w-[9.375rem]">
            <Image src={consultantImg} alt="consultant-image" />
          </div>
          <div className="h-[1.875rem] w-[9.375rem]  text-center absolute bottom-0 -right-12 transform translate-x-1 translate-y-1 rounded-bl-[4rem] rounded-tr-[4rem] bg-[#036C20] text-white ">
            Consultant
          </div>
        </div>

        <div className="text-center flex flex-col items-center gap-4 p-10">
          <p className=" text-sm">
            The <span className="text-[#036C20]">easiest</span> way to{" "}
            <span className="text-[#036C20]">make money online</span>{" "}
          </p>
          <p className="font-extrabold text-3xl ">
            Empower Your Creative Business <br /> with Reccey
          </p>
          <p>
            Sell digital products, offer memberships, manage events, <br /> and
            more — all from a single platform  .
          </p>
        </div>

        <div className="relative max-w-[10rem] max-h-[10rem]">
          <div className=" rounded-full border-black h-[9.375rem] w-[9.375rem]">
            <Image src={videoEditorImg} alt="video-editor-image" />
          </div>
          <div className="h-[1.875rem] w-[9.375rem]  text-center absolute bottom-0 -left-20 transform translate-x-1 translate-y-1 rounded-tl-[4rem] rounded-br-[4rem] bg-[#036C20] text-white ">
            Consultant
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between lg:hidden ">


        <div className="text-center flex flex-col items-center gap-4 p-2">
          <p className=" text-sm">
            The <span className="text-[#036C20]">easiest</span> way to{" "}
            <span className="text-[#036C20]">make money online</span>{" "}
          </p>
          <p className="font-extrabold text-3xl ">
            Empower Your Creative Business <br /> with Reccey
          </p>
          <p>
            Sell digital products, offer memberships, manage events, <br /> and
            more — all from a single platform.
          </p>
        </div>

        <div className="flex  items-center gap-6  justify-between w-[80%] mt-6">
          <div className="flex flex-col items-center  ">
            <Image src={consultantImg} alt="consultant-image" width={200} height={200} />

            <div className="font-extrabold text-[#036C20]">
              Consultant
            </div>
          </div>

          <div className="flex flex-col items-center ">
            <Image src={videoEditorImg} alt="video-editor-image" width={200} height={200} />

            <div className="font-extrabold text-[#036C20]">
              Consultant
            </div>
          </div>
        </div>


      </div>
      <div className="lg:flex justify-around hidden">
        <div className="relative max-w-[10rem] max-h-[10rem]">
          <div className=" rounded-full border-black h-[9.375rem] w-[9.375rem]">
            <Image src={designerImg} alt="designer-image" />

          </div>
          <div className="h-[1.875rem] w-[9.375rem]  text-center absolute bottom-0 -left-12 transform translate-x-1 translate-y-1 rounded-tl-[4rem] rounded-br-[4rem] bg-[#036C20] text-white ">
            Consultant
          </div>
        </div>

        <div className="text-center flex  items-center gap-4 p-10">
          <Button variant="secondary" size="large">
            Get Started for Free
          </Button>
          <Button variant="primary" size="large">
            Get Started for Free
          </Button>
        </div>

        <div className="relative max-w-[10rem] max-h-[10rem]">
          <div className=" rounded-full border-black h-[9.375rem] w-[9.375rem]">
            <Image src={photographerImg} alt="photogapher-image" />

          </div>
          <div className="h-[1.875rem] w-[9.375rem]  text-center absolute bottom-0 -right-20 transform translate-x-1 translate-y-1 rounded-bl-[4rem] rounded-tr-[4rem] bg-[#036C20] text-white ">
            Consultant
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between lg:hidden">

        <div className="flex items-center gap-6 justify-between w-[80%] mt-4">
          <div className="flex flex-col items-center ">
            <Image src={designerImg} alt="designer-image" width={200} height={200} />


            <div className=" font-extrabold text-[#036C20] ">
              Consultant
            </div>
          </div>
          <div className="flex flex-col items-center  ">

            <Image src={photographerImg} alt="designer-image" width={200} height={200} />

            <div className=" font-extrabold text-[#036C20]">
              Consultant
            </div>
          </div>
          {/* <div className="flex flex-col items-center border ">
            <div className=" rounded-full border-black h-[9.375rem] w-[9.375rem] flex flex-col items-center ">
              <Image src={photographerImg} alt="photogapher-image" width={200} height={200} />

            </div>
            <div className=" ">
              Consultant
            </div>
          </div> */}
        </div>

        <div className="text-center flex flex-col lg:flex-row  items-center gap-4 p-10">
          <Button variant="secondary" size="large">
            Get Started for Free
          </Button>
          <Button variant="primary" size="large">
            Get Started for Free
          </Button>
        </div>


      </div>
      <section className=" flex flex-col items-center mt-24 lg:w-auto">
        <p className="font-extrabold text-2xl ">Beyond <span className="text-[#036C20]">E-Commerce,</span> Built <span className="text-[#036C20]">for Creators</span> </p>
        <p className=" text-sm  mt-2">An all-in-one hub designed to deliver an unbeatable experience for creators and customers alike.</p>
        <div className="  max-w-[80%] mt-4 flex items-center justify-center">
          <Image src={dashboardImg} alt="dashboard-img" />
        </div>
      </section>
      <section className=" flex flex-col items-center mt-24">
        <p className="font-extrabold text-2xl ">Top <span className="text-[#036C20]">Creators</span>   Choose Conalle 🚀 </p>
        <p className=" text-sm  mt-2">See how creators are transforming their talents into thriving businesses with us!</p>
        <div className="flex lg:flex-row flex-col gap-8 items-center justify-between mt-12 w-[85%]">
          {creators.map((creator) => (
            <div key={creator.id} className=" items-baseline h-[21.875rem] w-[21.875rem] relative ">
              <Image src={creator.picture} alt={`${creator.name}'s picture`} />
              <div className="flex flex-col absolute top-1 z-10 left-2 text-white mt-4 ml-2">
                <p className="mt-[12rem]"> {creator.name} </p>
                <p> {creator.socialAddress} </p>
                <div className=" flex items-center">
                  <Image src={instagram } alt="" />
                  <p> {creator.followers} </p>
                </div>

                <p className="  border bg-white text-center text-black rounded-[2rem] px-3 p-1"> {creator.profession} </p>
              </div>

            </div>
          ))}
        </div>
      </section>
      <section className=" flex flex-col items-center mt-24">
        <p className="font-extrabold text-2xl ">Why <span className="text-[#036C20]">Choose Reccey?</span>     </p>
        <p className=" text-sm  mt-2 text-center">All-in-One Powerful Tools for Creators and Entrepreneurs.</p>

        <div className="lg:grid grid-cols-3 gap-20 lg:p-4 w-[90%] flex flex-col items-center  mt-12">
          {about.map((about) => (
            <div key={about.id} className="  text-white bg-[#036C20]  flex flex-col items-center  border rounded-[2rem] px-8 pb-10 h-[25.81rem] max-w-[24.81rem] " >

              <Image src={about.picture} alt={`${about.tittle}'s picture`} className="mt-[7rem]" />

              <p className="m-3 font-semibold"> {about.tittle} </p>

              <p className=" text-center"> {about.info} </p>
            </div>
          ))}
        </div>
      </section>
      <section className=" text-white  flex flex-col items-center justify-between gap-6 mt-24 text-center p-8 rounded-[2rem] bg-[#036C20] ">
        <div className=" flex flex-col items-center justify-center  lg:ml-12">
          <p className="text-center font-semibold ">How It Works in 3 Easy Steps</p>
          <p className="text-center font-semibold ">Simple Steps to Launch Your Digital Business</p>
        </div>

        <div className="flex lg:flex-row flex-col w-full items-center justify-around  mt-10 mb-4 ">
          <div className="flex flex-col  justify-between items-center mb-4">
            <div className="border rounded-full  bg-white h-[10rem] w-[10rem] flex items-center justify-center">
              <Image src={storeImg} alt="" />
            </div>
            <p className="mt-4 font-semibold">Create Store</p>
            <p>Create an account, choose a template,<br />
              add your logo, and set up payments.</p>
          </div>
          <div className="flex flex-col  justify-between items-center mb-4">
            <div className="border rounded-full bg-white h-[10rem] w-[10rem] flex items-center justify-center">
              <Image src={productRealese

              } alt="" />
            </div>
            <p className="mt-4 font-semibold ">Upload Products</p>
            <p>   Upload your digital content <br /> and start listing your products  </p>
          </div>
          <div className="flex flex-col  justify-between items-center mb-4">
            <div className="border rounded-full  bg-white h-[10rem] w-[10rem] flex items-center justify-center">
              <Image src={sellImg} alt="" />
            </div>
            <p className="mt-4 font-semibold">Start Selling</p>
            <p>Promote your store and<br />
              start earning from day one</p>
          </div>
        </div>
        <div className="flex items-center ">
          <Button variant="tertiary">
            Start Selling
          </Button>
        </div>


      </section>
      <section className="flex flex-col items-center mt-24">
        <p className="font-extrabold text-2xl">
          Hear from <span className="text-[#036C20] text-center">Our Creators</span>
        </p>
        <p className="text-sm mt-2 text-center">Real stories from creators growing their businesses with Reccey</p>

        <div className="flex items-center gap-6 w-full justify-center mt-8">
          {/* Previous button */}
          <button
            onClick={prevSlide}
            className="text-black text-3xl  px-4 py-2 rounded-full hover:bg-gray-200 transition border-4 border-[#036C20] lg:block hidden "
          >
            ❮
          </button>

          {/* Display two slides */}

          <div className="lg:flex flex-col md:flex-row items-center gap-6 hidden">
            {[0, 1].map((offset) => {
              const slideIndex = (currentIndex + offset) % slider.length;
              const slide = slider[slideIndex];
              return (
                <div
                  key={slide.id}
                  className="border-4 border-[#036C20] w-[90%] md:w-[34.75rem] h-auto md:h-[37.0625rem] text-black bg-white flex flex-col items-center rounded-[2rem] px-6 md:px-8 py-6 md:py-8"
                >
                  <div className="rounded-2xl flex items-center gap-4 md:gap-8">
                    <Image src={slide.picture} alt={`${slide.name}'s picture`} className="h-[4rem] w-[4rem] md:h-[5rem] md:w-[5rem]" />
                    <div className="mt-2 md:mt-4 text-start">
                      <p className="font-bold">{slide.name}</p>
                      <p className="text-gray-600">{slide.position}</p>
                      <div className="flex items-center justify-around">
                        <Image src={star} alt="star" height={30} width={30} />
                        <Image src={star} alt="star" height={30} width={30} />
                        <Image src={star} alt="star" height={30} width={30} />
                        <Image src={star} alt="star" height={30} width={30} />
                        <Image src={star} alt="star" height={30} width={30} />
                      </div>
                    </div>
                  </div>
                  <p className="text-center  w-[90%] md:w-[80%] mt-20">{slide.info}</p>
                </div>
              );
            })}
          </div>


          <div className="flex flex-col items-center gap-6 lg:hidden">
            {slider.length > 0 && (
              <div
                key={slider[currentIndex].id}
                className="border-4 border-[#036C20] w-[90%] md:w-[34.75rem] h-auto md:h-[37.0625rem] text-black bg-white flex flex-col items-center rounded-[2rem] px-6 md:px-8 py-6 md:py-8"
              >
                <div className="rounded-2xl flex flex-col items-center gap-4 md:gap-8">
                  <Image src={slider[currentIndex].picture} alt={`${slider[currentIndex].name}'s picture`} className="h-[4rem] w-[4rem] md:h-[5rem] md:w-[5rem]" />
                  <div className="mt-2 md:mt-4 text-start">
                    <p className="font-bold text-center">{slider[currentIndex].name}</p>
                    <p className="text-gray-600 text-center">{slider[currentIndex].position}</p>
                    <div className="flex items-center justify-around">
                      <Image src={star} alt="star" height={30} width={30} />
                      <Image src={star} alt="star" height={30} width={30} />
                      <Image src={star} alt="star" height={30} width={30} />
                      <Image src={star} alt="star" height={30} width={30} />
                      <Image src={star} alt="star" height={30} width={30} />
                    </div>
                  </div>
                </div>
                <p className="text-center  w-[90%] md:w-[80%] mt-20">{slider[currentIndex].info}</p>
              </div>
            )}
            <div className="flex gap-4">
              {/* prev button */}
              <button
                onClick={prevSlide}
                className="text-black text-3xl  px-4 py-2 rounded-full hover:bg-gray-200 transition border-4 border-[#036C20] block lg:hidden "
              >
                ❮
              </button>

              {/* Next button */}
              <button
                onClick={nextSlide}
                className="text-black border-4 text-3xl px-4 py-2 rounded-full hover:bg-gray-200 transition  border-[#036C20] block lg:hidden"
              >
                ❯
              </button>
            </div>
          </div>



          {/* Next button */}
          <button
            onClick={nextSlide}
            className="text-black border-4 text-3xl px-4 py-2 rounded-full hover:bg-gray-200 transition  border-[#036C20] lg:block hidden"
          >
            ❯
          </button>
        </div>
      </section>
      <section className="flex flex-col items-center mt-24 rounded-[2rem] bg-[#036C20] py-[5rem] text-white mb-16">
        <p className=" text-center font-bold text-2xl mb-[2rem]">Ready to Elevate <br /> Your Creative Business?</p>
        <p className=" text-center mb-[3rem]">Build your storefront, customize your brand, and monetize your creativity—all from <br />  one powerful platform.</p>
        <Button variant="tertiary" size="large">
          Get Started for Free!
        </Button>
      </section>

      <section className="flex flex-col items-center ">
        <p className=" text-center font-bold text-2xl">Need Help? Check Out Our FAQs</p>
        <p className=" text-center">We’ve gathered answers to the most common questions to help you get started.</p>
        <div className="mt-6 flex flex-col items-center gap-6 w-full">
          <div className="flex flex-col gap-4 text-white items-start py-4 px-4 bg-[#036C20] w-[80%] rounded-lg" >
            <p>What pricing plans does Conalle offer?</p>
            <p>Conalle offers three pricing plans to suit different needs; Basic plan, Premium and Platinum Plan</p>
          </div>
          <div className="flex flex-col gap-4 text-white items-start py-4 px-4 bg-[#036C20] w-[80%] rounded-lg">
            <p>Is there a free trial available?</p>
          </div>
          <div className="flex flex-col gap-4 text-white items-start py-4 px-4 bg-[#036C20] w-[80%] rounded-lg">
            <p>Can I upgrade or downgrade my plan?</p>
          </div>
          <div className="flex flex-col gap-4 text-white items-start py-4 px-4 bg-[#036C20] w-[80%] rounded-lg">
            <p>Are there any hidden fees?</p>
          </div>
          <div className="flex flex-col gap-4 text-white items-start py-4 px-4 bg-[#036C20] w-[80%] rounded-lg">
            <p>Can I switch between monthly and annual billing?</p>
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center mt-12">
        <div className="flex lg:flex-row flex-col w-full">


          <div className="w-full  flex flex-col items-center">
            <p className="font-bold text-2xl">We’re Here to Help!</p>
            <p>Whether you have a question, feedback, or  <br />
              just want to say hello, we’re ready to assist.</p>

            <Form />


          </div>
          <Image src={faq} alt="" className=" hidden lg:block" />
        </div>
      </section>


    </div>
  );
};

export default Page;
