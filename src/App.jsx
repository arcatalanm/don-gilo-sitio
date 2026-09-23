import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './index.css'
import TopBar from './components/layout/TopBar'
import Navbar from './components/layout/NavBar'

function App() {
  return (
    <>
    {/* Header */}
    <header>
      <TopBar/>
      <Navbar/>
    </header>

    {/* Main */}
    <main>

    </main>
    </>
  )
}

export default App
