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
          <div className={`${props.backgroundColor} rounded-lg shadow-md p-6 flex flex-col`}>
               <div className="flex items-start mb-4">
                    {props.icon && <div className="mr-4">{props.icon}</div>}
                    <div>
                         <h3 className={`${props.textColor} text-lg font-semibold mb-2`}>{props.head}</h3>
                         <p className={`${props.textColor} text-sm mb-4`}>{props.desc}</p>
                    </div>
               </div>
               <div className="flex justify-start mt-auto">
                    {props.secondaryButton && (
                         <Button textAlign="start" size="slim">
                              {props.secondaryButton}
                         </Button>
                    )}
                    <button
                         className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md"
                    >
                         {props.primaryButton}
                    </button>
               </div>
          </div>
     )
}

export default Card