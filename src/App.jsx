import './App.css'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
// import { Dashboard } from './components/Dashboard'
import { Home } from './Pages/Home';
import { SignIn } from './Pages/Signin';
import { SignUp } from './Pages/SignUp';
import { Dashboard } from './Pages/Dashboard';
import { Article } from './Pages/Article';
import {Setting} from './Pages/Setting';
import './index.css' 

function App() {

 return (
   <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/articles" element={<Article />} />
      <Route path="/setting" element={<Setting />} />
      
    </Routes>
    </BrowserRouter>
      </div>
      );
}

export default App;






