import './App.css';
import { DataStore } from '@aws-amplify/datastore';
import { Todo } from './models';

function App() {
  
  const addTask = async () =>{
    await DataStore.save(
      new Todo({
      "name": "Lorem ipsum dolor sit amet",
      "description": "Lorem ipsum dolor sit amet"
    })
  );

  const getModel = async () => {
    const models = await DataStore.query(Todo);
    console.log(models);
  }
  };
  
  return (
    <div className="App">
      <button onClick={addTask}>タスク取得</button>
      <button onClick={addTask}>タスク追加</button>
    </div>
  );
}

export default App;
