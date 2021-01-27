import { useRouter } from 'next/router';
import Head from 'next/head';
import { getPostBySlug, getAllPosts } from '../../lib/api';
import PostType from '../../types/post';
import { DiscussionEmbed } from 'disqus-react';
import PostBody from '../../components/post-body';
import ReactMarkdown from 'react-markdown';
import BackButton from '../../components/BackButton';
import postStyles from './posts.module.scss';
import DatePublished from '../../components/DatePublished';

type Props = {
  post: PostType;
};

const Post = ({ post }: Props) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title> {post.title} | T0nyLombardi BLOG</title>
      </Head>
      <div className="post overflow-scroll max-w-4/5 mx-auto">
        <div className="mt-1 mb-1">
          <BackButton />
        </div>

        <div className="header text-5xl pt-4">
          <h1 className="m-0">{post.title}</h1>
        </div>
        <div className={postStyles.postListMeta}>
          <DatePublished
            date={post.date}
            originalDatePublished={post.originalDatePublished}
          />
        </div>
        {post.coverImage ? (
          <div className="post-banner py-4">
            <header
              id="up"
              className="bg-no-repeat bg-center bg-cover"
            ></header>
            <style jsx global>{`
              header {
                background: url(${post.coverImage});
                height: 50vh;
                width: 100vw;
                position: relative;
                left: calc(-50vw + 50%);
              }
            `}</style>
          </div>
        ) : (
          <></>
        )}

        <div className="markdown-content">
          <ReactMarkdown source={post.content} renderers={{ code: PostBody }} />
          <style jsx global>{`
            .markdown-content p {
              font-size: 1.2rem;
              padding: 0.5rem 0 1rem 0;
            }
          `}</style>
        </div>
        <DiscussionEmbed
          shortname={'t0nylombardi'}
          config={{
            url: 'https://t0nylombardi.com',
            identifier: post.slug,
            title: post.title,
          }}
        />
        <div className="mt-6 mb-24">
          <BackButton />
        </div>
      </div>
    </>
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
    'originalDatePublished',
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
