import './App.css';
import 'react-toastify/dist/ReactToastify.css'
import { GlobalStyle } from './styles/global';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "../src/components/Footer/Footer";


function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
