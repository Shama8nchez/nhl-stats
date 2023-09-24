import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavMUI from './components/Nav/NavMUI'
import Teams from './components/Teams/Teams'

function App() {

  return (
    <>
      <NavMUI />
      <Routes>
        <Route path='/teams' element={<Teams />} />
      </Routes>
    </>
  )
}

export default App
