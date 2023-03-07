import {
  Check,
  CheckCircle,
  Circle,
  FileText,
  PlusCircle,
  Trash,
} from "@phosphor-icons/react";

import { useState } from "react";

export function Task(props) {
  return (
    <div className="w-full mt-2">
      {props.ative > 0 ? (
        <div className="bg-zinc-700 text-zinc-200 rounded-lg flex flex-row items-start justify-between gap-5 p-2 ">
          <button>
            <Circle
              size={25}
              className="text-cyan-500 rounded-full hover:opacity-70"
              onClick={() => props.onCheckClick(props.content)}
            />
          </button>
          <p className="p-2 w-full">{props.content}</p>
          <button>
            <Trash 
                size={25} 
                className="text-zinc-500 hover:opacity-70" 
                onClick={() => props.onThrashClick(props.content)}
            />
          </button>
        </div>
      ) : (
        <div className="line-through opacity-50 bg-zinc-700 text-zinc-200 rounded-lg flex flex-row items-start justify-between gap-5 p-2 ">
          <button>
            <Check
              size={25}
              className="text-zinc-50 p-1 bg-violet-600 rounded-full hover:opacity-70"
              onClick={() => props.onCheckClick(props.content)}
            />
          </button>
          <p className="p-2 w-full">{props.content}</p>
          <button>
            <Trash 
                size={25} 
                className="text-zinc-500 hover:opacity-70" 
                onClick={() => props.onThrashClick(props.content)}
            />
          </button>
        </div>
      )}
    </div>
  );
}
