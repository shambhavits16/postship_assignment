import { Button } from "@shopify/polaris";


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
          <div className={`${props.backgroundColor} rounded-lg shadow-custom-card p-4 items-start flex flex-col h-full box-content`}>
               <div className="flex flex-col gap-2 items-start mb-4">
                    <div className="flex flex-row gap-2 items-center mb-2">
                         {props.icon && <div className="w-5 h-5">{props.icon}</div>}
                         <h3 className={`${props.textColor} text-sm font-[650]`}>{props.head}</h3>
                    </div>
                    <p className={`${props.textColor} text-[13px] font-[450] mb-4`}>{props.desc}</p>
               </div>
               <div className="flex justify-start gap-2 mt-auto mb-2">
                    {props.secondaryButton && (
                         <Button textAlign="start" size="slim">
                              {props.secondaryButton}
                         </Button>
                    )}
                    <Button textAlign="start" size="slim" variant="primary">
                         {props.primaryButton}
                    </Button>
               </div>
          </div>
     )
}

export default Card
