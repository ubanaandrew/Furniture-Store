import './App.css';
import Header from './components/header'
import Products from './components/products';
import Tab from './components/tabs';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />

      {/* Banner */}
      <div className='App-background'>
        <div className='App-background-card'>
          <h5 className='header'>New Arrival</h5>
          <h1 className='header1'>Discover our New Collection</h1>
          <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis</p>
          <button className='button'>BUY NOW</button>
        </div>
      </div>
      <div className='Tab-box Tab-banner'>
        <Tab name="Free Delivery" svg="./assets/icons/free-delivery.svg" desc="Lorem ipsum dolor sit amet."/>
        <Tab name="Support 24/7" svg="./assets/icons/support247.svg" desc="Lorem ipsum dolor sit amet."/>
        <Tab name="100% Authentic" svg="./assets/icons/authentic.svg" desc="Lorem ipsum dolor sit amet."/>
      </div>

      {/* Product */}
      <div>
        <Products />
      </div>
    </div>
  );
}

export default App;
