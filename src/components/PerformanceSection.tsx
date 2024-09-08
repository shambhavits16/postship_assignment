import { useState } from "react";
import PageTitle from "./PageTitle"
import { Card } from "@shopify/polaris";
import { CalendarIcon, OrderIcon, ViewIcon } from "@shopify/polaris-icons";
import { Cell, Pie, PieChart, Tooltip } from "recharts";

const PerformanceSection = () => {
     const [selectedTab, setSelectedTab] = useState('lifetime');
     const [selectedStatus, setSelectedStatus] = useState('Delivered');

     const tabs = [
          { id: 'lifetime', content: 'Lifetime' },
          { id: 'last-week', content: 'Last Week' },
          { id: 'last-month', content: 'Last Month' },
          { id: 'last-year', content: 'Last Year' },
          {
               id: 'custom-timeline',
               content: (
                    <div className="flex items-center space-x-1">
                         <span>Customize Time Line</span>
                         <CalendarIcon className="w-4 h-4" />
                    </div>
               ),
          },
     ];

     const statusButtons = [
          { label: 'Delivered' },
          { label: 'Out for delivery' },
          { label: 'Intransit' },
          { label: 'Pending' },
          { label: 'Exception' },
     ];

     const data = [
          { name: 'Exception', value: 58, color: '#5E4200' },
          { name: 'Intransit', value: 28, color: '#956F00' },
          { name: 'Pending', value: 45, color: '#E5A500' },
          { name: 'Delivered', value: 40, color: '#FFC879' },
          { name: 'Out for delivery', value: 15, color: '#FFDDB6' },
     ];

     const COLORS = ['#5E4200', '#956F00', '#E5A500', '#FFC879', '#FFDDB6'];

     return (
          <div className='px-20 py-11 bg-[#FFF7EE]'>
               <PageTitle title="Instant Dive into Your Performance Metrics" />
               {/* Tab section */}
               {/* <Tabs tabs={tabs} selected={selectedTab} onSelect={setSelectedTab} /> */}

               <div className="flex space-x-2 overflow-x-auto mt-6">
                    {tabs.map((tab) => (
                         <button
                              key={tab.id}
                              onClick={() => setSelectedTab(tab.id)}
                              className={`py-2 px-3 rounded ${selectedTab === tab.id ? 'border-[1.5px] border-[#8051FF] bg-[#F8F7FF]' : 'bg-white'
                                   }`}
                         >
                              {tab.content}
                         </button>
                    ))}
               </div>
               
               <div className="grid grid-cols-3 gap-6 mt-8">
                    {/* Shipment Updates */}
                    <Card>
                         <div className="items-center">
                              <div className="flex justify-between items-center">
                                   <h2 className="font-[650] text-sm">Shipment Updates</h2>
                                   <p className="font-[450] text-sm">Total Orders : 394</p>
                              </div>

                              <div className="flex space-x-2 mt-4 overflow-x-scroll scrollbar-hide">
                                   {statusButtons.map((status, index) => (
                                        <button
                                             key={index}
                                             onClick={() => setSelectedStatus(status.label)}
                                             className={`py-2 px-3 text-nowrap rounded ${selectedStatus === status.label ? 'border-[1.5px] border-[#E3E3E3] bg-[#FFF1E3]' : 'bg-[#F1F1F1]'
                                                  }`}
                                        >
                                             {status.label}
                                        </button>
                                   ))}
                              </div>

                              {/* Donut chart */}
                              <div className="mt-4 flex flex-col items-center">
                                   <PieChart width={160} height={160}>
                                        <Pie
                                             data={data}
                                             dataKey="value"
                                             nameKey="name"
                                             cx="50%"
                                             cy="50%"
                                             innerRadius={30}
                                             outerRadius={80}
                                             fill="#8884d8"
                                             paddingAngle={1}
                                        >
                                             {data.map((_entry, index) => (
                                                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                             ))}
                                        </Pie>
                                        <Tooltip />
                                   </PieChart>

                                   <div className="grid grid-cols-3 gap-0 gap-y-3 mt-5 items-start">
                                        {data.map((entry, index) => (
                                             <div key={index} className="flex items-center space-x-2 text-nowrap">
                                                  <span
                                                       className="inline-block w-5 h-[10px] rounded-full"
                                                       style={{ backgroundColor: COLORS[index] }}
                                                  ></span>
                                                  <p>{entry.name}</p>
                                             </div>
                                        ))}
                                   </div>
                              </div>
                         </div>
                    </Card>
                    {/* Star Facts */}
                    <Card>
                         <div>
                              <h2 className="font-semibold text-lg">Star Facts about your orders!!!</h2>
                              <p>There are 8 shipments that have been in out for delivery for more than 3 days.</p>
                              <p>There are 5 shipments in exception right now</p>
                              <p>The maximum chargebacks are from Miami.</p>
                              <button className="mt-4 bg-black text-white py-2 px-4 rounded">Check Orders Page</button>
                         </div>
                    </Card>

                    {/* Tracking Page Views */}
                    <Card>
                         <div className="items-center">
                              <div className="flex flex-col gap-3 items-start">
                                   <h2 className="font-[650] text-sm">Tracking Page Views Vs Orders</h2>
                                   <p className="text-[13px] leading-5 font-[450]">Understand user engagement patterns and optimize your tracking page for enhanced customer experiences.</p>
                              </div>

                              <div className="mt-4 flex flex-col gap-4">
                                   <div className="flex justify-between items-center gap-2 p-4 rounded-md bg-[#FFEBD5]">
                                        <div className="flex flex-col gap-2 items-start">
                                             <p className="text-[12px] leading-4 font-[550]">Orders</p>
                                             <p className="text-4xl tracking-[-0.54px] font-bold">80</p>
                                        </div>
                                        <OrderIcon className="w-12 h-12 mr-2"/>
                                   </div>
                                   <div className="flex justify-between items-center gap-2 p-4 rounded-md bg-[#FFC879]">
                                        <div className="flex flex-col gap-2 items-start">
                                             <p className="text-[12px] leading-4 font-[550]">Tracking Page Views</p>
                                             <p className="text-4xl tracking-[-0.54px] font-bold">44</p>
                                        </div>
                                        <ViewIcon className="w-12 h-12 mr-2" />
                                   </div>
                              </div>
                         </div>
                    </Card>
               </div>
          </div>
     )
}

export default PerformanceSection