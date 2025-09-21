import React from 'react'
import SearchForm from '../../components/SearchForm'
import StartupCard from '@/components/StartupCard';
const Home = async({searchParams}:{searchParams:Promise<{query?:string}>}) => {
  const query = (await searchParams).query;
  const posts = [{
    _createdAt:new Date(),
    views:55,
    author:{_id:1,name:"Sahil Kamble"},
    _id:1,
    description:"This is a startup description",
    image:'https://img.freepik.com/free-vector/startup-development_1284-22687.jpg?t=st=1758451716~exp=1758455316~hmac=ba4a140b658fa3d9a413ea38b42f85db382c9a9bd96d469cf49f6727d5cba8d7&w=1060',
    category:"Robots",
    title:"we Robots",

  }]
  return (
    <>    <section className='w-full  min-h-[530px]  bg-pink-600  flex justify-center items-center flex-col py-10 px-6'>
      <div className='uppercase bg-black px-6 py-3 font-work-sans font-extrabold text-white sm:text-[54px] sm:leading-[64px] text-[36px] leading-[46px] max-w-5xl text-center my-5'>PITCH YOUR STARTUP,<br /> CONNECT WITH ENTREPRENEURS</div>

      <p className='font-medium text-[20px] text-white max-w-2xl text-center break-words'>Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competition</p>

      <SearchForm query={query} />
    </section>

    <section className='px-6 py-10 max-w-7xl mx-auto'>
      <p className='font-semibold text-[30px] text-black'>
        {query ? `Search Results for "${query}"`:" All Startups"}
      </p>
      <ul className='mt-7 grid md:grid-cols-3 sm:grid-cols-2 gap-5'>
        {posts?.length>0 ? posts.map((post,number)=>(
          <StartupCard key={post._id} post={post} />
        )):(
          <p className='text-black-100 text-sm font-normal'>No startups found</p>
        )}
      </ul>
    </section></>

    
  )
}

export default Home