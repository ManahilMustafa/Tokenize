import { Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export function TestimonialsSection () {
  const testimonials = [
    {
      quote: "We tokenized our entire carbon offset inventory in days — fully traceable and ready to trade.",
      author: "CarbonTech Founder",
    },
    {
      quote: "ZiCON’s platform gave us everything we needed without a single line of code.",
      author: "Real Estate Asset Manager",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center text-gray-900 dark:text-white">
          What Users Say
        </h2>

        <div className="mt-8">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
          >
            {testimonials.map((t, idx) => (
              <SwiperSlide key={idx}>
                <div className="p-6 flex flex-col items-center text-center rounded-2xl shadow-lg bg-white dark:bg-gray-900 max-w-xl mx-auto">
                  <Quote className="h-10 w-10 text-primary mb-4" />
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    "{t.quote}"
                  </p>
                  <p className="font-semibold text-gray-800 dark:text-gray-200">
                    — {t.author}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}