import CoreConcept from "./CoreConcept"
import { CORE_CONCEPTS } from "../data.js"
import Section from "./Section.jsx"

export default function CoreConcepts(){
    return(
        <Section id="core-concepts" title="Core Concepts">
      <ul>
      {CORE_CONCEPTS.map((conceptItem)=>(
        <CoreConcept key={conceptItem.title} {...conceptItem}></CoreConcept>
      ))}

      {/* <Coreconcept title="ppppp" description="ttttt" image={im1}></Coreconcept>
      <Coreconcept title={CORE_CONCEPTS[1].title} description={CORE_CONCEPTS[1].description} image={CORE_CONCEPTS[1].image}></Coreconcept> 
      <Coreconcept {...CORE_CONCEPTS[2]}></Coreconcept>
      <Coreconcept {...CORE_CONCEPTS[3]}></Coreconcept> */}
      </ul>
    </Section>
    )
}