import React from "react";

const CoffeeMenu = () => {
  return (
    <>
      <div className="overflow-hidden md:mt-8">
        <div className="p-2 border-[#392e7a] border-[1px] text-sm font-akkuratlight md:p-10 lg:mx-16 xl:grid grid-cols-2 xl:mx-20 xl:p-20 xl:px-28 xl:space-x-10 2xl:mx-80 2xl:space-x-16">
          <div>
            {/* ===== Coffee ===== */}

            <div className="py-2 mt-4 mx-3 md:py-8">
              <div className="text-[#392e7a] text-2xl font-akkurat">Coffee</div>
              <div className="flex-grow border-t border-[#392e7a] mt-2" />
            </div>

            <div className="py-5 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl font-akkurat text-[#392e7a]">
                  Espresso
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">
                  $2.66 / $3.54
                </span>
              </div>
              <span className="flex-shrink mx-3">Solo / Doppio</span>
            </div>

            <div className="py-5 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Macchiato
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">
                  $3.10 / $3.98
                </span>
              </div>
              <span className="flex-shrink mx-3">Solo / Doppio</span>
            </div>

            <div className="py-5 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Cappuccino
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">
                  $3.98 / $4.60
                </span>
              </div>
              <span className="flex-shrink mx-3">Solo / Doppio</span>
            </div>

            <div className="py-5 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Cortado
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">$3.10</span>
              </div>
              <span className="flex-shrink mx-3">6oz</span>
            </div>

            <div className="py-5 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Flat White
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">$4.60</span>
              </div>
              <span className="flex-shrink mx-3">8oz</span>
            </div>

            <div className="py-5 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Latte
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">
                  $4.87 / $6.20
                </span>
              </div>
              <span className="flex-shrink mx-3">12oz / 16oz</span>
            </div>

            <div className="py-5 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Long Black
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">$3.54</span>
              </div>
              <span className="flex-shrink mx-3">8oz</span>
            </div>

            <div className="py-5 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Americano
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">
                  $3.54 / $4.43
                </span>
              </div>
              <span className="flex-shrink mx-3">12oz / 16oz</span>
            </div>

            <div className="py-5 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Drip Coffee
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">
                  $2.66 / $3.27 / $3.72
                </span>
              </div>
              <span className="flex-shrink mx-3">8oz / 12oz / 16oz</span>
            </div>

            <div className="py-5 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Pour Over
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">
                  Market Price
                </span>
              </div>
              <span className="flex-shrink mx-3">(10am - 3pm)</span>
            </div>

            {/* ===== Milk Options ===== */}

            <div className="py-2 mt-4 mx-3 md:py-8">
              <div className="text-[#392e7a] text-2xl font-akkurat">
                Milk Options
              </div>
              <div className="flex-grow border-t border-[#392e7a] mt-2" />
            </div>

            <div className="py-5 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Whole Milk
                </span>
                <div className="flex-grow border-t border-gray-300 mx-3" />
              </div>
            </div>

            <div className="py-5 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  1% Milk
                </span>
                <div className="flex-grow border-t border-gray-300 mx-3" />
              </div>
            </div>

            <div className="py-5 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Lactose-Free Milk
                </span>
                <div className="flex-grow border-t border-gray-300 mx-3" />
              </div>
            </div>

            <div className="py-5 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Oat Milk
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">$0.60</span>
              </div>
            </div>
          </div>

          {/* ===== Specialty Drinks ===== */}

          <div>
            <div className="py-2 mt-4 mx-3 md:py-8">
              <div className="text-[#392e7a] text-2xl font-akkurat">
                Specialty Drinks
              </div>
              <div className="flex-grow border-t border-[#392e7a] mt-2" />
            </div>

            <div className="py-5 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Hot Chocolate
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">
                  $3.54 / $4.16 / $5.04
                </span>
              </div>
              <span className="flex-shrink mx-3">8oz / 12oz / 16oz</span>
            </div>

            <div className="py-5 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Mocha
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">
                  $6.00 / $6.50
                </span>
              </div>
              <span className="flex-shrink mx-3">12oz / 16oz</span>
            </div>

            <div className="pt-5 pb-3 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Cherry Truffle Latte
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">$6.00</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="flex-shrink mx-3">
                  Amarena Cherry Syrup - Oat Milk - Cherry Bitters - Chocolate
                  Dusting
                </span>
                <span className="flex-shrink mx-3">12oz</span>
              </div>
            </div>

            <div className="py-5 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Gingerbread Spice Latte
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">$6.00</span>
              </div>
              <div className="flex flex-col">
                <span className="flex-shrink mx-3">
                  Housemade Gingerbread Syrup - Cinnamon
                </span>
                <span className="flex-shrink mx-3">12oz</span>
              </div>
            </div>

            {/* ===== Tea ===== */}

            <div className="py-2 mt-4 mx-3 md:py-8">
              <div className="text-[#392e7a] text-2xl font-akkurat">Tea</div>
              <div className="flex-grow border-t border-[#392e7a] mt-2" />
            </div>

            <div className="pt-5 pb-3 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Loose Leaf Tea
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">$4.00</span>
              </div>
              <div className="flex flex-col">
                <span className="flex-shrink mx-3">
                  Black - Green - Earl Grey - Mint - Chamomile
                </span>
                <span className="flex-shrink mx-3">12oz</span>
              </div>
            </div>

            <div className="py-5 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Tea Latte
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">
                  $4.70 / $5.20
                </span>
              </div>
              <span className="flex-shrink mx-3">12oz / 16oz</span>
            </div>

            <div className="py-5 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Matcha Latte
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">
                  $4.70 / $5.20
                </span>
              </div>
              <span className="flex-shrink mx-3">12oz / 16oz</span>
            </div>

            <div className="pt-5 pb-3 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Maka Hojicha Latte
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">
                  $4.70 / $5.20
                </span>
              </div>
              <div className="flex flex-col">
                <span className="flex-shrink mx-3">
                  Hojicha Green Tea with Maca Root - Simple Syrup
                </span>
                <span className="flex-shrink mx-3">12oz / 16oz</span>
              </div>
            </div>

            <div className="pt-5 pb-3 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Charcoal Citrus Latte
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">$6.00</span>
              </div>
              <div className="flex flex-col">
                <span className="flex-shrink mx-3">
                  Cascara - Sage - Thyme - Orange - Activated Charcoal Powder
                </span>
                <span className="flex-shrink mx-3">12oz</span>
              </div>
            </div>

            <div className="py-5 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Golden Spice Latte
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">
                  $4.70 / $5.05
                </span>
              </div>
              <div className="flex flex-col">
                <span className="flex-shrink mx-3">
                  Cardamom - Turmeric - Cinnamon - Ginger
                </span>
                <span className="flex-shrink mx-3">12oz / 16oz</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoffeeMenu;
