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

//import wallpapers
import Wallpaper from "../images/wallpaper.jpg"
import Wallpaper2 from "../images/wallpaper2.jpg"
import Wallpaper3 from "../images/wallpaper3.jpg"
import Wallpaper4 from "../images/wallpaper4.jpg"

import Card from "../components/Card"
import Section from "../components/Section"

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
            <img src={FigmaLogo} width="50" alt="figma-logo" />
            <img src={StudioLogo} width="50" alt="studio-logo" />
            <img src={FramerLogo} width="50" alt="framer-logo" />
            <img src={ReactLogo} width="50" alt="react-logo" />
            <img src={SwiftLogo} width="50" alt="swift-logo" />
          </div>
          <svg
            width="100%"
            height="165"
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
      <div className="Cards">
        <h2>11 Courses, more coming</h2>
        <div className="CardGroup">
          <Card title="Design Systemn" text="10 Sections" image={Wallpaper} />
          <Card
            title="React for Designers"
            text="12 Sections"
            image={Wallpaper2}
          />
          <Card title="sound Design" text="5 Sections" image={Wallpaper3} />
          <Card title="ARKit 2" text="10 Sections" image={Wallpaper4} />
        </div>
      </div>
      <Section
        image={Wallpaper2}
        logo={ReactLogo}
        title="React for Beginners"
        text="Learn how to build a modern site using React and the most efficient libraries to get yout site/product online. 
        Get familiar with components, Grid CSS, animations, interactions, dynamic data with Comntenful and deployinh your site with Netlify."
      />
    </div>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
