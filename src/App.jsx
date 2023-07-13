import { BrowserRouter,Routes,Route } from "react-router-dom"
import Product from "./pages/Product"
import Pricing from "./pages/Pricing"
import HomePage from './pages/HomePage';
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./components/AppLayout";

// import { createRoutesFromElements } from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}>
      <Route path="product" element={<Product/>} />
      <Route path="pricing" element={<Pricing/>}/>
      <Route path="app" element={<AppLayout/>}/>
      <Route path="*" element={<PageNotFound/>}/>
      </Route>

    </Routes>

    </BrowserRouter>
  )  
}

export default App
