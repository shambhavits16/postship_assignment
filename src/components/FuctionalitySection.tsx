import PageTitle from "./PageTitle";
import Card from "./Card";
import { useState } from "react";

const FunctionalitySection = () => {
     const [accentColor, setAccentColor] = useState("#FF9898");
     const [textColor, setTextColor] = useState("#571010");
     const [backgroundColor, setBackgroundColor] = useState("#FFEEEA");

     return (
          <div className="px-8 py-10 pb-16 bg-white">
               <PageTitle title="Discover the Heart of Our Functionality" />

               <div className="grid grid-cols-3 gap-3 mt-8 pb-4">
                    {/* Elevate Your Brand Card */}
                    <Card
                         head="Elevate Your Brand Aesthetics with Custom Tracking Page Styles"
                         desc={
                              <>
                                   Immerse your customers in a branded experience by personalizing
                                   the colors on your tracking page.
                                   <div className="mt-4">
                                        <label className="block mb-2 text-sm">Accent Color</label>
                                        <div className="flex justify-between items-center space-x-4">
                                             <input
                                                  className="w-full p-2 border rounded-md"
                                                  value={accentColor}
                                                  onChange={(e) => setAccentColor(e.target.value)}
                                             />
                                             
                                             <div
                                                  className="w-20 h-9 rounded-lg"
                                                  style={{ backgroundColor: accentColor }}
                                             ></div>
                                        </div>
                                   </div>
                                   <div className="mt-4">
                                        <label className="block mb-2 text-sm">Text Color</label>
                                        <div className="flex justify-between items-center space-x-4">
                                             <input
                                                  className="w-full p-2 border rounded-md"
                                                  value={textColor}
                                                  onChange={(e) => setTextColor(e.target.value)}
                                             />

                                             <div
                                                  className="w-20 h-9 rounded-lg"
                                                  style={{ backgroundColor: textColor }}
                                             ></div>
                                        </div>
                                   </div>
                                   <div className="mt-4">
                                        <label className="block mb-2 text-sm">Background Color</label>
                                        <div className="flex justify-between items-center space-x-4">
                                             <input
                                                  className="w-full p-2 border rounded-md"
                                                  value={backgroundColor}
                                                  onChange={(e) => setBackgroundColor(e.target.value)}
                                             />

                                             <div
                                                  className="w-20 h-9 rounded-lg"
                                                  style={{ backgroundColor: backgroundColor }}
                                             ></div>
                                        </div>
                                   </div>
                              </>
                         }
                         primaryButton="Apply Colors"
                         secondaryButton="Preview"
                         backgroundColor="bg-white"
                         textColor="text-black"
                    />

                    <div className="grid grid-rows-2 grid-flow-col gap-y-10">
                    {/* Exclusive Onboarding Card */}
                         <Card
                         head="Exclusive Onboarding Support for High-Volume Brands"
                         desc="Unlock personalized guidance! Book a one-on-one onboarding call to streamline your experience."
                         primaryButton="Schedule A Call"
                         backgroundColor="bg-white"
                         textColor="text-black"
                    />

                    {/* Explore Our Integrated Ecosystem Card */}
                    <Card
                         head="Explore Our Integrated Ecosystem"
                         desc={
                              <>
                                   Discover a variety of popular integrations tailored for your convenience.
                                   <div className="flex space-x-6 mt-4">
                                        {/* Logos as images/icons */}
                                        <img src="/src/assets/svg/Paypal.svg" alt="PayPal" className="w-9 h-9" />
                                        <img src="/src/assets/svg/Ali reviews.svg" alt="Ali Reviews" className="w-9 h-9" />
                                        <img src="/src/assets/svg/instafeed.svg" alt="Instagram Feed" className="w-9 h-9" />
                                        <img src="/src/assets/svg/Google analytics.svg" alt="Google Analytics" className="w-9 h-9" />
                                        <img src="/src/assets/svg/Shopify flow.svg" alt="Shopify" className="w-9 h-9" />
                                   </div>
                              </>
                         }
                         primaryButton="Explore Integrations"
                         backgroundColor="bg-white"
                         textColor="text-black"
                    />
                    </div>

                    {/* Seamlessly Integrate Custom HTML Elements Card */}
                    <Card
                         head="Seamlessly Integrate Custom HTML Elements"
                         desc={
                              <>
                                   Unleash creativity with our Custom HTML feature. Add links, custom messages, or any HTML content to elevate the tracking page experience for your customers.
                                   <div className="mt-6">
                                        <label className="block mb-1 text-sm">HTML Link</label>
                                        <textarea placeholder="Value" className="w-full p-2 border border-[#8A8A8A] rounded-lg" rows={7} />
                                   </div>
                              </>
                         }
                         primaryButton="Apply Changes"
                         secondaryButton="Preview"
                         backgroundColor="bg-white"
                         textColor="text-black"
                    />
               </div>
          </div>
     );
};


export default FunctionalitySection;
