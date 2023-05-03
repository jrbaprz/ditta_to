import React from "react";

const FoodMenu = () => {
  return (
    <>
      <div className="overflow-hidden md:mt-8">
        <div className="p-2 border-[#392e7a] border-[1px] text-sm font-akkuratlight md:p-10 lg:mx-16 xl:grid grid-cols-2 xl:mx-20 xl:p-20 xl:px-28 xl:space-x-10 2xl:mx-80 2xl:space-x-16">
          <div>
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
                  Prosciutto Egg Sandwich
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">$9</span>
              </div>
              <div className="flex flex-col">
                <span className="flex-shrink mx-3">
                  Butter Croissant - Scrambled Eggs - Prosciutto - Arugula -
                  Pecorino
                </span>
              </div>
            </div>

            <div className="pt-5 pb-3 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Eggs Florentine
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">$18.50</span>
              </div>
              <div className="flex flex-col">
                <span className="flex-shrink mx-3">
                  Focaccia - Pached Eggs - Spinach - Prosciutto - Tomato -
                  Hollandaise - Basil
                </span>
              </div>
            </div>

            <div className="pt-5 pb-3 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Omelette
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">$15</span>
              </div>
              <div className="flex flex-col">
                <span className="flex-shrink mx-3">
                  Mushrooms - Wilted Spinach
                </span>
              </div>
            </div>

            <div className="pt-5 pb-3 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Eggs Campania
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">$18.50</span>
              </div>
              <div className="flex flex-col">
                <span className="flex-shrink mx-3">
                  Tomato Sauce - Poached Eggs - Goat Cheese - Artichokes -
                  Pickled Mushroom - Gremolata - Grilled Focaccia
                </span>
              </div>
            </div>

            <div className="pt-5 pb-3 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Stuffed Portobello
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">$17.50</span>
              </div>
              <div className="flex flex-col">
                <span className="flex-shrink mx-3">
                  Roasted Pepper Sauce - Spinach - Fig Goat Cheese - Lemon Zest
                </span>
              </div>
            </div>

            {/* ===== Toasts ===== */}

            <div>
              <div className="py-2 mt-8 mx-3 md:py-8">
                <div className="text-[#392e7a] text-2xl font-akkurat">
                  Toasts
                </div>
                <div className="flex-grow border-t border-[#392e7a] mt-2" />
              </div>

              <div className="pt-5 pb-3 text-[#606060]">
                <div className="relative flex items-center">
                  <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                    Avocado Toast
                  </span>
                  <div className="flex-grow border-t border-gray-300"></div>
                  <span className="flex-shrink mx-3 font-akkurat">$12</span>
                </div>
                <div className="flex flex-col">
                  <span className="flex-shrink mx-3">
                    Avocado Two Ways - Pomegranate - Heirloom Tomatoes - Radish
                    - Poached Eggs
                  </span>
                </div>
              </div>

              <div className="pt-5 pb-3 text-[#606060]">
                <div className="relative flex items-center">
                  <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                    Salmon Toast
                  </span>
                  <div className="flex-grow border-t border-gray-300"></div>
                  <span className="flex-shrink mx-3 font-akkurat">$16</span>
                </div>
                <div className="flex flex-col">
                  <span className="flex-shrink mx-3">
                    Lemon Caper Cream Cheese - Salmon Gravlax - Gremolata -
                    Pickled Onion - Cucumber - Bagel Seasoning & Herb Oil
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-5 pb-3 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Prosciutto Toast
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">$18</span>
              </div>
              <div className="flex flex-col">
                <span className="flex-shrink mx-3">
                  Ricotta Cheese - Figs - Prosciutto - Wine Reduction
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
                <span className="flex-shrink mx-3 font-akkurat">$15</span>
              </div>
              <div className="flex flex-col">
                <span className="flex-shrink mx-3">
                  Focaccia - Bomba - Giardiniera - Turkey - Coppa - Provolone
                </span>
              </div>
            </div>

            <div className="pt-5 pb-3 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Buratta
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">$20</span>
              </div>
              <div className="flex flex-col">
                <span className="flex-shrink mx-3">
                  Tomatoes - Marinated Tomatoes - Zucchini - Basil - Sourdough
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
                  Steak Sandwich
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">$16</span>
              </div>
              <div className="flex flex-col">
                <span className="flex-shrink mx-3">
                  Focaccia - Striploin - Aioli - Sautéed Mushrooms
                </span>
              </div>
            </div>

            <div className="pt-5 pb-3 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Vegetarian Sandwich
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">$16</span>
              </div>
              <div className="flex flex-col">
                <span className="flex-shrink mx-3">
                  Roasted Red Peppers - Grilled Zucchini - Arugula - Mushrooms
                </span>
              </div>
            </div>

            {/* ===== Pastries ===== */}
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
                  Cheese Croissant
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">$4.30</span>
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

            {/* ===== COLUMN 1 END ===== */}
          </div>

          {/* ===== COLUMN 2 ===== */}
          <div>
            {/* ===== Antipasto ===== */}

            <div className="py-2 mt-8 mx-3 md:py-8">
              <div className="text-[#392e7a] text-2xl font-akkurat">
                Antipasto
              </div>
              <div className="flex-grow border-t border-[#392e7a] mt-2" />
            </div>

            <div className="pt-5 pb-3 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Marinated Olives
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">$8</span>
              </div>
              <div className="flex flex-col">
                <span className="flex-shrink mx-3">
                  Warm Mixed Olives in House Marinade
                </span>
              </div>
            </div>

            <div className="pt-5 pb-3 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Arancini
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">$12.50</span>
              </div>
              <div className="flex flex-col">
                <span className="flex-shrink mx-3">
                  Ratatouille - Zucchini Cream - Fennel Salad - Shaved Parmesan
                </span>
              </div>
            </div>

            <div className="pt-5 pb-3 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Melanzane
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">$12.50</span>
              </div>
              <div className="flex flex-col">
                <span className="flex-shrink mx-3">
                  Japanese Eggplant - Tomato Sugo - Mozzarella
                </span>
              </div>
            </div>

            <div className="pt-5 pb-3 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Carpaccio
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">$24</span>
              </div>
              <div className="flex flex-col">
                <span className="flex-shrink mx-3">
                  Ontario Beef - Pistachios - Shaved Parmesan - Pickled
                  Mushrooms - Chervil - Truffle Vinaigrette - Wine Reduction
                </span>
              </div>
            </div>

            <div className="pt-5 pb-3 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Stuffed Portobello
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">$17.50</span>
              </div>
              <div className="flex flex-col">
                <span className="flex-shrink mx-3">
                  Roasted Pepper Sauce - Spinach - Fig Goat Cheese - Lemon Zest
                </span>
              </div>
            </div>

            <div className="pt-5 pb-3 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Calamari
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">$19.50</span>
              </div>
              <div className="flex flex-col">
                <span className="flex-shrink mx-3">
                  White Bean Ragu - Radicchio - Confit Cherry Tomatoes - Arugula
                </span>
              </div>
            </div>

            <div className="pt-5 pb-3 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Crudo
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">$22.50</span>
              </div>
              <div className="flex flex-col">
                <span className="flex-shrink mx-3">
                  Tuna - Yuzu - Raddish - Dehydrated Kalamata Olives
                </span>
              </div>
            </div>

            {/* ===== SALADS ===== */}

            <div className="py-2 mt-8 mx-3 md:py-8">
              <div className="text-[#392e7a] text-2xl font-akkurat">Salads</div>
              <div className="flex-grow border-t border-[#392e7a] mt-2" />
            </div>

            <div className="pt-5 pb-3 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Burrata
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">$20</span>
              </div>
              <div className="flex flex-col">
                <span className="flex-shrink mx-3">
                  Tomatoes - Blood Orange - Enduja - Basil - Pine Nuts - Grilled
                  Lemon Wedge - Sourdough Toast
                </span>
              </div>
            </div>

            <div className="pt-5 pb-3 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Kale Salad
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">$18</span>
              </div>
              <div className="flex flex-col">
                <span className="flex-shrink mx-3">
                  Kale - Bell Peppers - Cucumber - Almonds - Squash - Citrus
                  Vinaigrette
                </span>
              </div>
            </div>

            <div className="pt-5 pb-3 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Mista Salad
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">$15</span>
              </div>
              <div className="flex flex-col">
                <span className="flex-shrink mx-3">
                  Chickpea Purée - Grilled Zucchini - Raddish - Mixed Greens -
                  Fried Shallots - House Dressing
                </span>
              </div>
            </div>

            {/* ===== PASTA ===== */}

            <div className="py-2 mt-8 mx-3 md:py-8">
              <div className="text-[#392e7a] text-2xl font-akkurat">Pasta</div>
              <div className="flex-grow border-t border-[#392e7a] mt-2" />
            </div>

            <div className="pt-5 pb-3 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Gnocchi
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">$19.50</span>
              </div>
              <div className="flex flex-col">
                <span className="flex-shrink mx-3">
                  Confit Garlic Cream - Corn - Red Peppers - Mushrroms - Shaved
                  Parm
                </span>
              </div>
            </div>

            {/* ===== MEAT ===== */}

            <div className="py-2 mt-8 mx-3 md:py-8">
              <div className="text-[#392e7a] text-2xl font-akkurat">Meat</div>
              <div className="flex-grow border-t border-[#392e7a] mt-2" />
            </div>

            <div className="pt-5 pb-3 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Steak
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">$28.95</span>
              </div>
              <div className="flex flex-col">
                <span className="flex-shrink mx-3">
                  Ontario Dry Aged 11 oz Striploin
                </span>

                <span className="flex-shrink mx-3 mt-1 italic">
                  Add: $8 Mushrooms / $12 Grilled vegetables
                </span>
              </div>
            </div>

            {/* ===== DOLCE ===== */}

            <div className="py-2 mt-8 mx-3 md:py-8">
              <div className="text-[#392e7a] text-2xl font-akkurat">Dolce</div>
              <div className="flex-grow border-t border-[#392e7a] mt-2" />
            </div>

            <div className="pt-5 pb-3 text-[#606060]">
              <div className="relative flex items-center">
                <span className="flex-shrink mx-3 text-xl text-[#392e7a] font-akkurat">
                  Lemon Olive Oil Cake
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-3 font-akkurat">$12</span>
              </div>
              <div className="flex flex-col">
                <span className="flex-shrink mx-3">
                  Berry Compote - Icing Sugar - Candied Orange
                </span>
              </div>
            </div>

            {/* ===== END OF COLUMN 2 ===== */}
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodMenu;
