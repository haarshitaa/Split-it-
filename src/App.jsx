import './App.css'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
// import { Dashboard } from './components/Dashboard'
import { Home } from './Pages/Home';
import { SignIn } from './Pages/Signin';
import { SignUp } from './Pages/Signup';
import { Dashboard } from './Pages/Dashboard';
import { Article } from './Pages/Article';

function App() {

 return (
   <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path="/articles" element={<Article />} />
      
    </Routes>
    </BrowserRouter>
      </div>
      );
}

export default App;






