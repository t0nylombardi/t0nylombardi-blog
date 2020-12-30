import Container from '../components/Container';
import PostsListLoader from '../components/PostLoader';
import Posts from '../components/Posts/Index';
import { getAllPosts } from '../lib/api';
import Post from '../types/post';

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
  const posts = allPosts;

  return (
    <Container>
      <div className="post-list-wrapper mt-2 overflow-scroll">
        {allPosts.length <= 0 ? <PostsListLoader /> : <Posts posts={posts} />}
      </div>
    </Container>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'coverImage',
    'date',
    'originalDatePublished',
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
