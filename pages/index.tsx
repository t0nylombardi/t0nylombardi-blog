import Container from '../components/Container';
import PostsListLoader from '../components/PostLoader';
import Posts from '../components/Posts/Index';
import { getAllPosts } from '../lib/api';
import Post from '../types/post';

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
  const morePosts = allPosts;
  console.log('allPosts', allPosts);

  return (
    <Container>
      <div className="post-list-wrapper mt-24 overflow-scroll">
        {allPosts.length <= 0 ? (
          <PostsListLoader />
        ) : (
          <Posts posts={morePosts} />
        )}
      </div>
    </Container>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'content',
  ]);

  return {
    props: { allPosts },
  };
};
