import { useState } from 'react'
import BlogLayout from 'src/layouts/BlogLayout'
import BlogPostsCell from 'src/components/BlogPostsCell'
import { useSpring, animated } from 'react-spring'
import FrontPanel from 'src/components/FrontPanel/FrontPanel'

const HomePage = () => {
  const defaultWidth = '101vw'

  const [open, toggle] = useState(false)

  const condense = useSpring({
    config: { friction: 15 },
    width: open ? `45vw` : defaultWidth,
  })

  const updateState = () => {
    toggle(!open)
  }

  return (
    <BlogLayout>
      <animated.div style={condense}>
        <FrontPanel updateState={updateState} />
      </animated.div>

      <section className="blog__container">
        <div className="container-flex">
          <div className="">
            <div className="">
              <BlogPostsCell open={open} toggle={toggle} />
            </div>
          </div>
        </div>
      </section>
    </BlogLayout>
  )
}

export default HomePage
