import { React, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import CoffeeSlider from "../components/coffeeSlider";
import MenuCategories from "../components/menuCategories";
import CoffeeMenu from "../components/coffeeMenu";

const Home = () => {
  const vidRef = useRef();

  useEffect(() => {
    vidRef.current.play();
  }, []);

  return (
    <>
      <body>
        <section className="overflow-hidden flex items-center justify-center h-screen">
          <video
            className="relative object-cover z-0 w-full h-full flex justify-center items-center"
            src="/videos/Ditta.mp4"
            alt="Video of Ditta"
            type="video/mp4"
            defaultMuted
            muted={true}
            autoPlay={true}
            loop={true}
            playsInline={true}
            ref={vidRef}
          />

          <section className="absolute z-20 container mx-auto flex flex-col items-center text-center">
            <h1 className="text-white flex font-elgoc items-center text-center justify-center text-5xl px-4 mb-4 md:text-8xl lg:px-20 xl:px-40 2xl:text-[11rem]">
              Ditta Artigianale Toronto
            </h1>

            <div className="flex justify-center mt-4 gap-4 xl:mt-10 xl:gap-6">
              <a
                href="/menu"
                className="border bg-black bg-opacity-40 px-6 py-1 md:px-9 md:py-2 xl:px-10 xl:py-3 hover:bg-white duration-300 group hover:text-white"
              >
                <h3 className="relative text-xs text-white uppercase font-akkurat tracking-widest group-hover:text-black">
                  Our Menu
                </h3>
              </a>

              <a
                href="/contact"
                className="border bg-black bg-opacity-40 px-6 py-1 md:px-9 md:py-2 xl:px-10 xl:py-3 hover:bg-white duration-300 group hover:text-white"
              >
                <h3 className="relative text-xs text-white uppercase font-akkurat tracking-widest group-hover:text-black">
                  Connect
                </h3>
              </a>
            </div>
          </section>
        </section>

        <main className="p-8 md:p-16 xl:p-20">
          <section className="pb-8 lg:grid lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.75,
                delay: 0.5,
              }}
              viewport={{ once: true }}
            >
              <video
                className="lg:px-24"
                src="/videos/stopmotion.mp4"
                type="video/mp4"
                defaultMuted
                muted={true}
                autoPlay={true}
                loop={true}
                playsInline={true}
                ref={vidRef}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.75,
              }}
              viewport={{ once: true }}
              className="text-center space-y-4 lg:my-auto lg:text-left lg:space-y-8"
            >
              <h1 className="font-elgoc text-[#392e7a] text-4xl pt-8 md:text-5xl">
                Welcome to Toronto
              </h1>
              <h2 className="font-akkuratlight text-[#606060] leading-loose lg:max-w-lg lg:mr-auto lg:text-lg">
                Our goal at Ditta Toronto is to bring a sophisticated yet
                effortless ambience to the heart of the city. From our
                thoughtfully designed and beautiful space, to the impeccable
                Italian coffee. A gift from Florence, here to enjoy.
              </h2>
            </motion.div>
          </section>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.5,
            }}
            viewport={{ once: true }}
            className="py-8 lg:py-16 lg:space-y-16"
          >
            <section className="text-center space-y-4 lg:space-y-8">
              <h1 className="font-elgoc text-[#392e7a] text-4xl md:text-5xl">
                Our Coffee
              </h1>
              <h2 className="font-akkuratlight text-[#606060] leading-loose mx-auto lg:text-lg lg:max-w-2xl">
                Our experts travel the world in search of the most exclusive
                micro-lots, with offerings being rotated each season.
              </h2>
            </section>
            <CoffeeSlider />
          </motion.div>

          <div className="py-8 lg:py-16">
            <MenuCategories />
          </div>

          <div className="border-t-[1px] mx-5" />

          <motion.section
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.5,
            }}
            viewport={{ once: true }}
            className="py-8 flex flex-col justify-center lg:py-16 lg:space-y-8"
          >
            <h1 className="text-center font-elgoc text-[#392e7a] text-4xl md:text-5xl ">
              Our Drink Menu
            </h1>
            <h2 className="font-akkuratlight text-[#606060] leading-loose my-4 mx-auto text-center lg:text-lg lg:max-w-2xl">
              Between our traditional offerings to our specialty drinks, come
              see how Ditta bridges the gap between Specialty Coffee and classic
              Italian espresso.
            </h2>
          </motion.section>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.5,
            }}
            viewport={{ once: true }}
          >
            <CoffeeMenu />
          </motion.div>
        </main>
      </body>
    </>
  );
};

export default Home;
