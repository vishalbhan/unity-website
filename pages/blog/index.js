import Link from 'next/link'
import { format } from 'date-fns'
import FadeUp from '@/components/FadeUp'
import WordAnim from '@/components/WordAnim'
import { Button } from '@/styles/components'
import { NextSeo } from 'next-seo'
import Image from 'next/image'

export async function getStaticProps() {
  const content = await fetch(`https://cdn.builder.io/api/v3/content/blog-articles?apiKey=${process.env.NEXT_PUBLIC_BUILDER_API_KEY}&limit=0&omit=data.blocks&sort.data.date=-1`).then(res => res.json())
  const posts = await content.results
  return { props: { posts }, revalidate: 10 }
}

export default function Blog({ posts }) {
  // console.log(posts)

  return (
    <>
      <NextSeo
        title="Sanzu Blog"
        titleTemplate="Sanzu Blog" 
        defaultTitle="Sanzu Blog"
      />

      <section className="h-screen bg-gradient-1 text-white text-center center">
        <div className="container px-4 sm:px-0 mx-auto">
          <div className="mb-24">
            <h1 className="mb-16">
              <WordAnim>A healthy mind in a healthy body - read about what you can do</WordAnim>
            </h1>
            {/* <FadeUp delay="0.55">
              <Link href="/contact#form">
                <Button>{content[lang].heroButtonText}</Button>
              </Link>
            </FadeUp> */}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32">
        <div className="container px-4 sm:px-0 mx-auto">
          {
            posts.map((post, index) => (
              <div key={post.id} className="mb-16">
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-16'>
                  <Link href={`/blog/${post.data.handle}`} className='w-full cursor-pointer'>
                    <Image src={post.data.image} alt={post.data.title} width={620} height={410} className='w-full rounded-lg object-cover'/>
                  </Link>
                  <div>
                    <div className="text-gray-600 text-sm">
                      {format(new Date(post.data.date), 'do MMM yyyy')}
                    </div>
                    <Link href={`/blog/${post.data.handle}`}>
                      <h2 className="text-3xl md:text-4xl md:leading-tight mb-4">{post.data.title}</h2>
                    </Link>
                    <div className='flex flex-wrap gap-2 mb-4'>
                      {post.data.tags?.map((tag, index) => (
                        <span key={`tag-${index}`} className="text-sm font-semibold bg-gradient-2 rounded-lg px-3 py-2">{tag}</span>
                      ))}
                    </div>
                    <p className="mb-12">{post.data.excerpt}</p>
                    <Link href={`/blog/${post.data.handle}`} passHref><Button>Read Post</Button></Link>
                  </div>
                </div>
                { index+1 !== posts.length && <hr className='my-20' /> }
              </div>
            ))
          }
        </div>
      </section>
    </>
  )
}
