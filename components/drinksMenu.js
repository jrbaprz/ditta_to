import React from "react";

const DrinksMenu = () => {
  return (
    <>
      <div className="overflow-hidden md:mt-8">
        <div className="p-2 border-[#392e7a] border-[1px] text-sm font-akkuratlight md:p-10 lg:mx-16 xl:grid grid-cols-2 xl:mx-20 xl:p-20 xl:px-28 xl:space-x-10 2xl:mx-80 2xl:space-x-16">
          <div>
            {/* ===== COLUMN 1 ===== */}

            <div className="py-2 mt-4 mx-3 md:py-8">
              <div className="text-[#392e7a] text-2xl font-akkurat">
                Fresh Juices
              </div>
              <div className="flex-grow border-t border-[#392e7a] mt-2" />
            </div>

            <div className="pt-5 pb-3 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Orange Juice
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">$4.50</span>
              </div>
              <div className="flex flex-col">
                <span className="flex-shrink mx-3">Cold-Pressed</span>
              </div>
            </div>

            <div className="pt-5 pb-3 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Grapefruit Juice
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">$4.50</span>
              </div>
              <div className="flex flex-col">
                <span className="flex-shrink mx-3">Cold-Pressed</span>
              </div>
            </div>
            <div className="py-2 mt-4 mx-3 md:py-8">
              <div className="text-[#392e7a] text-2xl font-akkurat">
                House Made Sodas
              </div>
              <div className="flex-grow border-t border-[#392e7a] mt-2" />
            </div>

            <div className="pt-5 pb-3 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Limone
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">$5.00</span>
              </div>
              <div className="flex flex-col">
                <span className="flex-shrink mx-3">
                  Cold-Pressed Lemon Juice - Simple Syrup - Sparkling Water
                </span>
              </div>
            </div>

            <div className="pt-5 pb-3 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Tonica
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">$5.00</span>
              </div>
              <div className="flex flex-col">
                <span className="flex-shrink mx-3">
                  House-Made Charcoal Citrus Syrup - Tonic Water
                </span>
              </div>
            </div>

            <div className="pt-5 pb-3 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Pompelmo
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">$5.00</span>
              </div>
              <div className="flex flex-col">
                <span className="flex-shrink mx-3">
                  Cold-Pressed Grapefruit Juice - Ginger Beer - Sparkling Water
                </span>
              </div>
            </div>
          </div>

          {/* ===== COLUMN 2 ===== */}

          <div>
            <div className="py-2 mt-4 mx-3 md:py-8">
              <div className="text-[#392e7a] text-2xl font-akkurat">
                Cocktails
              </div>
              <div className="flex-grow border-t border-[#392e7a] mt-2" />
            </div>

            <div className="pt-5 pb-3 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Cam Ragazza Sour [Gin Campari Sour]
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat"></span>
              </div>
              <div className="flex flex-col">
                <span className="flex-shrink mx-3">
                  Gin - Campari - Lemon Juice - Simple Syrup - Egg White - Basil
                  Oil Drops - Orange Bitter Drops
                </span>
              </div>
            </div>

            <div className="pt-5 pb-3 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Primo Servizio [Amaro Cooler]
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat"></span>
              </div>
              <div className="flex flex-col">
                <span className="flex-shrink mx-3">
                  Amaro Montenegro - Tio Pepe Dry Sherry - Lime Juice - Simple
                  Syrup - Soda Water
                </span>
              </div>
            </div>

            <div className="pt-5 pb-3 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Italian Buck [Adult Coca Cola]
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat"></span>
              </div>
              <div className="flex flex-col">
                <span className="flex-shrink mx-3">
                  Cynar - Amaro Montenegro - Lime Juice - Fever Tree Ginger Beer
                  - Ginger - Lemon Wedge
                </span>
              </div>
            </div>

            <div className="pt-5 pb-3 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Negroni
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat"></span>
              </div>
              <div className="flex flex-col">
                <span className="flex-shrink mx-3">
                  Gin - Campari - Dry Vermout - Orange Peel - Salt Spray
                </span>
              </div>
            </div>

            <div className="pt-5 pb-3 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Aperol Spritz 123
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat"></span>
              </div>
              <div className="flex flex-col">
                <span className="flex-shrink mx-3">
                  Aperol - Prosecco - Soda - Orange Slice
                </span>
              </div>
            </div>

            <div className="pt-5 pb-3 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Aperol Spritz 211
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat"></span>
              </div>
              <div className="flex flex-col">
                <span className="flex-shrink mx-3">
                  Aperol - Prosecco - Soda - Fresh Orange Juice - Orange Slice
                </span>
              </div>
            </div>

            <div className="pt-5 pb-3 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Paper Plane
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat"></span>
              </div>
              <div className="flex flex-col">
                <span className="flex-shrink mx-3">
                  Bourbon - Nonino Amaro - Aperol - Fresh Lemon Juice - Lemon
                  Twist
                </span>
              </div>
            </div>

            <div className="pt-5 pb-3 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Gin & Tonic
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat"></span>
              </div>
              <div className="flex flex-col">
                <span className="flex-shrink mx-3">
                  Gin - Tonic - Lemon Peel
                </span>
              </div>
            </div>

            {/* COLUMN 2 END */}
            {/*  */}
          </div>
        </div>
      </div>
    </>
  );
};

export default DrinksMenu;
