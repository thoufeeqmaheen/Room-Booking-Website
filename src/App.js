
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import Room from './Pages/Room'
import BookingPage from './Pages/BookingPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/room' element={<Room/>} />
      <Route path='/Booking' element={<BookingPage/>} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
