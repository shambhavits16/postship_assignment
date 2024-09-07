import { CalloutCard } from '@shopify/polaris';

export type CardProps = {
     icon?: any;
     head: string;
     desc: string;
     secondaryButton?: string;
     primaryButton: string;
     backgroundColor?: string;
     textColor?: string;
}

const Card = (props: CardProps) => {
     return (
          <div className={`${props.backgroundColor}`}>
               <CalloutCard
                    title={<div className={`${props.textColor} text-sm font-[650]`}>{props.head}</div>}
                    illustration={props.icon}
                    secondaryAction={{ content: props.secondaryButton }}
                    primaryAction={{ content: props.primaryButton }}
               >
                    <p className={`text-[#4A4A4A] text-[13px] leading-5 font-[450]`}>{props.desc}</p>
               </CalloutCard>
          </div>
     )
}

export default Card