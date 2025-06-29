import Chart from './Chart'
import RecentTransactions from './RecentTransactions'

const HeroSection = () => {
  return (
    <div className='mt-6 flex flex-col xl:flex-row justify-between items-start gap-6'>
      <Chart/>
      <RecentTransactions/>
    </div>
  )
}

export default HeroSection
