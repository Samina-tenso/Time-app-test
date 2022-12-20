import { TrashIcon } from '@heroicons/react/24/outline'
import { MinusCircleIcon } from '@heroicons/react/24/solid'
import { ClockIcon } from '@heroicons/react/24/outline'
import { useTaskList } from '../../Hooks/useTaskList'

export function TaskList() {
    const [stateTask, { deleteTask, removeTime, selectTask, }] = useTaskList();
    return (
        <div className="bg-slate-800 pb-20">
            <ul>
                {
                    stateTask.task.map(task => {
                        return <div className="flex py-6 align-center bg-slate-900" key={task.id} >
                            <span className=" basis-3/5" data-testid="selected-item" onClick={() => selectTask(task.id, task.title, task.projectTitle, task.projectId)} >
                                <li className="text-xl pt-3" value={task} data-testid="task-item" > {task.title} {task.projectTitle}{task.time ? <span>{task.time.hours + ":"}{task.time.minutes + ":"}{task.time.seconds}</span> : null}  </li>
                            </span>
                            <button className="basis-1/5 rounded-full pt-3 hover:bg-slate-600 active:text-slate-900" onClick={() => removeTime(task.id)}><ClockIcon className="absolute  inline w-6 " /><MinusCircleIcon className=" relative m-3 inline w-4" /></button>
                            <button className="basis-1/5 rounded-full pt-3 hover:bg-slate-600 active:text-slate-900 mr-6" onClick={() => deleteTask(task.id)}><TrashIcon className="inline w-6 mb-3 " /></button>
                        </div>
                    })
                }
            </ul >
        </div >
    )
}