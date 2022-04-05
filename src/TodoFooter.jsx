function TodoFooter({todos,onClear}){
   const completedSize = todos.filter((todo)=>todo.isCompleted).length;
    return(
        <div>
            <span>{completedSize}/{todos.length} Completed</span>
            <button onClick={onClear}>Clear Completed</button>
        </div>
    )
}
export default TodoFooter