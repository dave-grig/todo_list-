import '../App.css';
import React from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoKey: this.generateUniqueKey(),
      todoText: "",
      items: []
    }
  }

  render() {
    const onChange = this.onChange;
    const items = this.state.items;
    
    return (
      
      <div className="App">
        <TodoForm onChange={onChange} buttonHandler={this.buttonHandler}/>
        <TodoItem items={items} onDelete={this.onDelete}/>
      </div>
    );
  }

  buttonHandler = (e) => {
    e.preventDefault();

    const text = this.state.todoText;
    const key = this.state.todoKey;

    if (!text) {
      return;
    }

    const newItem = {text: text,todoKey: key};
    this.setState({
      todoKey: this.generateUniqueKey(), 
      items: [...this.state.items, newItem]
    }); 
      
    
  }
  
  onChange = (todoText) => {
    this.setState({todoText: todoText});
    console.log(this.state);
  }

  onDelete = (key) => {
    console.log()
    this.setState({items: this.state.items.filter(el => key !== el.todoKey)});
  }

  generateUniqueKey = () => {
    let arr = [1,2,3,4,5,6,7,8,9];
    return arr.sort((a, b) => 0.5 - Math.random()).join("");
  }

}



export default App;
