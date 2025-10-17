import Ping from './Ping'
import { client } from '@/sanity/lib/client'
import { STARTUP_VIEWS_QUERY } from '@/sanity/lib/queries'
import { writeClient } from '@/sanity/lib/write-client'
// import {unstable_after as after} from "next/server"
// TODO: use after to update the view count after rendering the component

const View = async ({id}:{id:string}) => {
  const {views:totalViews} = await client.withConfig({
    useCdn:false // if number of views changes then automatically update the view count without redeploying the app
  }).fetch(STARTUP_VIEWS_QUERY,{id})

  // after(async()=>
  //   await writeClient.patch(id).set({views:totalViews+1}).commit()
  // )
  return (
    <div className='flex justify-end items-center mt-5 fixed bottom-3 right-3'>
        <div className='absolute -top-2 -right-2 '>
            <Ping />
        </div>
        <p className='font-medium text-[16px] bg-pink-100 px-4 py-2 rounded-lg capitalize'>
            <span className='font-black'> {formatViewsText(totalViews)} </span>
        </p>
    </div>
  )
}

const formatViewsText = (views:number)=>{
  if( views === 1) return '1 view'
  return `${views} views`
}

export default View