import { Component } from "react";
import check from './check.png'

export class ToDoList extends Component {
    state = {
        userInput: '',
        toDoList: [],
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    onChangeEvent(e) {
        this.setState({userInput: e})
    }

    addItem(input) {
        let listArray = this.state.toDoList;
        if(input==='') {
            alert('Please enter a task.')
        } else {
            listArray.push(input);
            this.setState({toDoList: listArray, userInput: ''})
        }
    }

    crossTask(e) {
        const li = e.target;
        li.classList.toggle('crossed');
    }

    delItem() {
        let listArray = this.state.toDoList;
        listArray = [];
        this.setState({toDoList: listArray})
    }

    render() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>

                    <input type="text"
                    placeholder="Enter what do you want/need do ..."
                    onChange={(e) => {this.onChangeEvent(e.target.value)}}
                    value={this.state.userInput}
                    />

                    <div className="list">
                        <button onClick={() => this.addItem(this.state.userInput)} className="add">ADD</button>

                        <ul>
                            {this.state.toDoList.map((item, index) => 
                            <li onClick={this.crossTask} key={ index }>
                                <img src={check} alt="rem" width='15px' className="pic" />
                                {item}</li>
                            )}
                        </ul>

                    <button onClick={() => this.delItem()} className="del">Delete</button>
                    </div>

                </form>
            </div>
        )
    }
}