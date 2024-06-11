import reactImg from '../../assets/react-core-concepts.png'
import CoreConcept from '../CoreConcept.jsx'
import './Header.css'

const elements = ['Fundamental' , 'Crucial' , 'essential']

function getRandom(max){
  return Math.floor(Math.random() * (max+1))
}



export default function Header(){
    return (
        
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {elements[getRandom(2)]} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  
      
    )
  }