import React from 'react'

import TodosList from './TodosList'

const RootLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
  return (
    <main className='w-full'>
        <div className='max-w-[1240px] mx-auto flex space-x-2 mt-36'>
            <div>
                {/* @ts-ignore*/}
                <TodosList />
            </div>
            <div className='flex-1'>
                {children}
            </div>
        </div>
    </main>
  )
}

export default RootLayout