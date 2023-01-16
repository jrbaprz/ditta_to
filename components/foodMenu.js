import React from "react";

const FoodMenu = () => {
  return (
    <>
      <div className="overflow-hidden md:mt-8">
        <div className="m-4 p-2 border-[#392e7a] border-[1px] text-sm font-akkuratlight md:p-10 lg:mx-16 xl:grid grid-cols-2 xl:mx-20 xl:p-20 xl:px-28 xl:space-x-10 2xl:mx-80 2xl:space-x-16">
          {/* ===== Pastries ===== */}

          <div>
            <div className="py-2 mt-4 mx-3 md:py-8">
              <div className="text-[#392e7a] text-2xl font-akkurat">
                Pastries
              </div>
              <div className="flex-shrink font-akkurat text-[#606060]">
                Baked Fresh Daily by Goûter
              </div>
              <div className="flex-grow border-t border-[#392e7a] mt-2" />
            </div>

            <div className="py-5 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Butter Croissant
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">$3.70</span>
              </div>
            </div>

            <div className="py-5 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Almond Croissant
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">$4.30</span>
              </div>
            </div>

            <div className="py-5 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Chocolate Croissant
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">$4.30</span>
              </div>
            </div>

            <div className="py-5 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Raspberry Croissant
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">$4.30</span>
              </div>
            </div>

            <div className="py-5 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Spinach & Feta Danish
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">$4.30</span>
              </div>
            </div>

            <div className="pt-5 pb-3 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Fruit Danish
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">$4.50</span>
              </div>
              <div className="flex flex-col">
                <span className="flex-shrink mx-3">Seasonal Fruits</span>
              </div>
            </div>

            <div className="py-5 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Apple Danish
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">$4.50</span>
              </div>
            </div>

            <div className="py-5 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Kouign-Amann
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">$4.30</span>
              </div>
            </div>

            <div className="pt-5 pb-3 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Zucchini Loaf
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">$3.55</span>
              </div>
              <div className="flex flex-col">
                <span className="flex-shrink mx-3">Gluten Free</span>
              </div>
            </div>

            <div className="pt-5 pb-3 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Chocolate Oatmeal Brownie
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">$3.55</span>
              </div>
              <div className="flex flex-col">
                <span className="flex-shrink mx-3">Vegan</span>
              </div>
            </div>

            {/* ===== Breakfast / Brunch ===== */}

            <div className="py-2 mt-8 mx-3 md:py-8">
              <div className="text-[#392e7a] text-2xl font-akkurat">
                Breakfast / Brunch
              </div>
              <div className="flex-grow border-t border-[#392e7a] mt-2" />
            </div>

            <div className="pt-5 pb-3 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Eggs Florentine
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">$16.50</span>
              </div>
              <div className="flex flex-col">
                <span className="flex-shrink mx-3">
                  English Muffin - Spinach - Poached Eggs - Hollandaise
                </span>
              </div>
            </div>

            <div className="pt-5 pb-3 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Egg Sandwich
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">$9.00</span>
              </div>
              <div className="flex flex-col">
                <span className="flex-shrink mx-3">
                  Butter Croissant - Scrambled Eggs - Arugula - Swiss Cheese -
                  Prosciutto - Garlic Aioli
                </span>
              </div>
            </div>

            <div className="pt-5 pb-3 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Ricotta Pancakes
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">$15.00</span>
              </div>
              <div className="flex flex-col">
                <span className="flex-shrink mx-3">
                  Ricotta - Whole Milk - Vanilla - Lemon Zest - Berries - Maple
                  Syrup - Fresh Whipped Cream
                </span>
              </div>
            </div>

            <div className="pt-5 pb-3 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Omelette
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">$18.00</span>
              </div>
              <div className="flex flex-col">
                <span className="flex-shrink mx-3">
                  Eggs - Mushrooms - Butter
                </span>
              </div>
            </div>

            <div className="pt-5 pb-3 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  TBLT
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">$18.00</span>
              </div>
              <div className="flex flex-col">
                <span className="flex-shrink mx-3">
                  Heirloom Tomato - Dulse Seaweed - Vegan Mayo - Toasted Panko -
                  Herb Oil
                </span>
              </div>
            </div>

            <div className="pt-5 pb-3 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Parfait
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">$5.00</span>
              </div>
              <div className="flex flex-col">
                <span className="flex-shrink mx-3">
                  Yogurt - Berries - Mint - Sweetened Oats - Maple Syrup
                </span>
              </div>
            </div>
          </div>

          {/* ===== Toasts ===== */}

          <div>
            <div className="py-2 mt-8 mx-3 md:py-8">
              <div className="text-[#392e7a] text-2xl font-akkurat">Toasts</div>
              <div className="flex-grow border-t border-[#392e7a] mt-2" />
            </div>

            <div className="pt-5 pb-3 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Avocado Toast
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">$12.00</span>
              </div>
              <div className="flex flex-col">
                <span className="flex-shrink mx-3">
                  Sourdough - Guacamole - Poached Egg - Cherry Tomatoes -
                  Arugula
                </span>
              </div>
            </div>

            <div className="pt-5 pb-3 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Salmon Avocado Toast
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">$20.00</span>
              </div>
              <div className="flex flex-col">
                <span className="flex-shrink mx-3">
                  Sourdough - Smoked Salmon - Guacamole - Pomegranate -
                  Microgreens - Dill - Cornichon
                </span>
              </div>
            </div>

            <div className="pt-5 pb-3 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Prosciutto Toast
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">$21.00</span>
              </div>
              <div className="flex flex-col">
                <span className="flex-shrink mx-3">
                  Sourdough - Prosciutto - Cream Cheese - Sage - Parsley -
                  Microgreens - Fig
                </span>
              </div>
            </div>

            <div className="pt-5 pb-3 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Ricotta Toast
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">$18.00</span>
              </div>
              <div className="flex flex-col">
                <span className="flex-shrink mx-3">
                  Sourdough - Ricotta - Arugula - Mushrooms
                </span>
              </div>
            </div>

            {/* ===== Salads ===== */}

            <div className="py-2 mt-8 mx-3 md:py-8">
              <div className="text-[#392e7a] text-2xl font-akkurat">Salads</div>
              <div className="flex-grow border-t border-[#392e7a] mt-2" />
            </div>

            <div className="pt-5 pb-3 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Kale Salad
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">$12.00</span>
              </div>
              <div className="flex flex-col">
                <span className="flex-shrink mx-3">
                  Kale - Tomatoes - Dijon Mustard - Extra Virgin Olive Oil -
                  Garlic - Zucchini
                </span>
              </div>
            </div>

            <div className="pt-5 pb-3 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Panzanella
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">$12.00</span>
              </div>
              <div className="flex flex-col">
                <span className="flex-shrink mx-3">
                  Bread - Cucumber - Zucchini - Tomatoes - Arugula - Lemon
                  Vinaigrettte
                </span>
              </div>
            </div>

            <div className="pt-5 pb-3 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  House Salad
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">$12.00</span>
              </div>
              <div className="flex flex-col">
                <span className="flex-shrink mx-3">
                  Arugula - Romaine Lettuce - Tomatoes - Cucumber - Feta - Lemon
                  Vinaigrettte
                </span>
              </div>
            </div>

            {/* ===== Sandwiches ===== */}

            <div className="py-2 mt-8 mx-3 md:py-8">
              <div className="text-[#392e7a] text-2xl font-akkurat">
                Sandwiches
              </div>
              <div className="flex-grow border-t border-[#392e7a] mt-2" />
            </div>

            <div className="pt-5 pb-3 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Muffaletta
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">$16.00</span>
              </div>
              <div className="flex flex-col">
                <span className="flex-shrink mx-3">
                  Sourdough - Roasted Turkey - Extra Virgin Olive Oil - Bomba -
                  Coppa - Mozzarella - Giardiniera - Olives
                </span>
              </div>
            </div>

            <div className="pt-5 pb-3 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Vegetable
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">$14.00</span>
              </div>
              <div className="flex flex-col">
                <span className="flex-shrink mx-3">
                  Sourdough - Lettuce - Tomatoes - Ricotta - Red Peppers -
                  Cucumber
                </span>
              </div>
            </div>

            <div className="pt-5 pb-3 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Caprese
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">$15.00</span>
              </div>
              <div className="flex flex-col">
                <span className="flex-shrink mx-3">
                  Ciabatta Bread - Tomatoes - Burrata - Basil - Arugula - Pesto
                </span>
              </div>
            </div>

            <div className="pt-5 pb-3 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Oven Roasted Turkey
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">$18.00</span>
              </div>
              <div className="flex flex-col">
                <span className="flex-shrink mx-3">
                  Grilled Artisinal Bread - Turkey - Pesto - Melted Cheese
                </span>
              </div>
            </div>

            {/* ===== Add-Ons ===== */}

            <div className="py-2 mt-8 mx-3 md:py-8 lg:py-4">
              <div className="text-[#392e7a] text-2xl font-akkurat">
                Add-Ons
              </div>
              <div className="flex-grow border-t border-[#392e7a] mt-2" />
            </div>

            <div className="pt-5 pb-3 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Hanger Steak
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">$10.00</span>
              </div>
              <div className="flex flex-col">
                <span className="flex-shrink mx-3">4oz</span>
              </div>
            </div>

            <div className="pt-5 pb-3 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Chicken Breast
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">$8.00</span>
              </div>
              <div className="flex flex-col">
                <span className="flex-shrink mx-3">6oz</span>
              </div>
            </div>

            <div className="pt-5 pb-3 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Salmon
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">$8.00</span>
              </div>
              <div className="flex flex-col">
                <span className="flex-shrink mx-3">6oz</span>
              </div>
            </div>

            <div className="pt-5 pb-3 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Turkey
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">$8.00</span>
              </div>
              <div className="flex flex-col">
                <span className="flex-shrink mx-3">6oz</span>
              </div>
            </div>

            <div className="pt-5 pb-3 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Egg
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">$3.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodMenu;
