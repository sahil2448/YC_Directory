import { formatDate } from '@/lib/utils'
import { EyeIcon, Link } from 'lucide-react'
import React from 'react'

const StartupCard = ({post}:{post:StartupTypeCard}) => {
    const {_createdAt,views,author:{_id:authorId,name},title,category,image,_id} = post;
  return (
    <li className='bg-white border-[5px] border-black py-6 px-5 rounded-[22px] shadow-200 hover:border-primary transition-all duration-500 hover:shadow-300 hover:bg-primary-100 group'>
        <div className='flex justify-between items-center'>
            <p className='font-medium text-[16px] bg-primary-100 px-4 py-2 rounded-full group-hover:bg-white-100'>
                {formatDate(_createdAt)}
            </p>
            <div className='flex gap-1.5'>
                <EyeIcon className='size-6 text-primary' />
                <span className='font-medium text-[16px] text-black'>{views}</span>
            </div>
        </div>
        <div className='flex justify-between items-center'>
            <div className='flex-1'>
                <Link href={`/user/${post.authorId}`}>
                    <p className='font-medium text-[16px] text-black line-clamp-1'>{name}</p>
                </Link>
            </div>
        </div>
    </li>
  )
}

export default StartupCard