import Link from 'next/link';
import { useRouter } from 'next/router';
import PostType from '../../types/post';
import { DiscussionEmbed } from 'disqus-react';
import moment from 'moment';
import { getPostBySlug, getAllPosts } from '../../lib/api';
import PostBody from '../../components/post-body';
import React from 'react';
import ReactMarkdown from 'react-markdown';

type Props = {
  post: PostType;
};

const Post = ({ post }: Props) => {
  const router = useRouter();

  return (
    <div className="post overflow-scroll max-w-4/5 mx-auto">
      <div className="mt-1 mb-1">
        <Link href="/">
          <a className="text-blog-red text-2xl focus:outline-none">
            &#60;&#45;&#45;&#45;&#45;&#32;back
          </a>
        </Link>
      </div>
      <div className="post-list-meta">
        <time className="">
          {moment(post.date).format('dddd, MMMM Do YYYY')}
        </time>
      </div>
      <div className="header text-4xl">
        <h1 className="m-0">{post.title}</h1>
      </div>
      <div className="markdown-content">
        <ReactMarkdown source={post.content} renderers={{ code: PostBody }} />
      </div>
      <DiscussionEmbed
        shortname={'t0nylombardi'}
        config={{
          url: router.pathname,
          identifier: post.slug,
          title: post.title,
        }}
      />
      <div className="mt-6 mb-24">
        <Link href="/">
          <a className="text-blog-red text-2xl focus:outline-none">
            &#60;&#45;&#45;&#45;&#45;&#32;back
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Post;

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ]);
  const content = post.content;

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug,
        },
      };
    }),
    fallback: false,
  };
}
