import { formatDate } from '@/lib/utils';
import { client } from '@/sanity/lib/client';
import { STARTUP_BY_ID_QUERY } from '@/sanity/lib/queries';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import markdownit from 'markdown-it'
const md = markdownit();

export const experimental_ppr = true
const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  console.log(id)
  const post = await client.fetch(STARTUP_BY_ID_QUERY, { id });
  if (!post) return notFound();

  const parsedContent = md.render(post?.pitch || '')
  return (
    <>
    <section className='w-full  min-h-[230px]  bg-pink-600  flex justify-center items-center flex-col py-10 px-6'>
      <p className='bg-amber-400'>{formatDate(post?._createdAt)}</p>
      <h1 className='uppercase bg-black px-6 py-3 font-work-sans font-extrabold text-white sm:text-[54px] sm:leading-[64px] text-[36px] leading-[46px] max-w-5xl text-center my-5'>
        {post?.title}
      </h1>
      <p className='font-medium text-[20px] text-white  text-center break-words !max-w-5xl'>{post?.description}</p>
    </section>
      <section className='px-4 py-8 max-w-7xl mx-auto'>
        <img src={post?.image} alt="thumbnail" className='w-full h-auto rounded-xl' />
        <div className='space-y-5 mt-10 max-w-4xl mx-auto'>
          <div className='flex justify-between gap-5'>
            <Link href={`/user/${post.author?._id}`} className='flex gap-2 items-center mb-3'>
              <Image src={post.author?.image} alt='avatar' width={64} height={64} className='rounded-full drop-shadow-lg'/>
              <div>
                <p className=''>{post.author.name}</p>
                <p className=''>@{post.author.username}</p>
              </div>
            </Link>
                        <span className=' font-medium text-center flex items-center justify-center text-sm sm:text-base text-black bg-gray-100 px-3 py-1 rounded-full hover:bg-primary-100 transition-colors duration-300'>
              {post.category}
            </span>
          </div>
          <h3 className='text-3xl font-bold'>Pitch details</h3>
          {parsedContent ? (
            <article dangerouslySetInnerHTML={{__html:parsedContent}} />
          ) : <p>No details provided</p> }
        </div>

        <hr />
      </section>
    </>
  )
}

export default page