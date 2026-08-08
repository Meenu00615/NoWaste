"use client";
import { Mea_Culpa } from "next/font/google";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const meaCulpa = Mea_Culpa({
  weight: "400",
  subsets: ["latin"],
});

export default function Hero() {
  return (
    <div>
      <Navbar />

      <section className="bg-[url('/images/home-3.jpg')] bg-cover bg-center h-screen flex items-end justify-center text-center px-2 sm:px-10">
        <div className="p-3 bg-opacity-90">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mb-6 text-sm sm:mb-4 sm:text-xl"
          >
            Save your Present and Future -
          </motion.p>
        </div>
      </section>

      <section id="food-management" className="px-4 py-8 bg-white sm:px-6 md:px-12 sm:py-12 md:py-16">
        <div className="mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-8 text-2xl font-light tracking-wider text-center sm:mb-12 md:mb-16 sm:text-3xl md:text-4xl"
          >
            Food Waste Management
          </motion.h2>

          <div className="grid grid-cols-1 gap-8 place-items-center sm:grid-cols-2 sm:gap-10 lg:grid-cols-4 md:gap-15">
            {[
              { img: "/images/Section3/Food-storing.jpg", title: "Storing chopped food in fridge" },
              { img: "/images/Section3/food-compost.jpg", title: "Food Composting" },
              { img: "/images/Section3/Storing-cooked-food.jpg", title: "Storing cooked food" },
              { img: "/images/Section3/Food-fridging-2.jpg", title: "Storing Groceries" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.1
                }}
                className="group w-full max-w-[400px]"
              >
                <div className="mx-auto mb-3 overflow-hidden aspect-[3/4] h-[300px] sm:mb-4 sm:h-[350px] md:h-[380px]">
                  <img 
                    src={item.img} 
                    alt={item.title}
                    className="object-cover w-full h-full transition duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="mb-2 text-base font-medium text-center sm:mb-3 sm:text-lg">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-2 py-4 bg-white sm:px-4 md:px-12 sm:py-6">
        <div className="max-w-6xl mx-auto">
          <div className="mx-auto max-w-7xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-8 text-2xl font-light tracking-wider text-center sm:mb-12 md:mb-16 sm:text-3xl md:text-4xl"
            >
              Food Donation Community          
            </motion.h2>

            <div className="flex flex-col space-y-4 md:grid md:grid-cols-2 sm:gap-6 md:space-y-0">
              {[
                { img: "/images/Collection/food-donation-2.jpg", title: "Think before you throw" },
                { img: "/images/Collection/Food_donation.jpg", title: "Food donation" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    duration: 0.8,
                    delay: index * 0.2
                  }}
                  className="relative w-full overflow-hidden bg-gray-100 shadow-xl group"
                >
                  <div className="w-full aspect-[3/4] h-[400px] sm:h-[600px] md:h-[800px] overflow-hidden">
                    <img 
                      src={item.img} 
                      alt={item.title}
                      className="object-cover w-full h-full transition duration-700 group-hover:scale-110"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 bg-white sm:py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 text-2xl font-light tracking-wider text-center sm:mb-12 md:mb-16 sm:text-3xl md:text-4xl"
          >
            COMMUNITY FOOD COLLECTION     
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 gap-7 sm:grid-cols-4"
          >
            <div className="flex flex-col">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="relative group"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img 
                    src="/images/Community/f-v-donation.jpg" 
                    alt="Book an appointment"
                    className="object-cover w-full h-full"
                  />
                </div>
              </motion.div>
              <h5 className="mt-2 tracking-wider text-center font-sm medium text- sm:text-xl">
                BOOK AN APPOINTMENT
              </h5>
            </div>

            <div className="flex flex-col">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="relative group"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img 
                    src="/images/Community/container-selling.jpg" 
                    alt="Book an appointment"
                    className="object-cover w-full h-full"
                  />
                </div>
              </motion.div>
              <h5 className="mt-2 tracking-wider text-center font-sm medium text- sm:text-xl">
                STORING AND SELLING FOOD OF CONTAINERS        
              </h5>
            </div>

            <div className="flex flex-col">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="relative group"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src="/images/Community/Food-store-mall.jpg"
                    alt="Collect in store"
                    className="object-cover w-full h-full transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 transition-all duration-500 bg-black/20 group-hover:bg-black/10"></div>
                </div>
              </motion.div>
              <h5 className="mt-4 tracking-wider text-center font-sm medium text- sm:text-xl">
                COLLECT IN STORE
              </h5>
            </div>

            <div className="flex flex-col">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="relative group"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img 
                    src="/images/Community/food-donation-3.jpg" 
                    alt="CONTACT COMMUNITY"
                    className="object-cover w-full h-full"
                  />
                </div>
              </motion.div>
              <h5 className="mt-2 tracking-wider text-center font-sm medium text- sm:text-xl">
                Donation        
              </h5>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Global Food Waste Management Table Section */}
      <section className="px-4 py-12 bg-gray-50 sm:py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-8 text-2xl font-light tracking-wider text-center sm:mb-12 md:mb-16 sm:text-3xl md:text-4xl"
          >
            Global Food Waste Management Initiatives
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="overflow-x-auto shadow-lg rounded-xl"
          >
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-green-700">
                <tr>
                  <th className="px-4 py-4 text-sm font-semibold text-white border-b sm:px-6 md:px-8 sm:text-base">
                    Country
                  </th>
                  <th className="px-4 py-4 text-sm font-semibold text-white border-b sm:px-6 md:px-8 sm:text-base">
                    Key Measures & Steps in 2026
                  </th>
                  <th className="px-4 py-4 text-sm font-semibold text-white border-b sm:px-6 md:px-8 sm:text-base">
                    Context & Notes
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Estonia */}
                <motion.tr
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="hover:bg-gray-50"
                >
                  <td className="px-4 py-4 text-sm font-medium border-b sm:px-6 md:px-8 sm:text-base">
                    Estonia
                  </td>
                  <td className="px-4 py-4 text-sm border-b sm:px-6 md:px-8 sm:text-base">
                    <strong>New Legislation (2026):</strong> Preparing a draft amendment to the Waste Act to establish an Extended Producer Responsibility (EPR) system for food producers. This will require them to finance collection, recycling, and waste reduction. Large retailers must measure waste and cooperate with food redistribution organizations.
                  </td>
                  <td className="px-4 py-4 text-sm border-b sm:px-6 md:px-8 sm:text-base">
                    The policy sets a national target to reduce food waste from ~180,000 tons (2021-2023 average) to ~155,000 tons by 2030.
                  </td>
                </motion.tr>

                {/* South Korea */}
                <motion.tr
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="hover:bg-gray-50"
                >
                  <td className="px-4 py-4 text-sm font-medium border-b sm:px-6 md:px-8 sm:text-base">
                    South Korea
                  </td>
                  <td className="px-4 py-4 text-sm border-b sm:px-6 md:px-8 sm:text-base">
                    <strong>Mandatory Systems:</strong> Maintains a mandatory "Pay-As-You-Throw" (PAYT) scheme using RFID-equipped smart bins to track waste and charge households accordingly. The system incentivizes waste reduction and penalizes non-compliance.
                  </td>
                  <td className="px-4 py-4 text-sm border-b sm:px-6 md:px-8 sm:text-base">
                    Successfully banned landfilling of food waste and replaced "sell-by" with "use-by" dates to reduce confusion and waste.
                  </td>
                </motion.tr>

                {/* Japan */}
                <motion.tr
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="hover:bg-gray-50"
                >
                  <td className="px-4 py-4 text-sm font-medium border-b sm:px-6 md:px-8 sm:text-base">
                    Japan
                  </td>
                  <td className="px-4 py-4 text-sm border-b sm:px-6 md:px-8 sm:text-base">
                    <strong>Awareness & Stickers:</strong> Uses campaigns like 'don't buy too much' and 'don't make too much' to raise awareness. A novel approach is the "namidame" (teary-eyed) sticker on food near expiration, asking shoppers to "rescue" it. This is now a nationwide scheme by convenience store chain FamilyMart.
                  </td>
                  <td className="px-4 py-4 text-sm border-b sm:px-6 md:px-8 sm:text-base">
                    Aims to reduce food loss and waste from 9.8 million tons (2000) to 4.35 million tons by 2030. The country conducts annual household surveys to evaluate the impact of its policies.
                  </td>
                </motion.tr>

                {/* China */}
                <motion.tr
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="hover:bg-gray-50"
                >
                  <td className="px-4 py-4 text-sm font-medium border-b sm:px-6 md:px-8 sm:text-base">
                    China
                  </td>
                  <td className="px-4 py-4 text-sm border-b sm:px-6 md:px-8 sm:text-base">
                    <strong>"Clear Your Plate" Campaign:</strong> Enforces an anti-food waste law requiring restaurants to remind customers not to over-order and allowing them to charge a disposal fee for excessive leftovers. The campaign has reportedly helped cut kitchen waste in half in Shanghai.
                  </td>
                  <td className="px-4 py-4 text-sm border-b sm:px-6 md:px-8 sm:text-base">
                    This combines legal measures with public campaigns rooted in traditional respect for food, though it also challenges cultural norms of abundant hospitality.
                  </td>
                </motion.tr>

                {/* France */}
                <motion.tr
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="hover:bg-gray-50"
                >
                  <td className="px-4 py-4 text-sm font-medium border-b sm:px-6 md:px-8 sm:text-base">
                    France
                  </td>
                  <td className="px-4 py-4 text-sm border-b sm:px-6 md:px-8 sm:text-base">
                    <strong>Donation Legislation:</strong> Has established laws that make it easier for supermarkets to donate unsold, edible food to charities rather than sending it to landfills.
                  </td>
                  <td className="px-4 py-4 text-sm border-b sm:px-6 md:px-8 sm:text-base">
                    This model is often cited as a successful example for other countries to adopt, redirecting millions of meals to those in need.
                  </td>
                </motion.tr>

                {/* Singapore */}
                <motion.tr
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="hover:bg-gray-50"
                >
                  <td className="px-4 py-4 text-sm font-medium border-b sm:px-6 md:px-8 sm:text-base">
                    Singapore
                  </td>
                  <td className="px-4 py-4 text-sm border-b sm:px-6 md:px-8 sm:text-base">
                    <strong>Good Samaritan Law (2024):</strong> Adopted the Good Samaritan Food Donation Bill, which protects food donors from criminal and civil liability, provided they meet certain conditions. This encourages more food donations.
                  </td>
                  <td className="px-4 py-4 text-sm border-b sm:px-6 md:px-8 sm:text-base">
                    Part of a broader "Zero Waste Nation" master plan aiming for a 70% overall recycling rate by 2030.
                  </td>
                </motion.tr>

                {/* Qatar */}
                <motion.tr
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="hover:bg-gray-50"
                >
                  <td className="px-4 py-4 text-sm font-medium border-b sm:px-6 md:px-8 sm:text-base">
                    Qatar
                  </td>
                  <td className="px-4 py-4 text-sm border-b sm:px-6 md:px-8 sm:text-base">
                    <strong>National Project (2026):</strong> Implementing a national project in collaboration with the FAO and UNEP to establish a baseline for food loss and waste indicators.
                  </td>
                  <td className="px-4 py-4 text-sm border-b sm:px-6 md:px-8 sm:text-base">
                    This project is a key part of the National Food Security Strategy 2030 and aims to provide accurate data to guide policies and track progress.
                  </td>
                </motion.tr>
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>
     <section className="px-4 py-12 bg-white sm:py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="mb-8 text-center sm:mb-12 md:mb-16"
>
  <h2 className="mb-2 text-2xl font-light tracking-wider sm:text-3xl md:text-4xl">
    DUSTBINS
  </h2>
  <p className="max-w-2xl mx-auto text-[10px] text-gray-500 sm:text-xs md:text-lg">
    Please follow the dustbin guidelines displayed on the signs. Separate your waste correctly — 
    green for organic, blue for recyclable, and yellow/red for hazardous materials.
  </p>
</motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 gap-7 sm:grid-cols-3"
          >
            <div className="flex flex-col">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="relative group"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img 
                    src="/images/environment/bin2.jpg" 
                    className="object-cover w-full h-full"
                  />
                </div>
              </motion.div>
              <h5 className="mt-2 tracking-wider text-center font-sm medium text- sm:text-xl">
              </h5>
            </div>

            <div className="flex flex-col">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="relative group"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img 
                    src="/images/environment/bins3.jpg" 
                    className="object-cover w-full h-full"
                  />
                </div>
              </motion.div>
              <h5 className="mt-2 tracking-wider text-center font-sm medium text- sm:text-xl">
              </h5>
            </div>

            <div className="flex flex-col">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="relative group"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img 
                    src="/images/environment/bins4.jpg" 
                    className="object-cover w-full h-full"
                  />
                </div>
              </motion.div>
              <h5 className="mt-2 tracking-wider text-center font-sm medium text- sm:text-xl">
              </h5>
            </div>
          </motion.div>
        </div>
      </section>


{/* Environment Section */}
<section id="environment" className="px-4 py-12 bg-white sm:px-6 md:px-12 sm:py-16 md:py-24">
 {/* Environment Section - Enhanced with More Grids and Image Sections */}
  <div className="mx-auto max-w-7xl">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mb-8 text-2xl font-light tracking-wider text-center sm:mb-12 md:mb-16 sm:text-3xl md:text-4xl"
    >
      Protecting Our Environment
    </motion.h2>
    {/* Image with Text - Section 1 (Left Image) */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="grid items-center grid-cols-1 gap-8 mb-16 md:grid-cols-2 md:gap-12"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="overflow-hidden rounded-lg shadow-xl"
      >
        <img
          src="/images/environment/Waste-management-process.jpg"
          alt="Waste Management Process"
          className="object-cover w-full h-[300px] sm:h-[400px] transition duration-500 hover:scale-105"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="space-y-4"
      >
        <h3 className="text-2xl font-light tracking-wider sm:text-3xl">
          Waste Management Process
        </h3>
        <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
          Implementing efficient waste management processes to reduce environmental impact. 
          From collection to recycling, every step is optimized for sustainability.
        </p>
      </motion.div>
    </motion.div>

    {/* Image with Text - Section 2 (Right Image) */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="grid items-center grid-cols-1 gap-8 mb-16 md:grid-cols-2 md:gap-12"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="order-2 space-y-4 md:order-1"
      >
        <h3 className="text-2xl font-light tracking-wider sm:text-3xl">
          Waste Sorting & Recycling
        </h3>
        <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
          Proper waste sorting is crucial for effective recycling. By separating organic, 
          recyclable, and non-recyclable waste, we can significantly reduce landfill waste.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="order-1 overflow-hidden rounded-lg shadow-xl md:order-2"
      >
        <img
          src="/images/environment/waste-sorting.jpg"
          alt="Waste Sorting"
          className="object-cover w-full h-[300px] sm:h-[400px] transition duration-500 hover:scale-105"
        />
      </motion.div>
    </motion.div>

    {/* Grid Section 1 - 4 Column Grid */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="mb-16"
    >
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8 text-xl font-light tracking-wider text-center sm:text-2xl md:text-3xl"
      >
        Sustainable Practices
      </motion.h3>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            img: "/images/environment/food-compost.jpg",
            title: "Composting",
            desc: "Converting organic waste into nutrient-rich soil"
          },
          {
            img: "/images/environment/solar-energy.jpg",
            title: "Solar Energy",
            desc: "Harnessing renewable energy from the sun"
          },
          {
            img: "/images/environment/water-conservation.jpg",
            title: "Water Conservation",
            desc: "Preserving water resources for future generations"
          },
          {
            img: "/images/environment/tree-planting.jpg",
            title: "Tree Planting",
            desc: "Reforesting to combat climate change"
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="overflow-hidden bg-white rounded-lg shadow-lg group hover:shadow-xl"
          >
            <div className="overflow-hidden h-[250px]">
              <img
                src={item.img}
                alt={item.title}
                className="object-cover w-full h-full transition duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-4 text-center">
              <h4 className="mb-2 text-lg font-medium">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* Full Width Image with Text Overlay */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative mb-16 overflow-hidden rounded-lg"
    >
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px]">
        <img
          src="/images/environment/eco-friendly.png"
          alt="Eco-Friendly Living"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center px-4 text-center text-white">
          <div>
            <h3 className="mb-3 text-2xl font-light tracking-wider sm:text-3xl md:text-4xl">
              Eco-Friendly Living
            </h3>
            <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
              Small changes in our daily habits can make a big difference for the environment. 
              Choose sustainable options and reduce your carbon footprint.
            </p>
          </div>
        </div>
      </div>
    </motion.div>

    {/* Image with Text - Section 3 (Left Image) */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="grid items-center grid-cols-1 gap-8 mb-16 md:grid-cols-2 md:gap-12"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="overflow-hidden rounded-lg shadow-xl"
      >
        <img
          src="/images/environment/plastic-reduction.jpg"
          alt="Plastic Reduction"
          className="object-cover w-full h-[300px] sm:h-[400px] transition duration-500 hover:scale-105"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="space-y-4"
      >
        <h3 className="text-2xl font-light tracking-wider sm:text-3xl">
          Reduce Plastic Usage
        </h3>
        <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
          Switching to reusable alternatives and reducing single-use plastics is essential 
          for protecting marine life and reducing environmental pollution.
        </p>
      </motion.div>
    </motion.div>

    {/* Grid Section 2 - 3 Column Grid */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="mb-16"
    >
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8 text-xl font-light tracking-wider text-center sm:text-2xl md:text-3xl"
      >
        Green Initiatives
      </motion.h3>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            img: "/images/environment/community-cleanup.jpg",
            title: "Community Cleanup",
            desc: "Organizing local cleanup drives to keep our neighborhoods clean"
          },
          {
            img: "/images/environment/recycling-center.jpg",
            title: "Recycling Centers",
            desc: "Establishing accessible recycling facilities for proper waste disposal"
          },
          {
            img: "/images/environment/green-energy.jpg",
            title: "Green Energy",
            desc: "Investing in renewable energy sources for sustainable power"
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative overflow-hidden rounded-lg shadow-lg group"
          >
            <div className="overflow-hidden h-[300px]">
              <img
                src={item.img}
                alt={item.title}
                className="object-cover w-full h-full transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h4 className="mb-2 text-xl font-medium">{item.title}</h4>
              <p className="text-sm opacity-90">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* Image with Text - Section 4 (Right Image) */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="grid items-center grid-cols-1 gap-8 mb-16 md:grid-cols-2 md:gap-12"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="order-2 space-y-4 md:order-1"
      >
        <h3 className="text-2xl font-light tracking-wider sm:text-3xl">
          Carbon Footprint Reduction
        </h3>
        <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
          Measuring and reducing our carbon footprint through energy efficiency, 
          sustainable transportation, and responsible consumption.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="order-1 overflow-hidden rounded-lg shadow-xl md:order-2"
      >
        <img
          src="/images/environment/carbon-reduction.jpg"
          alt="Carbon Footprint"
          className="object-cover w-full h-[50px] sm:h-[500px] transition duration-500 hover:scale-105"
        />
      </motion.div>
    </motion.div>

    {/* Grid Section 3 - 2 Column Grid with Stats */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="mb-16"
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {[
          {
            img: "/images/environment/forest-conservation.jpg",
            title: "Forest Conservation",
            desc: "Protecting forests to preserve biodiversity and combat climate change",
            stat: "30%",
            statLabel: "of land area"
          },
          {
            img: "/images/environment/ocean-protection.jpg",
            title: "Ocean Protection",
            desc: "Reducing marine pollution and protecting ocean ecosystems",
            stat: "70%",
            statLabel: "of Earth's surface"
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="overflow-hidden bg-white rounded-lg shadow-xl"
          >
            <div className="relative h-[330px] overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="object-cover w-full h-full transition duration-500 hover:scale-105"
              />
              <div className="absolute px-4 py-2 text-white bg-green-600 rounded-full top-4 right-4">
                <span className="text-2xl font-bold">{item.stat}</span>
                <span className="ml-1 text-sm">{item.statLabel}</span>
              </div>
            </div>
            <div className="p-6">
              <h4 className="mb-2 text-xl font-medium">{item.title}</h4>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* Final Full Width Image with Text Overlay */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden rounded-lg"
    >
      <div className="relative h-[500px] sm:h-[500px] md:h-[600px]">
        <img
          src="/images/environment/Nature.jpg"
          alt="Sustainable Future"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 flex items-center justify-center px-4 text-center text-white">
          <div>
            <h3 className="mb-4 text-3xl font-light tracking-wider sm:text-4xl md:text-5xl">
              Building a Sustainable Future
            </h3>
            <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg">
              Together, we can create a world where economic growth and environmental protection go hand in hand. 
              Join the movement towards a cleaner, greener, and more sustainable future for everyone.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
</section>
    </div>
  );
}
