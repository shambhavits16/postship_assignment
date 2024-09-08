import PageTitle from "./PageTitle";
import Card from "./Card"; // Import the reusable Card component
import { useState } from "react";

const FunctionalitySection = () => {
     const [accentColor, setAccentColor] = useState("#FF9898");
     const [textColor, setTextColor] = useState("#571010");
     const [backgroundColor, setBackgroundColor] = useState("#FFEEEA");

     return (
          <div className="px-20 py-11 bg-[#FFF7EE]">
               <PageTitle title="Discover the Heart of Our Functionality" />

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                    {/* Elevate Your Brand Card */}
                    <Card
                         head="Elevate Your Brand Aesthetics with Custom Tracking Page Styles"
                         desc={
                              <>
                                   Immerse your customers in a branded experience by personalizing
                                   the colors on your tracking page.
                                   <div className="mt-4">
                                        <label className="block mb-2">Accent Color</label>
                                        <input
                                             className="w-full p-2 border rounded"
                                             value={accentColor}
                                             onChange={(e) => setAccentColor(e.target.value)}
                                        />
                                   </div>
                                   <div className="mt-4">
                                        <label className="block mb-2">Text Color</label>
                                        <input
                                             className="w-full p-2 border rounded"
                                             value={textColor}
                                             onChange={(e) => setTextColor(e.target.value)}
                                        />
                                   </div>
                                   <div className="mt-4">
                                        <label className="block mb-2">Background Color</label>
                                        <input
                                             className="w-full p-2 border rounded"
                                             value={backgroundColor}
                                             onChange={(e) => setBackgroundColor(e.target.value)}
                                        />
                                   </div>
                              </>
                         }
                         primaryButton="Apply Colors"
                         secondaryButton="Preview"
                         backgroundColor="bg-white"
                         textColor="text-black"
                    />

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
                                   <div className="flex space-x-2 mt-4">
                                        {/* Logos as images/icons */}
                                        <img src="/path/to/paypal-logo.png" alt="PayPal" className="w-8 h-8" />
                                        <img src="/path/to/shopify-logo.png" alt="Shopify" className="w-8 h-8" />
                                   </div>
                              </>
                         }
                         primaryButton="Explore Integrations"
                         backgroundColor="bg-white"
                         textColor="text-black"
                    />

                    {/* Seamlessly Integrate Custom HTML Elements Card */}
                    <Card
                         head="Seamlessly Integrate Custom HTML Elements"
                         desc={
                              <>
                                   Unleash creativity with our Custom HTML feature. Add links, custom
                                   messages, or any HTML content to elevate the tracking page experience for
                                   your customers.
                                   <div className="mt-4">
                                        <label className="block mb-2">HTML Link</label>
                                        <textarea className="w-full p-2 border rounded" rows={4} />
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
