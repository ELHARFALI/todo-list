import {  useState } from "react";
import { FaTrash } from "react-icons/fa";

import { nanoid } from "nanoid";

function App() {
  const [value, setValue] = useState('')
  const [text, setText] = useState([])
  const [completed, setCompleted] = useState(false)

  

  const handleChange = (e) => {
    const text = e.target.value
    setValue(text)
  }

  const addTask = () => {
    if (value) {
      const newTask = {
        id: nanoid(),
        text: value
      }
      setText((prev) => [...prev, newTask])
      setValue('')
    }
    return
  }

  const deleteTask = (id) => {
    const newTasks = text.filter((t) => t.id !== id)
    setText(newTasks)
  }

  return (
    <main className="min-h-[100vh] bg-[#222831] text-white">
      <header className="py-6 lg:py-12 px-4 lg:px-0 flex justify-center items-center">
        <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">To-Do list</h1>
      </header>
      <div className="max-w-[1440px] mx-auto px-4 lg:px-0">
        <form className="flex justify-center items-center">
          <input type="text" value={value} onChange={handleChange} className="w-[400px] lg:w-[550px] h-[40px] lg:h-[45px] rounded-tl-lg rounded-bl-lg  pl-2 text-black focus:outline-none text-lg font-medium" placeholder="Something To Do..." />
          <button type="button" onClick={addTask} className="px-3 h-[40px] lg:h-[45px] bg-[#00ADB5] rounded-tr-lg rounded-br-lg font-medium text-lg hover:opacity-80">Add</button>
        </form>
        <div className="mt-8 lg:mt-10  p-4 rounded-lg flex justify-center items-center flex-col">
          {text.length > 0 ? <h1 className="text-xl lg:text-2xl text-[#EEEEEE] mb-6">Tasks:</h1> : null}
          <div className="grid gap-y-2">
            {text.map((t) => {
              const {id, text} = t
              return (
                <div className={`
                  ${completed ? 'w-[400px] lg:w-[550px] flex justify-between items-center bg-[#393E46] text-white p-2 lg:p-3 rounded-lg' : 'w-[400px] lg:w-[550px] flex justify-between items-center bg-[#CBF1F5] text-black p-2 lg:p-3 rounded-lg'}
                `}  key={id}>
              <div className="flex gap-x-3">
              <input type="checkbox" name="checkbox" checked={completed} onChange={() => setCompleted(!completed)} />
                    <h3 className="text-lg lg:text-xl font-medium">{!completed ? text : <strike>{text}</strike>}</h3>
              </div>
              <div className="flex justify-center items-center">
                <button  type="button" className="p-2 text-white bg-red-500 hover:bg-red-400 rounded-lg" onClick={() => deleteTask(id)}>
                  <FaTrash className="lg:text-[18px]" />
                </button>
              </div>
            </div>
              )
            })}
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
