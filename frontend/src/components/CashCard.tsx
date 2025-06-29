
const CashCard = ({iconUrl, type, value}:{iconUrl:string, type:string, value:number}) => {
  return (
    <div className='min-w-[210px] rounded-md bg-[#1A1C22] flex items-center justify-around px-4 py-8 flex-1'>
      <div className='w-[50px] h-[50px] bg-[#282C35] rounded-lg'>
        <img src={`/${iconUrl}`} alt={iconUrl} className='w-full h-full object-contain' />
      </div>

      <div className='flex flex-col justify-around'>
        <h3 className='text-lg font-semibold text-slate-400'>{type}</h3>
        <p className='text-white text-3xl'>₹ {value}</p>
      </div>
    </div>
  )
}

export default CashCard
