import React from 'react';
import { builder } from '@builder.io/react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface BlogCategoryPageProps {
  category: string;
  posts: any;
}

const BlogCategoryPage: React.FC<BlogCategoryPageProps> = ({ category, posts }) => {
  return (
    <>
      <Navbar color="light" />

      <div>
        <h1 className='my-12 text-center capitalize'>{category}</h1>
      </div>
    </>
  );
};

export async function getStaticProps({ params }: { params: any }) {
  const posts = await builder.getAll('blog-articles', {
    query: {
      data: {
        primaryCategory: params.category,
      }
    }
  })

  return {
    props: {
      category: params.category,
      posts,
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

export default BlogCategoryPage;