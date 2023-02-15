import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Navbar } from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import './App.css';
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { About } from "./pages/About"
import { Product1 } from "./pages/products/Product1"
import { Product7 } from "./pages/products/Product7"
import { Product13 } from "./pages/products/Product13"
import { Product19 } from "./pages/products/Product19"

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/product1" element={<Product1 />} />
          <Route path="/product7" element={<Product7 />} />
          <Route path="/product13" element={<Product13 />} />
          <Route path="/product19" element={<Product19 />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  )
}

export default App
