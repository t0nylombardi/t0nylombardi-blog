import * as React from 'react';
import { Post } from '../../types';
import MarkdownContent from '../Markdown';
import Link from 'next/link';
import { useRouter } from 'next/router';
import moment from 'moment';

interface PostsProps {
  posts: Post[];
}

const Posts: React.FC<PostsProps> = ({ posts }) => {
  const router = useRouter();

  return (
    <div>
      {posts.map((post, index) => {
        return (
          <ol className="post-list" key={index}>
            <li className="py-2">
              <h1 className="post-title text-3xl mt-0 mb-2 leading-5">
                <Link as={`/posts/${post.slug}`} href="/posts/[slug]">
                  <a className="hover:text-blog-red">{post.title}</a>
                </Link>
              </h1>
              <p className="excerpt m-0 text-gray-999 text-lg">
                <MarkdownContent content={post.body} needsElipses />
              </p>

              <div className="post-list-meta ">
                <time>
                  {moment(post.created_at).format('dddd, MMMM Do YYYY')}
                </time>
              </div>
              <hr className="post-list-divider" />
            </li>
          </ol>
        );
      })}
    </div>
  );
};

export default Posts;
