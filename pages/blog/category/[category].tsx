import React from 'react';
import { builder } from '@builder.io/react';
import Link from 'next/link';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface BlogCategoryPageProps {
  category: string;
}

const BlogCategoryPage: React.FC<BlogCategoryPageProps> = ({ category }) => {
  const [blogs, setBlogs] = React.useState<any>([])

  React.useEffect(() => {
    builder.getAll('blog-articles', {
      query: {
        data: {
          primaryCategory: category,
        }
      }
    }).then((data) => {
      console.log(data)
      setBlogs(data)
    })
  }, []);

  return (
    <div>
      <h1>{category} Category</h1>
      {/* Add your component content here */}
    </div>
  );
};

export default BlogCategoryPage;