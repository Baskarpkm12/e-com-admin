import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layoutpage from './pages/layoutpage'
import Homepage from './pages/homepage'
import Productspage from './pages/products/productspage'
import Productsaddpage from './pages/products/productsaddpage'
import Productseditpage from './pages/products/productseditpage'
import Catagorypage from './pages/catagory/catagorypage'
import Catagoryeditpage from './pages/catagory/catagoryeditpage'
import Catagoryaddpage from './pages/catagory/catagoryaddpage'
import Userpage from './pages/users/userspage'
import Useraddpage from './pages/users/useraddpage'
import Usereditpage from './pages/users/usereditpage'
import Vendorpage from './pages/vendor/vendorpage'
import Vendoraddpage from './pages/vendor/vendoraddpage'
import Vendoreditpage from './pages/vendor/vendoreditpage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layoutpage/>}>
          <Route index element={<Homepage />}></Route>
          <Route path='/products' element={< Productspage />}></Route>
          <Route path='/products/add' element={< Productsaddpage />}></Route>
          <Route path='/products/edit/:id' element={< Productseditpage />}></Route>
          <Route path='/catagory' element={ < Catagorypage /> }></Route>
          <Route path='/catagory/add' element={ < Catagoryaddpage />}></Route>
          <Route path='/catagory/edit/:id' element={< Catagoryeditpage />}></Route>
          <Route path='/users' element={ <Userpage/> }></Route>
          <Route path='/users/add' element={ < Useraddpage />}></Route>
          <Route path='/users/edit/:id' element={< Usereditpage />}></Route>
          <Route path='/vendor' element={ <Vendorpage/> }></Route>
          <Route path='/vendor/add' element={ < Vendoraddpage />}></Route>
          <Route path='/vendor/edit/:id' element={< Vendoreditpage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
