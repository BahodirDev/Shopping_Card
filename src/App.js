
import './App.css';
import Footer from './Layouts/Footer';
import Header from './Layouts/Header';
import Main from './Layouts/Main';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
   <>
   <ToastContainer />
      <Header />
      <Main />
      <Footer />
   </>
  );
}

export default App;
