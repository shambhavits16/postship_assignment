import { AlertCircleIcon, AlertTriangleIcon } from '@shopify/polaris-icons';
import Card, { CardProps } from './Card';
import PageTitle from './PageTitle';

const CardData: CardProps[] = [
     {
          head: "Order Sync Successful!",
          desc: "Your order details from the last 30 days have been successfully synced. Check them out now!",
          primaryButton: "Explore Your Orders",
          backgroundColor: "bg-white",
          textColor: "text-[#4A4A4A]"
     },
     {
          icon: <AlertTriangleIcon className='w-5 h-5'/>,
          head: "Customize Customer Notification",
          desc: "Tailor Your Email Experience: Set the Sender Email and Choose Notification Triggers",
          primaryButton: "Configure Notifications",
          backgroundColor: "bg-[#FFF8DB]",
          textColor: "text-[#5E4200]"
     },
     {
          icon: <AlertCircleIcon className='w-5 h-5'/>,
          head: "Your Tracking Link has been generated",
          desc: "Include the Link to Your Store's Navigation Menu.",
          primaryButton: "Go To Navigation Menu",
          secondaryButton: "Copy Link",
          backgroundColor: "bg-[#EAF4FF]",
          textColor: "text-[#4A4A4A]"
     },
];

const HeroSection = () => {
     return (
          <div className='px-20 py-11'>
               <PageTitle title='Welcome, John Mathew!!'/>
               <section className='grid grid-cols-3 gap-4 py-6'>
                    {CardData.map((data, i) => (
                         <div key={i} className="h-[168px]">
                              <Card
                                   icon={data.icon}
                                   head={data.head}
                                   desc={data.desc}
                                   secondaryButton={data.secondaryButton}
                                   primaryButton={data.primaryButton}
                                   backgroundColor={data.backgroundColor}
                                   textColor={data.textColor}
                              />
                         </div>
                    ))}
               </section>
          </div>
     )
}

export default HeroSection