import * as React from 'react';
import Post from '../../types/post';
import MarkdownContent from '../Markdown';
import Link from 'next/link';
import { useRouter } from 'next/router';
import moment from 'moment';
import { Params } from 'next/dist/next-server/server/router';
import { getPostBySlug } from '../../lib/api';

const CHARLENGTH = 175;

type Props = {
  posts: Post[];
};

const postExerpt = (content) => {
  if (content.length > CHARLENGTH) {
    return content.substring(0, CHARLENGTH - 3) + '...';
  }

  return content;
};

const Posts = ({ posts }: Props) => {
  const router = useRouter();
  console.log('posts', posts);

  return (
    <div>
      {posts.map((post, index) => {
        return (
          <ol className="post-list" key={index}>
            <li className="py-2">
              <h1 className="post-title text-3xl mt-0 mb-2 leading-5">
                <Link as={`/posts/${post.slug}`} href="/posts/[slug]">
                  <a className="hover:text-blog-red">{post.slug}</a>
                </Link>
              </h1>
              <p className="excerpt m-0 text-gray-999 text-lg">
                {postExerpt(post.content)}
              </p>

              <div className="post-list-meta ">
                <time>{moment(post.date).format('dddd, MMMM Do YYYY')}</time>
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
