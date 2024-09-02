import { BrowserRouter  as Router, Routes, Route} from 'react-router-dom';
import Login from "./pages/login";
import Create from './pages/create';
import Layout from './layout';
import Home from './pages/main/home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            {/* <Route path="about" element={<About />} />
            <Route path="resume" element={<Resume />} />
            <Route path="impact" element={<Impact />} /> */}
        </Route>
        <Route path='account'>
          <Route path='login' element={<Login />} />
          <Route path='create' element={<Create />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
