import Container from 'react-bootstrap/Container';
import "../node_modules/bootstrap/scss/bootstrap.scss";
import Home from './components/pages/Home';
import SinglePost from './components/pages/SinglePost';
import './App.scss';
/**app header */
 import Header from './components/shared/Header';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <Container fluid>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="SinglePost/:postId" element={<SinglePost/>}></Route>
      </Routes>
      
    </Container>
    );
}

export default App;
