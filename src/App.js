import Header from './components/Header'
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from './GlobalStyle'
import Movie from './components/Movie'
import NotFound from './components/NotFound.jsx'
import UseProvider from './context'
import Login from './components/Login'

function App() {
  return (
    <Router>
      <UseProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/:movieId" element={<Movie />} /> {/*動態參數 :movieId*/}
          <Route path="/*" element={<NotFound />} /> {/*若所有路由都匹配不上時*/}
        </Routes>
        <GlobalStyle />
      </UseProvider>
    </Router>
  )
}

export default App
