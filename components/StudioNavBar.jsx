import Link from 'next/link'

import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid'

const StudioNavBar = (props) => {
  return (
    <div>
        <div className='flex items-center justify-between p-5'>
            <Link className='text-[#F7AB0A] flex items-center' href='/'>
                <ArrowUturnLeftIcon className='h-6 w-6 text-[#F7AB0A] mr-2' />
                Go Back To Website
            </Link>

            <div className='hidden md:flex p-5 rounded-lg justify-center
             border-2 border-[#F7AB0A]'>
                <h1 className='font-bold text-white'>
                    Get to work!
                </h1>

                <Link
                    className='text-[#F7AB0A] font-bold ml-2' 
                    href='www.tom-is-me.com'>
                    Tommy Vong
                </Link>
            </div>
        </div>
        <>{props.renderDefault(props)}</>
    </div>
  )
}

export default StudioNavBar