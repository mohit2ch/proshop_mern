import logo from "./logo.svg";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen.js";
import Product from "./components/Product.js";
import ProductScreen from "./screens/ProductScreen.js";
import { Outlet } from "react-router";
function App() {
  return (
    <div className="App">
      <Header />
      <main className="py-3">
        <Container>
          <h1>Welcome to Proshop!</h1>
        </Container>
        <Container>
          <Outlet/>
        </Container>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
