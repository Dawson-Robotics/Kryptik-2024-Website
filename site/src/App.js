
import './App.css';
import {ContentView} from './components/content.jsx'
import { useState } from 'react'


import {
  createBrowserRouter,
  RouterProvider,
  useNavigate
} from "react-router-dom";

import { HomePage } from './pages/HomePage.jsx'
import { Articles } from './pages/Articles.jsx'
import { Team } from './pages/Team.jsx'
import { Home } from './pages/Home.jsx'
import { Media } from './pages/Media.jsx'

const router  = createBrowserRouter([
  {
    path: "/media",
    element: <Media/>
  },
  {
    path: "/articles/*",
    element: <ContentView color="#fff"/>
  }, 
  {
    path: '/articles',
    element: <Articles/>
  },
  {
    path: '/team',
    element: <Team/>
  },
  {
    path: "/",
    element: <Home/>
  }
])


function App() {

  const [mdfile, setmdfile] = useState('Helloworld')

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
