import BlogLayout from 'src/layouts/BlogLayout'
import Avatar from 'src/components/Avatar/Avatar'
import 'react-bulma-components/dist/react-bulma-components.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import BlogButton from 'src/components/Button'

const HomePage = () => {
  return (
    <BlogLayout>
      <section className="blog__container hero is-primary is-fullheight">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">blog title</h1>
            <h2 className="subtitle">Fullheight subtitle</h2>
          </div>
        </div>
      </section>

      <section className="front-panel__container hero is-success is-fullheight">
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
            <div className="columns">
              <div className="column">
                <BlogButton>Blog</BlogButton>
              </div>
              <div className="column">
                <BlogButton>
                  <FontAwesomeIcon icon="LinkedIn" />
                </BlogButton>
              </div>
              <div className="column"></div>
              <div className="column"></div>
              <div className="column"></div>
              <div className="column"></div>
            </div>
          </div>
        </div>
      </section>
    </BlogLayout>
  )
}

export default HomePage
