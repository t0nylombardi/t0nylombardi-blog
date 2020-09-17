import { useState, useEffect } from 'react'
import BlogLayout from 'src/layouts/BlogLayout'
import { useSpring, animated } from 'react-spring'
import { useMeasure } from 'react-use'
import Avatar from 'src/components/Avatar/Avatar'
import 'react-bulma-components/dist/react-bulma-components.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBlog } from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import BlogButton from 'src/components/Button'

const HomePage = () => {
  const defaultWidth = '100vw'

  const [open, toggle] = useState(false)
  const [contentWidth, setContentWidth] = useState(defaultWidth)
  const [ref, { width }] = useMeasure()

  const condense = useSpring({
    config: { friction: 10 },
    width: open ? `45vw` : defaultWidth,
  })

  useEffect(() => {
    setContentWidth(width)
    window.addEventListener('resize', setContentWidth(width))
    return window.removeEventListener('resize', setContentWidth(width))
  }, [width])

  return (
    <BlogLayout>
      <animated.div style={condense} ref={ref}>
        <div className="hero is-success is-fullheight blog__grid front-panel__container">
          <div className="hero-body">
            <div className="container">
              <div className="columns is-centered has-text-centered">
                <div className="column is-half">
                  <figure className="image is-128x128 has-image-centered">
                    <Avatar />
                  </figure>
                  <h1 className="title is-1">t0nylombardi</h1>
                  <h2 className="subtitle is-6">t0nylombardi.com blog</h2>
                </div>
              </div>
              <hr />
              <div className="container blog-social">
                <div className="columns has-text-centered">
                  <div className="column">
                    <BlogButton
                      onClick={() => {
                        toggle(!open)
                      }}
                    >
                      <span className="icon">
                        <FontAwesomeIcon icon={faBlog} />
                      </span>
                      <span>Blog</span>
                    </BlogButton>
                  </div>
                  <div className="column is-narrow-mobile">
                    <BlogButton>
                      <span className="icon">
                        <FontAwesomeIcon icon={faTwitter} />
                      </span>
                      <span>Twitter</span>
                    </BlogButton>
                  </div>
                  <div className="column is-narrow-mobile">
                    <BlogButton>
                      <span className="icon is-narrow-mobile">
                        <FontAwesomeIcon icon={faLinkedin} />
                      </span>
                      <span>LinkedIn</span>
                    </BlogButton>
                  </div>
                  <div className="column is-narrow-mobile">
                    <BlogButton>
                      <span className="icon">
                        <FontAwesomeIcon icon={faGithub} />
                      </span>
                      <span>GitHub</span>
                    </BlogButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </animated.div>

      <section className="blog__container blog__grid">
        <div className="hero is-primary is-fullheight">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">blog title</h1>
              <h2 className="subtitle">Fullwidth subtitle</h2>
            </div>
          </div>
        </div>
      </section>
    </BlogLayout>
  )
}

export default HomePage
