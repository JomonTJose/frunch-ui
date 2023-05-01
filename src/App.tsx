import HomePage from './pages/home';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Products from './components/productsList';
import './index.css';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <div>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path='/restaurants/:resid' element={<Products />} />
          </Routes>
        </Layout>
      </Router>

    </div>
  )
}

export default App;
