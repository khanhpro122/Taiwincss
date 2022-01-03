import { useEffect, useState } from 'react';
import './App.css';
import Content from './components/Content/Content';
import NavBar from './components/NavBar/NavBar';
import Slogan from './components/Slogan/Slogan';

function App() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  })
  const [isMobile, setMobile] = useState(false)
  useEffect(() => {
    const handleSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    window.addEventListener("resize", handleSize);
    handleSize()
    return () => window.removeEventListener("resize", handleSize)
  }, [])
  useEffect(() => {
    if(windowSize.width < 769) {
        setMobile(true)
      }
      else {
        setMobile(false)
      }
  }, [windowSize])
  return (
    <div className="app">
        <NavBar isMobile={isMobile} />
        <Slogan />
        <Content />
    </div>
  );
}

export default App;
