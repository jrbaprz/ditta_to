import Image from "next/image";
import White from "../public/logos/white.jpg";

const Footer = () => {
  return (
    <>
      <footer className="bg-[url(../public/logos/pattern.jpg)] bg-cover overflow-hidden">
        <div className="sticky grid grid-cols-1 gap-8 p-10 py-28 md:py-36 md:grid-cols-2 xl:grid-cols-4 xl:px-36">
          <div className="mb-8 md:px-6 xl:px-0 md:flex items-center">
            <Image src={White} alt="Logo" />
          </div>
          <div />

          <div className="flex flex-col gap-6 md:p-2 xl:ml-auto">
            <div className="flex flex-col font-elgocmedium text-white text-2xl md:text-2xl">
              <div className="tracking-wide">Useful Links</div>
            </div>

            <ul className="flex flex-col font-akkuratlight gap-2 text-white pb-5 text-lg">
              <a
                href="/about"
                className="hover:text-[#f8e700] transition-all duration-300"
              >
                About Us
              </a>
              <a
                href="/menu"
                className="hover:text-[#f8e700] transition-all duration-300"
              >
                Our Menu
              </a>
              <a
                href="https://www.instagram.com/dittaartigianaleto/"
                className="hover:text-[#f8e700] transition-all duration-300"
              >
                Instagram
              </a>
              <a
                href="/contact"
                className="hover:text-[#f8e700] transition-all duration-300"
              >
                Contact Us
              </a>
            </ul>
          </div>

          {/* <div className="flex flex-col gap-6 md:p-2 xl:ml-auto">
            <div className="flex flex-col font-elgocmedium text-white text-2xl md:text-2xl">
              <div className="tracking-wide">Shop Online</div>
            </div>

            <div className="flex flex-col font-akkuratlight gap-2 text-white pb-5 text-lg">
              <span>Everything</span>
              <span>Coffee</span>
              <span>Market</span>
              <span>Merchandise</span>
            </div>
          </div> */}

          <div className="flex flex-col gap-6 md:p-2 xl:ml-auto">
            <div className="flex flex-col font-elgocmedium text-white text-2xl md:text-2xl">
              <div className="tracking-wide">Our Hours</div>
            </div>

            <div className="flex flex-col font-akkuratlight text-white text-lg">
              <span className="font-akkurat">Monday - Friday</span>
              <span className="mb-6">8:00am - 4:00pm</span>
              <span />
              <span className="font-akkurat">Saturday - Sunday</span>
              <span className="mb-6">9:00am - 4:00pm</span>
              <span />
              <span className="font-akkurat">612 Richmond St. W</span>
              <span className="font-akkurat">Toronto, ON</span>
            </div>
          </div>
        </div>
        <div className="flex font-akkuratlight text-white py-8 text-sm justify-center border-t-[#ffffff8f] border-t-[1px]">
          &copy; 2023. Ditta Artigianale Toronto. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
