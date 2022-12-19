//IMPORTS/////////////////////////////
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from "./Pages/Login"
import SignUp from './Pages/SignUp'
import Home from './Pages/Home'
import Friends from './Pages/Friends'
import ProfilePage from './Pages/ProfilePage'
import "./index.css";

//FUNÇÃO QUE DEFINE AS ROTAS/////////////////////////////
const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
  },
  {
    path: '/friends',
    element: <Friends />,
  },
]);

function App() {
  return < RouterProvider router={router} />
}

export default App