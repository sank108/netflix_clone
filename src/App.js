import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import StreamVideo from './components/StreamVideo';
import GoToTopButton from './components/GoToTopButton';
import GenreStream from './components/GenreStream';
import StreamRowVideo from './components/StreamRowVideo';
import GenreNavComponent from './components/GenreNavComponent';
import People from './components/People';
import AboutUs from './components/AboutUs';
import FAQ from './components/FAQ';
import PrivacyPolicy from './components/PrivacyPolicy';
import AllMovies from './components/AllMovies';
import TermsOfUse from './components/TermsOfUse';

function App() {
  
  return (
    <div className="bg-black w-full max-[768px]:w-[1100px]">
      <Navbar/>
      <GoToTopButton/>


     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/streamvideo' element={<StreamVideo/>} />
      <Route path='/genre' element={<GenreStream/>} />
      <Route path='/streamrowvideo' element={<StreamRowVideo/>}/>
      <Route path='/genrelist' element={<GenreNavComponent/>} />
      <Route path='/people' element={<People/>} />
      <Route path='/aboutus' element={<AboutUs/>}/>
      <Route path='/faq' element={<FAQ/>}/>
      <Route path='/privacypolicy' element={<PrivacyPolicy/>}/>
      <Route path='/allmovies' element={<AllMovies/>}/>
      <Route path='/termsofuse' element={<TermsOfUse/>}/>
     </Routes>

     

     
    </div>
  );
}

export default App;
