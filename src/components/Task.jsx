
export const Task = ({task, setTasks, tasks}) => {     

    const handleClick = () => {        
        setTasks(tasks.map(item => item.key === task.key? {...item, completed : !item.completed } :item ))        
    }

    const checked = task.completed?"checked":"";

  return (
    <div >
        <input 
            type="checkbox" 
            onClick={handleClick}   
            defaultChecked={checked}         
            />{task.taskName}
    </div>
  )
}
