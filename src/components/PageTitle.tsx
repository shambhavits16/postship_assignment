type Props = {
     title: string;
}

const PageTitle = ({ title }: Props) => {
     return (
          <h1 className='text-[#4A4A4A] font-[inter] text-2xl font-bold tracking-[-0.2px]'>{title}</h1>
     )
}

export default PageTitle