import { HashRouter as Router , Route} from 'react-router-dom';
import './App.css'

function App() {
  

  return (
    <>
    <Router>
      <Route to='/' element={<h1>Home</h1>}></Route>
      <Route to='/users' element={<h1>Users</h1>}></Route>

    </Router>
    </>
  )
}

export default App
