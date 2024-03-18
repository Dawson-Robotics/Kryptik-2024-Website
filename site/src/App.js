
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
import { Team } from './pages/team-page/Team.jsx'
import { Home } from './pages/Home.jsx';
import { Index } from './pages/Index.jsx';
import { Media } from './pages/Media.jsx'
import { Mission } from './pages/Mission.jsx'
import { PageFrame } from './components/pageframe.jsx';

function App() {

  const [lang, setLang] = useState(localStorage.getItem('lang')?? 'EN');

  const router  = createBrowserRouter([
    {
      path: "/mission",
      element: <Mission lang={lang} setLang={(lang) => {localStorage.setItem("lang", lang); setLang(lang); }}/>
    },
    {
      path:"/media",
      element: <Media lang={lang} setLang={(lang) => {localStorage.setItem("lang", lang); setLang(lang); }}/>
    },
    {
      path: "/articles/*",
      element: <ContentView color="#fff"/>
    }, 
    {
      path: '/articles',
      element: <PageFrame/>
    },
    {
      path: '/team',
      element: <Team/>
    },
    {
      path: "/",
      element: <Home lang={lang} setLang={(lang) => {localStorage.setItem("lang", lang); setLang(lang); }}/>
    },
    {
      path: "/index",
      element: <Index lang={lang} setLang={(lang) => {localStorage.setItem("lang", lang); setLang(lang); }}/>,
      children: [
        {
          path: 'departments',
          element: <Articles/>
        },
        {
          path: 'logs',
          element: <Articles/>
        }
      ]
    }
  ])
  

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
