import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';
import Footer from './components/Footer';

function App() {
  const message = "just trying this out"
  return (
   <div>
      <h1>{message}</h1>
      <MyNav/>
      <Welcome msg={message}/>
      <AllTheBooks/>
      <Footer msg={message}/>
   </div>
  );
}

export default App;
