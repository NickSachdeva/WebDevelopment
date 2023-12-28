import './App.css';
import Person from './components/Person';
import Product from './components/Product';

function App() {
  return (
    //these attributes inside person component are called props(properties)
    <section>
      
      <Person name="kartik" age="22" favColor="orange"/> 
      <Person name="vivek"  age="24" favColor="red"/>
      <Person name="Sabel"  age="25" favColor="pink"/>
      <Person name="Nikhil" age="27" favColor="blue"/>
      
      <Product name="Nike Shoes" price={10} />
      <Product name="Reebok Shoes" price={20}/>
      <Product name="Adidas Shoes" price={30}/>
      <Product name="Sketchers Shoes" price={40}/>
      <Product name="Puma Shoes" price={50}/>
      <Product name="Redtape Shoes" price={60}/>
    
    </section>
  )
}

export default App;