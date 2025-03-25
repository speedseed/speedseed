"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export default function Slider() {
  const grantee = [
    {
      id: 1, name: "Aisha Bello", image: "https://picsum.photos/200/300", business: "Handmade Jewelry Business (Abuja)", message: "I am incredibly grateful to the SpeedSeed Business Grant for believing in my dream! Before this grant, my handmade jewelry business struggled to afford quality materials and proper branding. With this funding, I was able to invest in better gemstones, revamp my packaging, and advertise online. Sales have tripled, and I now ship across Nigeria! Thank you for this life-changing opportunity!",
    },
    {
      id: 2, name: "Chinedu Okafor", image: "https://picsum.photos/200/300", business: "Local Bakery (Lagos)", message: "This grant came at the perfect time! My small bakery was struggling due to an old oven that slowed down production. Thanks to the SpeedSeed Business Grant, I bought a brand-new commercial oven and expanded my menu. We now supply pastries to more supermarkets and even hired two new staff members! I can’t thank you enough for this support!",
    },
    {
      id: 3, name: "Funke Adeyemi", image: "https://picsum.photos/200/300", business: "Organic Skincare Brand (Ibadan)", message: "My organic skincare brand had so much potential, but I lacked the funds to scale up. Thanks to the SpeedSeed Business Grant, I upgraded my packaging to eco-friendly materials, built a professional website, and even expanded my product line. My customer base has grown beyond my expectations, and I am now exporting to Ghana! Thank you for giving small businesses like mine a chance to grow!",
    },
    {
      id: 4, name: "Emeka Nwosu", image: "https://picsum.photos/200/300", business: "Tech Startup (Enugu)", message: "The SpeedSeed Business Grant gave my tech startup the boost it needed! With this funding, I hired an extra developer and launched our mobile app ahead of schedule. We now have over 10,000 active users and just secured our first corporate contract! This grant has truly changed the game for us—thank you for investing in Nigerian entrepreneurs!",
    },
    {
      id: 5, name: "Hauwa Ibrahim", image: "https://picsum.photos/200/300", business: "Family-Owned Farm (Kano)", message: "For years, my family farm struggled due to poor irrigation. The SpeedSeed Business Grant gave us the funds to purchase modern irrigation equipment, which increased our crop yield by 40%! Now, we supply fresh vegetables to more markets and even local restaurants. We are deeply grateful for this support—thank you for helping small-scale farmers like us!",
    },
    {
      id: 6, name: "Bolaji Adesina", image: "https://picsum.photos/200/300", business: "Local Clothing Boutique (Osogbo)", message: "I started my boutique from my bedroom, but the SpeedSeed Business Grant made it possible for me to open my first store! The funding helped me stock up on more inventory, improve my branding, and run ads that brought in new customers. Sales have doubled, and I’ve hired two assistants! Thank you for believing in small businesses!",
    },
    {
      id: 7, name: "Samuel Obong", image: "https://picsum.photos/200/300", business: "Mobile Repair Business (Uyo)", message: "Before receiving the SpeedSeed Business Grant, my mobile repair business was limited because I couldn't afford high-quality tools. With this grant, I bought advanced repair kits and even expanded to offer doorstep repair services. We now have a steady stream of clients, and I was able to employ two apprentices. Thank you for helping me grow my business!",
    },
    {
      id: 8, name: " Ifeoma Eze", image: "https://picsum.photos/200/300", business: "Home-Based Catering Service (Port Harcourt)", message: "Cooking has always been my passion, but I never imagined turning it into a full-time business. The SpeedSeed Business Grant allowed me to upgrade my kitchen, buy commercial-grade cooking equipment, and launch a website for online orders. Now, I cater large events and even offer meal plans! This grant has been a true blessing—thank you!",
    },
  ]
  return (
    <Swiper
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView="auto"
      loop={true}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      coverflowEffect={{
        rotate: 30,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={{ clickable: true }}
      modules={[EffectCoverflow, Autoplay, Pagination]}
      className="w-full max-w-3xl h-full"
    >
      <SwiperSlide className="shadow p-5 border">
        {/* <img src="/images/image1.webp" alt="Slide 1" className="rounded-lg" /> */}
      </SwiperSlide>
      <SwiperSlide className="w-full h-80">
        <img src="/images/image2.jpg" alt="Slide 2" className="rounded-lg" />
      </SwiperSlide>
      <SwiperSlide className="w-full h-80">
        <img src="/images/image3.webp" alt="Slide 3" className="rounded-lg" />
      </SwiperSlide>
      <SwiperSlide className="w-full h-80">
        <img src="/images/image4.jpg" alt="Slide 4" className="rounded-lg" />
      </SwiperSlide>
    </Swiper>
  );
}
