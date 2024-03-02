import {
  builder,
  BuilderComponent,
  BuilderContent,
  useIsPreviewing,
} from "@builder.io/react";
import React from 'react';
import Head from "next/head";
import DefaultErrorPage from "next/error";
import { EmailIcon, EmailShareButton, FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from "react-share";
import { useRouter } from "next/router";
import styled from "styled-components";
import Navbar from "@/components/Navbar";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

function BlogArticle({ article }) {
  console.log(article)
  const router = useRouter()
  const shareUrl = `https://www.sanzu.ch/${router.asPath}`

  const isPreviewing = useIsPreviewing();
  if (!article && !isPreviewing) {
    return (
      <>
        <Head>
          <meta name="robots" content="noindex" />
        </Head>
        <DefaultErrorPage statusCode={404} />
      </>
    );
  }

  return (
    <>
      <BuilderContent
        content={article}
        model="blog-articles"
      >
        {(data, loading, fullContent) => (
          <React.Fragment>
            <Head>
              {/* Render meta tags from custom field */}
              <title>{data?.title}</title>
              <meta name="description" content={data?.excerpt} />
              <meta name="og:image" content={data?.image} />
            </Head>

            <Navbar color="light" />

            <section>
              <div className="container mx-auto">

                <img src={data?.image} alt={data?.title} className="w-full object-cover rounded-x mb-12" />

                <div className="grid grid-cols-3 gap-8">
                  <div className="col-span-2">
                    <h3 className="mb-4">{data?.title}</h3>
                    <div className="flex items-center gap-4">
                      {data?.categories.map((category, index) => (
                        <p key={category}>
                          <span className="uppercase bg-[#B97A00]">{category}</span>
                          {index !== data.categories.length - 1 && <span>,</span>}
                        </p>
                      ))}
                      <p className='text-gray-500'>{data?.readTime} min read | 1 day ago</p>
                    </div>  
                    <hr className="mt-4 mb-8" />
                    <BlogContent className="mb-12">
                      {/* Render the Builder drag/drop'd content */}
                      <BuilderComponent
                        model="blog-articles"
                        content={fullContent}
                      />
                    </BlogContent>
                  </div>
                  {/* Sidebar */}
                  <div>
                    <h5 className='text-sm mb-6'>Share this article</h5>
                    <div className="flex flex-wrap gap-2">
                      <EmailShareButton url={shareUrl}>
                        <EmailIcon size={32} round />
                      </EmailShareButton>
                      <FacebookShareButton url={shareUrl}>
                        <FacebookIcon size={32} round />
                      </FacebookShareButton>
                      <LinkedinShareButton url={shareUrl}>
                        <LinkedinIcon size={32} round />
                      </LinkedinShareButton>
                      <TwitterShareButton url={shareUrl}>
                        <TwitterIcon size={32} round />
                      </TwitterShareButton>
                      <WhatsappShareButton url={shareUrl}>
                        <WhatsappIcon size={32} round />
                      </WhatsappShareButton>
                    </div>
                  </div>
                </div>

              </div>
            </section>

          </React.Fragment>
        )}
      </BuilderContent>
    </>
  );
}

export async function getStaticProps({ params }) {
  const article = await builder
    .get("blog-articles", {
      query: {
        // Get the specific article by slug
        "data.slug": params.slug,
      },
    })
    .promise() || null;

  return {
    props: {
      article,
    },
    revalidate: 10
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export default BlogArticle;

const BlogContent = styled.div`
  margin: 24px auto;
`
