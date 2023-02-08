import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/form';
import Age from './components/age';
import StudentSubject from './components/student_subject';

function App() {
  return (
    <div className="App">
      <Header />
      <ReactIntro />
      <Form />
      <Age />
      <StudentSubject />
      <Footer name="Newton" />
    </div>
  );
}

function ReactIntro() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  )
}

export default App;
