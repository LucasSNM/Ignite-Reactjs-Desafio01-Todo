import {
  Check,
  CheckCircle,
  Circle,
  FileText,
  PlusCircle,
  Trash,
} from "@phosphor-icons/react";

import { useState } from "react";

import todoLogo from "./assets/logo.svg";
import clipBoard from "./assets/Clipboard.svg";
// import reactLogo from './assets/react.svg'
// import './App.css'

import { Task } from "./Components/Task";

let tasksBase = [
  {
    ative: 1,
    content:
      "Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada",
  },
  {
    ative: 1,
    content:
      "Mé faiz elementum girarzis, nisi eros vermeio.Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.Quem num gosta di mé, boa gentis num é.",
  },
  {
    ative: 0,
    content:
      "Suco de cevadiss deixa as pessoas mais interessantis.Casamentiss faiz malandris se pirulitá.Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.",
  },
  {
    ative: 0,
    content:
      "Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis!Si num tem leite então bota uma pinga aí cumpadi!Paisis, filhis, espiritis santis.Copo furadis é disculpa de bebadis, arcu quam euismod magna.",
  },
];

export function App() {

  if(localStorage.getItem('tasks') != null){
    tasksBase = JSON.parse(localStorage.getItem('tasks'))
  }

  const [tasks, setTasks] = useState(tasksBase);
  const [tasksText, setTasksText] = useState("");

  localStorage.setItem('tasks', JSON.stringify(tasks))

  let finished = tasks.filter((e) => {
    return e.ative == 0;
  });

  function handleCreateNewTask() {
    if(tasksText != ''){
      setTasks([
        ...tasks,
        {
          ative: 1,
          content: tasksText,
        },
      ]);
    }
    
    setTasksText("");
  }

  function disableTask(taskToDisable) {
    let tasksRefresh = []
    tasks.map((task) => {
      task.content == taskToDisable ?
        task.ative == 0 ?
          tasksRefresh.push({ative: 1, content: taskToDisable})
          :
          tasksRefresh.push({ative: 0, content: taskToDisable})
      : tasksRefresh.push(task)
    })
    setTasks(tasksRefresh);
  }

  function deleteTask(taskToDelete) {
    const tasksRefresh = tasks.filter((e) => e.content !== taskToDelete);
    setTasks(tasksRefresh);
  }

  let tasksSorted = tasks.sort((a,b) => {return b.ative - a.ative})

  return (
    <div className="flex flex-col w-full h-full bg-zinc-800">
      <header className="flex justify-center h-60 bg-zinc-900">
        <img src={todoLogo} alt="logo" />
      </header>
      <div className="px-20">
        <div className="flex w-full -mt-8">
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            className="bg-zinc-700 rounded-lg w-full text-gray-400 pl-5 focus-visible:outline-cyan-600 "
            onChange={() => setTasksText(event.target.value)}
            value={tasksText}
          ></input>
          <button
            onClick={() => handleCreateNewTask()}
            className="bg-cyan-600 hover:bg-cyan-700 rounded-lg py-4 px-5 w-1/10 ml-2 text-white font-bold flex justify-center items-center gap-1"
          >
            Criar
            <PlusCircle size="20" weight="bold" />
          </button>
        </div>
        <div className="h-full mt-20">
          <div className="font-bold flex justify-between mb-5">
            <div className="flex items-center gap-2">
              <p className="text-cyan-500">Tarefas criadas</p>
              <div className="rounded-full bg-zinc-700 px-2 text-sm text-zinc-100">
                {tasks.length}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-violet-600">Concluídas</p>
              <div className="rounded-full bg-zinc-700 px-2 text-sm text-zinc-100">
                {`${tasks.length} de ${finished.length}`}
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center border-t-2 border-zinc-700 text-zinc-500 h-full gap-1">
            {tasks.length > 0 ? (
              
              tasksSorted.map((task) => (
                <Task
                  ative={task.ative}
                  content={task.content}
                  onCheckClick={disableTask}
                  onThrashClick={deleteTask}
                />
              ))
            ) : (
              <div className="flex flex-col justify-center items-center w-full mt-20">
                <img src={clipBoard} alt="logo" className="w-28" />
                <br />
                <b>Você ainda não tem tarefas cadastradas</b>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
