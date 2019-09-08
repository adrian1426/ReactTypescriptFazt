import React,{Component} from 'react';
import {ITask} from './Task';

class TaskForm extends Component<ITaskFormProps,any>{

    constructor(props: ITaskFormProps){
        super(props);
        this.state={
            title:'',
            description:''
        }
    }

    //para generar el id
    getCurrentTimesTamp() :number{
        const date: Date = new Date();
        return date.getTime();
       //return new Date().getTime();
    }

    handleNewtask(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();

        const newTask : ITask ={
            id:this.getCurrentTimesTamp(),
            title:this.state.title,
            description:this.state.description,
            completed:false
        }

        this.props.addNewTask(newTask);
        this.setState({
            title:'',
            description:''
        });
    }

    handleInputchange(e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>){
        const {name,value} =e.target;
        this.setState({
            [name]:value
        });
        // console.log(this.state);
    }

    render(){
        return(
            <div className="card card-body">
                    <form onSubmit={e => this.handleNewtask(e)}>
                        <div className="form-group">
                            <input 
                            type="text"
                            name="title"
                            onChange={e => this.handleInputchange(e)}
                            className="form-control"
                            placeholder="titulo de la tarea"
                            value={this.state.title}/>
                        </div>

                        <div className="form-group">
                            <textarea 
                            name="description"
                            onChange={e => this.handleInputchange(e)}
                            className="form-control"
                            placeholder="descripcion de  la tarea"
                            value={this.state.description}>
                            </textarea>
                        </div>
                        
                        <button 
                            type="submit"   
                            className="btn btn-primary btn-block">Guardar
                        </button>
                    </form>
            </div>
        );
    };
}

interface ITaskFormProps{
    addNewTask : (task: ITask) => void;
}

interface ITaskFormState{
    title: string;
    description: string;
}

export default TaskForm;