const BlogButton = ({ onClick, children }) => {
  return (
    <>
      <button
        className="button is-primary is-medium is-inverted is-outlined is-rounded"
        onClick={onClick}
      >
        {children}
      </button>
    </>
  )
}

export default BlogButton
