import React from 'react'

const Ping = () => {
  return (
    <div className='relative'>
        <div className='-left-4 top-1'>
            <span className='flex size-[11px]'>
                <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-600 opacity-75'>
                </span>
               <span className='relative size-[11px] rounded-full bg-pink-600 inline-flex'></span>

            </span>
        </div>
    </div>
  )
}

export default Ping