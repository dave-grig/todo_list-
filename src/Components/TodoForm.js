import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {  
      super(props);
  }

  inputHandler = (e) => {
      this.props.onChange(e.target.value);
  }

  onClick = (e) => {
    this.props.buttonHandler(e);
  }

  render() {
    return (
      <form className="todo__form">
        <input type="text" className="todo__input--text" placeholder="Type todo..." onChange={this.inputHandler}/>
        <button className="todo__button--add" onClick={this.onClick}>Add</button>
      </form>
    );
  }

  
}

export default TodoForm;