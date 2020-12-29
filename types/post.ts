import Author from './author'

type PostType = {
  slug: string
  title: string
  date: string
  originalDatePublished: string
  coverImage: string
  author: Author
  excerpt: string
  ogImage: {
    url: string
  }
  content: string
  categories: string[]
  tags: string[]
}

export default PostType;
