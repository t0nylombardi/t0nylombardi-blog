const BlogButton = ({ children }) => {
  return (
    <>
      <button className="button is-primary is-medium is-inverted is-outlined is-rounded">
        {children}
      </button>
    </>
  )
}

export default BlogButton
