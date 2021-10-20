import About from "./components/about/About.jsx";
import Intro from "./components/introduction/Intro.jsx";
import ProductList from "./components/productlist/ProductList.jsx";

const App = () => {
  return (<div>
    <Intro />
    <About/>
    <ProductList/>
    </div>
  )
};

export default App;