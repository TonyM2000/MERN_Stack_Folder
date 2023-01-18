import './App.css';
import MyNewComponent from './MyNewComponent.js';

function App() {
  return (
    <div className="App">
      <MyNewComponent firstName="Anthony" lastName="Marsee" age= {23} haircolor="Brown" />
      <MyNewComponent firstName="Anthony" lastName="Marsee" age= {18} haircolor="Brown" />
      <MyNewComponent firstName="Anthony" lastName="Marsee" age= {15} haircolor="Brown" />
      <MyNewComponent firstName="Anthony" lastName="Marsee" age= {37} haircolor="Brown" />
    </div>
    
  );
}


export default App;
