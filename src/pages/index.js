import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

// import Logos
import SketchLogo from "../images/Logos/logo-sketch.png"
import FigmaLogo from "../images/Logos/logo-figma.png"
import StudioLogo from "../images/Logos/logo-studio.png"
import FramerLogo from "../images/Logos/logo-framer.png"
import ReactLogo from "../images/Logos/logo-react.png"
import SwiftLogo from "../images/Logos/logo-swift.png"

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
            Learn to <br />
            design and code React apps
          </h1>
          <p className={styles.intro}>
            Complete course about the best tools and design systems. Prototype
            and build apps with React and Swift.
          </p>
          {samplePageLinks.map((link, i) => (
            <React.Fragment key={link.url}>
              <Link to={link.url}>{link.text}</Link>
              {i !== samplePageLinks.length - 1 && <> · </>}
            </React.Fragment>
          ))}
          <div className="Logos">
            <img src={SketchLogo} width="50" alt="sketch-logo" />
            <img src={FigmaLogo} width="50" alt="sketch-logo" />
            <img src={StudioLogo} width="50" alt="sketch-logo" />
            <img src={FramerLogo} width="50" alt="sketch-logo" />
            <img src={ReactLogo} width="50" alt="sketch-logo" />
            <img src={SwiftLogo} width="50" alt="sketch-logo" />
          </div>
          <svg
            width="100%"
            height="172"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="white">
              <animate
                repeatCount="indefinite"
                fill="freeze"
                attributeName="d"
                dur="10s"
                values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z; 
                M0 87.1596C316 87.1597 444 160 884 52.0001C1324 -55.9999 1320.29 34.966 1538 71.251C1814 117.251 2156 189.252 2560 87.1597V233.161L0 233.161V87.1596Z;
                M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z;
                M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z"
              />
            </path>
          </svg>
        </div>
      </div>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
