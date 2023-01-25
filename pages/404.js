import { ExclamationCircleIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'

const NotFound = () => {
  return (
    <div className="bg-[#1a1a1a] h-screen w-full flex flex-col items-center justify-center p-4">
      <div className='relative h-56 w-56'>
        <div className='animate-bounce w-56 h-56 absolute right-20 z-10'>
          <Image 
            src='/alien-hand.png'
            
            fill
          />
        </div>
        <Image 
          src='/alien-head.png'
          className='w-full'
          fill
        />
      </div>
      <p className='text-gray-100 text-[5rem] md:text-[10rem]'>Whoops!</p>
      <p className='text-gray-100 text-xl'>Couldn't find any aliens here.</p>
      <Link 
      href='/'
      className='mt-8 font-semibold rounded-md py-2 px-8 border-[1px] border-yellow-500 
      text-yellow-500 hover:bg-yellow-500 hover:text-[#1a1a1a] transition duration-200'>Go Back</Link>
    </div>
  )
}

export default NotFound