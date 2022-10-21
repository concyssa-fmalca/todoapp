import { useState } from 'react';
import './App.css';
import { FormNew } from './components/FormNew';
import { Button } from './components/Button';
import { Task } from './components/Task';

function App() {

  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState(0);

  const filtered = tasks.filter( 
        x => filter===0 
        || (filter===1 && !x.completed)
        || (filter===2 && x.completed)
        );

  const left = tasks.filter(x=>!x.completed).length;

  return (
        <div className='container'>
        <h1>THINGS TO DO</h1>

        <FormNew setTasks={setTasks} tasks={tasks} />              

        {      
        filtered.map( (item) => { 
                  return <Task  key={item.key} task={item} setTasks={setTasks} tasks={tasks}/>
                  })
        }

        <div className='footer'>
          <button >+</button>
          <span> {left} items left</span>
          <Button texto="All" setFilter={setFilter} />
          <Button texto="Active" setFilter={setFilter} />
          <Button texto="Completed" setFilter={setFilter} />
        </div>


    </div>    
  );
}

export default App;
