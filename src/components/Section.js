import * as React from "react"
import styled from "styled-components"

const SectionGroup = styled.div`
  background: url(${props => props.image});
  height: 720px;
  background-size: cover;
  display: grid;
  grid-template-row: 300px auto;
  row-gap: 20px;
`

const SectionLogo = styled.img`
  align-self: end;
  width: 120px;
  margin: 0 auto;
`

const SectionTitleGroup = styled.div`
  display: grid;
  grid-template-columns: 300px auto;
`
const SectionTitle = styled.h3`
  color: white;
  font-size: 60px;
  margin: 0;
  line-height: 1.2;
`
const SectionText = styled.p`
  color: white;
`

const Section = props => (
  <SectionGroup image={props.image}>
    <SectionLogo src={props.logo} />
    <SectionTitleGroup>
      <SectionTitle>{props.title}</SectionTitle>
      <SectionText>{props.text}</SectionText>
    </SectionTitleGroup>
  </SectionGroup>
)

export default Section
