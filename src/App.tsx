import React,{Component} from 'react';
import TaskForm from './components/Taskform';
import {ITask} from './components/Task';
import TaskList from './components/TaskList';

class App extends Component<IProps,Istate>{

constructor(props:IProps){
  super(props);
  this.state={
    tasks:[]
  };
}

addNewTask = (task: ITask) =>{
    this.setState({
      tasks: [...this.state.tasks,task]
    },() => console.log(this.state));
}

deleteTask = (id:number) =>{
  const tasks :ITask[]=this.state.tasks.filter(
    (task:ITask) =>task.id !== id
  );

  this.setState({
    tasks
  });
}

  render(){
    return(
      <div>
       <nav className="navbar navbar-light bg-light">
         <a className="navbar-brand" href="/">{this.props.title}</a>
       </nav>

        <div className="container p-4">
          <div className="row">

            <div className="col-md-4">
            <TaskForm addNewTask={this.addNewTask}/>
            </div>

            <div className="col-md-8">
              <div className="ro">
              <TaskList 
              tasks={this.state.tasks}
              deleteTask={this.deleteTask}/>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

//interface para propiedades
interface IProps{
  title:string;
}

//interface para el estado
interface Istate{
  tasks:ITask[];
}

export default App;
