import { useState } from 'react'
import './App.css'
import ToDoItem from './ToDoItem.tsx'

type ToDo = {
  id: number;
  text: string;
  completed: boolean;
}

//React.FC tagastab React komponendi
//React.FC on tüübi määrtlus
const App: React.FC = () => {
  const [toDos, setToDos] = useState<ToDo[]>([]);
  const [newToDo, setNewToDo] = useState('');
  //mis on useState
  //Tagastab massivii kus esimene element on olek 
  //ja teine finktsioon mida kasutadakse oleku värskenamiseks

const addToDo = () => {
  if (!newToDo.trim()) return; //ignore empty tasks
  setToDos([...toDos, {id: Date.now(), text: newToDo.trim(), completed: false}])
  //Date.now() annab meile unikaalse ID, mis põhineb praegusest ajast.
  //...toDos tähendab, et me võtame tühikud tekssti algusest ja lõpust, et vältida tühjade ülesannete 
  //completed: false tähendab, et uus ülessanne on algselt lõpetamata
  setNewToDo('')
  //pärast uue ülesande lisamist tühjendame sisendvälja, et kasutaja saaks kohe uue ülesande lisada 
}
  const toggleToDo = (id: number) => {
    //mapime läbi toDos massiivi ja leiame ülesande, mille ID vastab antud ID-le.
    //Kui leime selle ülesande, siis loome uue objekti, kus completed väärtus on
    //vastupidine sellele, mis see oli enne (kui see oli false, siis saab true 
    //ja vastupidi). Kõik teised ülesanded jäävad muutumatuks.
    setToDos(toDos.map(toDo => 
      toDo.id === id ? {...toDo, completed: !toDo.completed} : toDo
    ))
  }

  const deleteToDo = (id: number) => {
    //filterime toDos massiivi ja tagastame uue massiivi, 
    //mis sisaldab ainult neid ülesandeid, mille ID ei ole kustutatud.
    setToDos(toDos.filter(toDo => toDo.id !== id))
  }



  //function App() {

  

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <div className="input-row">
        <input 
          type="text"
          value={newToDo}
          onChange={e => setNewToDo(e.target.value)}
          placeholder="Add a new task"
          onKeyDown={e => e.key === 'Enter' && addToDo()}
          />
          <button onClick={addToDo}>Add</button>
      </div>
      <ul className="todo-list">
        {toDos.map(toDo => (
          <ToDoItem
            key={toDo.id}
            toDo={toDo}
            toggleToDo={toggleToDo}
            deleteToDo={deleteToDo}
            />
        ))}
      </ul>
    </div>
  )
}

export default App
