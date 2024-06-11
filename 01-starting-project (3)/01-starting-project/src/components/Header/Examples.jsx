import { useState } from 'react';

import TabButton from "../../TabButton.jsx"
import { EXAMPLES } from "../../data.js"
import Section from '../Section.jsx';
import Tabs from '../Tabs.jsx';


export default function Examples(){

    const [ selectedTopic , setSelectedTopic ] = useState();
  
    function  handleSelect( selectedButton){
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
}

    let content =  !selectedTopic ?(<p>please select a topic</p> ): 
      (
      <div id='tab-content'>
        
        <h3> {EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
         <code>
         {EXAMPLES[selectedTopic].code}
         </code>
        </pre>
         
       </div>
      )
    return(
        <Section id='examples' title="Examples">
     
      

      <Tabs 
      // ButtonsContainer="menu"
      buttons={
        <>
          <TabButton isSelected={selectedTopic === 'components' } onClick={ () => handleSelect('components')}>components</TabButton>
          <TabButton isSelected={selectedTopic === 'jsx' } onClick={ () => handleSelect('jsx')}>jsx</TabButton>
          <TabButton isSelected={selectedTopic === 'props' } onClick={() => handleSelect('props')}>props</TabButton>
          <TabButton isSelected={selectedTopic === 'state' } onClick={() => handleSelect('state')}>state</TabButton>
        </>
      }></Tabs>
      {content}
      </Section>
    )
}

