import Header from '../src/components/header'
import Skills from '../src/components/skills'
import Intro from '../src/components/aboutme'
import Navbar from '../src/components/navbar'
import Projects from '../src/components/projects'
import Footer from '../src/components/footer'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Projects/>
      <Intro/>
      <Footer/>
    </div>
  );
}

export default App;
