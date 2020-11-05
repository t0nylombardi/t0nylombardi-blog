import React from "react";
import Container from "../../components/Container/Container";
import Posts from "../../components/Posts/Posts";
const faker = require("faker");

const populateSlugs = () => {
  let slugs = [];
  const slugNumber = Math.floor(Math.random() * (10 - 1) + 1);
  for (let i = 0; i < slugNumber; i++) {
    slugs.push(faker.lorem.slug());
  }

  return slugs;
};

const populatePosts = (n: number) => {
  let data = [];
  for (let i = 0; i < n; i++) {
    data.push({
      id: i + 1,
      title: faker.name.jobDescriptor(),
      body: faker.lorem.paragraphs(),
      created_at: faker.date.past(5),
      slug: populateSlugs(),
    });
  }
  return data;
};

const PostList: React.FC = () => {
  const data = populatePosts(20);
  return (
    <div className="blog-wrapper overflow-scroll bg-white">
      <Container>
        <div className="post-list-wrapper mt-24">
          <Posts posts={data} />
        </div>
      </Container>
    </div>
  );
};

export default PostList;
