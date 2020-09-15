import 'react-bulma-components/dist/react-bulma-components.min.css'

const BlogLayout = ({ children }) => {
  return (
    <>
      <div className="blog__wrapper">{children}</div>
    </>
  )
}

export default BlogLayout
