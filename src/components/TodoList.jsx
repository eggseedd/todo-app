import { TodoCard } from "./TodoCard";

export function TodoList(props) {
    const { todos, selectedTab } = props

    const todoListFilter = selectedTab === 'All' ?
        todos :
        selectedTab === 'Open' ? 
            todos.filter(val => !val.complete) :
            todos.filter(val => val.complete)

    return (
        <>
            {todoListFilter.map((todo, todoIndex) => {
                return (
                    <TodoCard 
                        key={todoIndex} 
                        todoIndex={todos.findIndex(val => val.input === todo.input)}
                        {...props}
                        todo={todo} />
                )
            })}
        </>
    )
}