
import './App.css';
import List from './component/List';
import AddModal from './component/AddModal';


function App() {
  return (
    <div className="App"><h1>To DO LIST</h1>
    
    <AddModal/>
    <List />
    </div>
  );
}

export default App;
