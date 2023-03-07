import { Check, CheckCircle, Circle, FileText, PlusCircle, Trash } from "@phosphor-icons/react";
import { useState } from "react";
import todoLogo from "./assets/logo.svg";
import clipBoard from "./assets/Clipboard.svg";
// import reactLogo from './assets/react.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col w-full h-screen bg-zinc-800">
      <header className="flex justify-center w-full h-60 bg-zinc-900">
        <img src={todoLogo} alt="logo" />
      </header>
      <body className="px-20">
        <div className="flex w-full -mt-8">
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            className="bg-zinc-700 rounded-lg w-full text-gray-400 pl-5 focus-visible:outline-cyan-600 "
          />
          <button className="bg-cyan-600 hover:bg-cyan-700 rounded-lg py-4 px-5 w-1/10 ml-2 text-white font-bold flex justify-center items-center gap-1">
            Criar
            <PlusCircle size="20" weight="bold" />
          </button>
        </div>
        <div className="h-full mt-20">
          <div className="font-bold flex justify-between mb-5">
            <div className="flex items-center gap-2">
              <p className="text-cyan-500">Tarefas criadas</p>
              <div className="rounded-full bg-zinc-700 px-2 text-sm text-zinc-100">
                0
              </div>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-violet-600">Concluídas</p>
              <div className="rounded-full bg-zinc-700 px-2 text-sm text-zinc-100">
                5
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center border-t-2 border-zinc-700 text-zinc-500 h-full gap-3">
            <img src={clipBoard} alt="logo" />
            <br />
            <b>Você ainda não tem tarefas cadastradas</b>
            <p>Crie tarefas e organize seus itens a fazer</p>

            <div 
            disabled
            className="disabled:line-through disabled:opacity-50 bg-zinc-700 text-zinc-200 rounded-lg flex flex-row items-start justify-between gap-5 p-2 ">
              <button >
                {/* <Check size={25} className='text-zinc-50 p-1 bg-violet-600 rounded-full hover:opacity-70'/> */}
                <Circle size={25} className='text-cyan-500 rounded-full hover:opacity-70'/>
              </button>
              <p className="p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime vero, cumque earum, reiciendis sapiente et dolore officia repellat aspernatur est sunt ea incidunt? Ipsam odit aperiam illo reprehenderit, sapiente repellat.</p>
              <button>
                <Trash size={25} className='text-zinc-500 hover:opacity-70'/>
              </button>
            </div>

            <div className="bg-zinc-700 opacity-50 text-zinc-200 rounded-lg flex flex-row items-start justify-between gap-5 p-2">
              <button >
                <Check size={25} className='text-zinc-50 p-1 bg-violet-600 rounded-full hover:opacity-70'/>
                {/* <Circle size={25} className='text-cyan-500 rounded-full hover:opacity-70'/> */}
              </button>
              <p className="p-2 line-through">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime vero, cumque earum, reiciendis sapiente et dolore officia repellat aspernatur est sunt ea incidunt? Ipsam odit aperiam illo reprehenderit, sapiente repellat.</p>
              <button>
                <Trash size={25} className='text-zinc-500 hover:opacity-70'/>
              </button>
            </div>

          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
