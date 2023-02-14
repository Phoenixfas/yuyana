import { useAppSelector } from '../../redux/hooks'

export default function Details() {
    const pkg = useAppSelector(state => state.activePackage)
  return (
    <div className='w-full flex flex-col items-center my-32'>
        <div className="max-w-[800px] flex flex-col items-center">
            <p className='text-center text-[#131316] mb-10 text-xl'>{pkg.description}</p>
            <p className='text-center text-[#FEA100]'> Total Number of Days: {pkg.total_no_of_days}</p>
        </div>
    </div>
  )
}
