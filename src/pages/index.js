import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const samplePageLinks = [
  {
    text: "Page 2",
    url: "page-2",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
]

const IndexPage = () => (
  <Layout>
    <div>
      <div className="Hero">
        <div className="HeroGroup">
          <h1>
            Hello <b>Gatsby!</b>
          </h1>
          <p className={styles.intro}>
            Complete course about the best tools and design systems. Prototype and build apps with React and Swift.
          </p>
            {samplePageLinks.map((link, i) => (
              <React.Fragment key={link.url}>
                <Link to={link.url}>{link.text}</Link>
                {i !== samplePageLinks.length - 1 && <> · </>}
              </React.Fragment>
            ))}
        </div>
      </div>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
