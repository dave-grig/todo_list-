import React from 'react';

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.items,"mmm")
    }

    render() {
        
        console.log(this.props.items,"gggg");
        return this.addTodo();
    }

    addTodo = () => {
        let addedItems = this.props.items.map(e => {
            if (e.text) {
                console.log("kkkkkk")
                return (
                    <div className="todo__item" key={e.todoKey}>
                        <p className="todo__item-text">{e.text}</p>
                        <a href="#" className="todo__item-btn--delete" onClick={() => this.props.onDelete(e.todoKey)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#E7621D" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                            </svg>
                        </a>
                    </div>
                )
            }
        });

        return addedItems.length ? addedItems : null;
    }

    
    

    
}

export default TodoItem;