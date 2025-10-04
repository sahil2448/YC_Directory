import { formatDate } from '@/lib/utils'
import { EyeIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import { Startup ,Author} from '@/sanity/types'

export type StartupTypeCard = Omit<Startup,"author"> & {author:Author};
const StartupCard = ({ post }: { post: StartupTypeCard }) => {
    const { _createdAt, views, author, title, category, image, _id, description } = post;
    
    return (
        <li className='bg-white group border-[5px] border-black rounded-[22px]  hover:border-pink-600 hover:shadow-300 transition-all duration-500 hover:shadow-300 hover:bg-primary-100 group w-full max-w-sm mx-auto sm:max-w-none'>
            {/* Header Section - Date & Views */}
            <div className='flex justify-between items-center p-5 pb-4'>
                <p className='font-medium text-sm sm:text-base bg-primary-100 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full group-hover:bg-white-100 transition-colors duration-300'>
                    {formatDate(_createdAt)}
                </p>
                <div className='flex items-center gap-1.5'>
                    <EyeIcon className='size-5 sm:size-6 text-primary' />
                    <span className='font-medium text-sm sm:text-base text-black'>{views}</span>
                </div>
            </div>

            <div className='px-5 pb-5 space-y-4'>
                <div className='flex items-center justify-between gap-3'>
                    <Link href={`/user/${author?._id}`} className='flex-1 min-w-0'>
                        <p className='font-medium text-sm sm:text-base text-black line-clamp-1 hover:text-primary transition-colors duration-300'>
                            {author?.name}
                        </p>
                    </Link>
                    <Link href={`/user/${author?._id}`} className='shrink-0'>
                        <Image 
                            src="https://via.placeholder.com/600x400" 
                            unoptimized 
                            alt={`${author?.name} profile`} 
                            width={40} 
                            height={40} 
                            className="rounded-full sm:w-12 sm:h-12 border-2 border-gray-200 group-hover:border-pink-600 transition-colors duration-300"
                        />
                    </Link>
                </div>

                {/* Title */}
                <Link href={`/startup/${_id}`} className='block'>
                    <h3 className='font-semibold text-xl sm:text-2xl lg:text-[26px] text-black line-clamp-2 hover:text-primary transition-colors duration-300 leading-tight'>
                        {title}
                    </h3>
                </Link>

                {/* Description */}
                <p className='font-normal text-sm sm:text-base text-black-100 line-clamp-3 leading-relaxed'>
                    {description}
                </p>

                {/* Image */}
                <Link href={`/startup/${_id}`} className='block'>
                    <div className='relative w-full h-40 sm:h-48 lg:h-[164px] rounded-[10px] overflow-hidden group-hover:shadow-lg transition-shadow duration-300'>
                        <img 
                            src={image} 
                            alt={title} 
                            className='w-full h-full object-cover hover:scale-103 transition-all duration-300' 
                        />
                    </div>
                </Link>

                {/* Footer - Category & Button */}
                <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-2'>
                    <Link href={`/?query=${category?.toLowerCase()}`} className='order-2 sm:order-1'>
                        <span className='inline-block font-medium text-sm sm:text-base text-black bg-gray-100 px-3 py-1 rounded-full hover:bg-primary-100 transition-colors duration-300'>
                            #{category}
                        </span>
                    </Link>
                    
                    <Button asChild className='bg-primary hover:bg-primary/90 border-[4px] border-black rounded-full px-6 py-2.5 sm:py-3 min-h-[44px] sm:min-h-[48px] font-bold text-base sm:text-lg text-white transition-all duration-300 hover:shadow-md order-1 sm:order-2 w-full sm:w-auto'>
                        <Link href={`/startup/${_id}`}>
                            Details
                        </Link>
                    </Button>
                </div>
            </div>
        </li>
    )
}

export default StartupCard
