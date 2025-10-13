import { formatDate } from '@/lib/utils';
import { client } from '@/sanity/lib/client';
import { STARTUP_BY_ID_QUERY } from '@/sanity/lib/queries';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import markdownit from 'markdown-it'
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import View from '@/components/View';
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
    <section className='w-full bg-pink-600 min-h-[530px] pattern flex justify-center items-center flex-col py-10 px-6'>
      <p className=' px-6 py-3 font-work-sans font-bold rounded-sm uppercase relative bg-yellow-300 before:absolute before:top-2 before:left-2 before:border-t-[10px] before:border-t-black before:border-r-[10px] before:border-r-transparent  after:absolute after:bottom-2 after:right-2 after:border-b-[10px] after:border-b-black after:border-l-[10px] after:border-l-transparent'>{formatDate(post?._createdAt)}</p>
      <h1 className='uppercase bg-black px-6 py-3 font-work-sans font-extrabold text-white sm:text-[54px] sm:leading-[64px] text-[36px] leading-[46px] max-w-5xl text-center my-5'>
        {post?.title}
      </h1>
      <p className='font-medium text-[20px] text-white text-center break-words !max-w-5xl'>{post?.description}</p>
    </section>
      <section className='px-4 py-8 max-w-7xl mx-auto'>
        <img src={post?.image} alt="thumbnail" className='w-full h-auto rounded-xl' />
        <div className='space-y-5 mt-10 max-w-4xl mx-auto'>
          <div className='flex justify-between gap-5'>
            <Link href={`/user/${post.author?._id}`} className='flex gap-2 items-center mb-3'>
              <Image src={post.author?.image} alt='avatar' width={64} height={64} className='rounded-full drop-shadow-lg'/>
              <div>
                <p className='font-medium text-[20px] text-black'>{post.author.name}</p>
                <p className='font-medium text-[16px] text-black'>@{post.author.username}</p>
              </div>
            </Link>
                        <span className=' font-medium text-center flex items-center justify-center text-sm sm:text-base text-black bg-gray-100 px-3 py-1 rounded-full hover:bg-primary-100 transition-colors duration-300'>
              {post.category}
            </span>
          </div>
          <h3 className='text-[30px] font-bold text-black'>Pitch details</h3>
          {parsedContent ? (
            <article className='prose max-w-4xl font-work-sans break-all' dangerouslySetInnerHTML={{__html:parsedContent}} />
          ) : <p className='text-black-100 text-sm font-normal'>No details provided</p> }
        </div>
        <hr className='border-dotted bg-zinc-400 max-w-4xl my-10 mx-auto' />
        <Suspense  fallback={<Skeleton className='bg-zinc-400 h-10 w-24 rounded-lg fixed bottom-3 right-3' />}>
          <View id={id} />
        </Suspense>
      </section>
    </>
  )
}

export default page