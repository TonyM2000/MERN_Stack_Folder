import './App.css';
import MyNewComponent from './components/MyNewComponent.js';

function App() {
  return (
    <div className="App">
      <MyNewComponent firstName="Jane" lastName="Doe" age= {45} haircolor="Black" />
      <MyNewComponent firstName="John" lastName="Smith" age= {88} haircolor="Brown" />
    </div>
    
  );
}


export default App;
