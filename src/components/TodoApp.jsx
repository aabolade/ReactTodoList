import React from 'react';
import {connect} from 'react-redux';
import TodoList from './TodoList';
import * as actionCreators from '../action_creators';

export default class TodoApp extends React.Component {
  render() {
    return <div>
      <section className="todoapp">
        <TodoList {...this.props} />
        <TodoTools changeFilter={this.props.changeFilter}
                    filter={this.props.filter}
                    nbActiveItems={this.getNbActiveItems()} />
      </section>
      <Footer />
    </div>
  }
};

function mapStateToProps(state) {
  return {
    todos: state.get('todos'),
    filter: state.get('filter')
  };
}

export const TodoAppContainer = connect(mapStateToProps, actionCreators)(TodoApp);
