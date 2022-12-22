import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import styled from "styled-components"

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
import Wave from "../components/Wave"
import staticData from "../../staticData.json"
import Cell from "../components/Cell"

const samplePageLinks = [
  {
    text: "Page 2",
    url: "page-2",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
]

const SectionCaption = styled.p`
font-weisght:600;
font-size:18px;
text-transform:uppercase;
color:#94A4BA;
text-align:center;`

const SectionCellGroup = styled.div`
max-width:800px;
margin:0 auto 100px;
display:grid;
grid-template-columns:repeat(2,1fr);
column-gap:20px;
padding:0 20px;

@media(max-width:800px){
  grid-template-columns:repeat(1,1fr);
}`

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
          <Wave />
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

      <SectionCaption>12 Sections, 6 hours</SectionCaption>
      <SectionCellGroup>
        {staticData.cells.map(cell => (
          <Cell title={cell.title} image={cell.image} />
        ))}
      </SectionCellGroup>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
