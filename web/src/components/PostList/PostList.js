import { Link, routes } from '@redwoodjs/router'

const PostList = ({ posts }) => {
  return (
    <div className="main-post-list">
      {posts.map((post) => (
        <ol className="post-list" key={post.id}>
          <li>
            <h2 className="post-list__post-title post-title">
              <Link to={routes.post({ id: post.id })} title={post.title}>
                {post.title}
              </Link>
            </h2>
            <p className="excerpt">
              {post.body.length > 175 ? (
                <>{post.body.substring(0, 174)}&hellip;</>
              ) : (
                post.body
              )}
            </p>
            <div className="post-list__meta">
              <time
                dateTime="{post-createdAt}"
                className="post-list__meta--date date"
              >
                {post.createdAt}
              </time>{' '}
              &#8226;
            </div>
            <hr className="post-list__divider" />
          </li>
        </ol>
      ))}
    </div>
  )
}

export default PostList
