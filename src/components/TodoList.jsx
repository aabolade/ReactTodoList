import React from 'react';
import TodoItem from './TodoItem';
import PureRenderMixin from 'react-addons-pure-render-mixin'

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  isCompleted(item) {
    return item.get('status') === 'completed';
  }
  getItems() {
    if (this.props.todos) {
      return this.props.todos.filter(
        (item) => this.props.filter === 'all' || item.get('status') === this.props.filter
      );
    }
    return [];
  }
  render() {
    return <section className="main">
      <ul className="todo-list">
        {this.getItems().map(item =>
          <TodoItem key={item.get('text')}
                    text={item.get('text')}
                    id={item.get('id')}
                    isCompleted={this.isCompleted(item)}
                    isEditing={item.get('editing')}
                    doneEditing={this.props.doneEditing}
                    cancelEditing={this.props.cancelEditing}
                    toggleComplete={this.props.toggleComplete}
                    deleteItem={this.props.deleteItem}
                    editItem={this.props.editItem}/>
        )}
      </ul>
    </section>
  }
};
