import React, { useState } from 'react'
import uuid4 from "uuid4";
function App() {
  const [List, setList] = useState([])
  const [task, setTask] = useState("")
  const [editId, setEditId] = useState("")


  const addTodo = () => {
    const newTask = {
      id: uuid4(),
      task: task,
      action: "pending...",
    }
    setList([...List, newTask]);
    setTask("");
  }
  const DeleteList = (x) => {
    const newList = List.filter((i) => (i.id != x))
    setList(newList)
  }
  const CompleteList = (x) => {
    const newList = List.map((i) => i.id === x ? { ...i, action: "complete" } : i
    )
    setList(newList)
  }
  const updateTodo = () => {
    const newList = List.map((i) => i.id === editId ? { ...i, task: task } : i)
    setList(newList)
    setTask("")
    setEditId("")
  }

  return (
    <div>
      <div className="row m-2">
      <div className="col-auto">
      <input onChange={(e) => setTask(e.target.value)} className='m-2 mb-4 p-1   border-success ' placeholder='Enter Any Task' value={task} />
      {editId !== "" ? <button onClick={() => updateTodo()} className='btn btn-warning m-1'>Update</button>
        : <button onClick={() => addTodo()} className='btn btn-warning  ' >Add</button>}
      </div>
      <table className="table table-hover table-bordered">
        <thead>
          <th>S.no</th>
          <th>Task</th>
          <th>Action</th>
        </thead>
        <tbody>
          {List.map((i, n) => (
            <tr>
              <td> {n + 1}</td>
              <td>{i.task}</td>
              <td>{i.action}</td>

              <button onClick={() => {
                setTask(i.task)
                setEditId(i.id)
              }} className="btn btn-info m-1"> Edit </button>

              <button onClick={() => DeleteList(i.id)} className='btn btn-danger m-1'> Delete </button>

              <button onClick={() => CompleteList(i.id)} className=' btn btn-primary'> Complete </button>

            </tr>))}
        </tbody>
      </table>
      </div>
    </div>
  )
}
export default App