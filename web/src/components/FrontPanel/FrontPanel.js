import { Link, routes } from '@redwoodjs/router'
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

const FrontPanel = ({ updateState }) => {
  return (
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
                    updateState()
                  }}
                >
                  <span className="icon">
                    <FontAwesomeIcon icon={faBlog} />
                  </span>
                  <span>Blog</span>
                </BlogButton>
              </div>
              <div className="column is-narrow-mobile">
                <Link to={routes.about()}>
                  <BlogButton>
                    <span className="icon">
                      <FontAwesomeIcon icon={faTwitter} />
                    </span>
                    <span>Twitter</span>
                  </BlogButton>
                </Link>
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
  )
}

export default FrontPanel
