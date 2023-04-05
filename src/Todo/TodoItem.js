import React from 'react'
import PropTypes from 'prop-types'

function TodoItem ({ todo, index, onChange }) {
    const classes = []

    if (todo.completed) classes.push('done')

    return (
        <li>
            <span className={classes.join('')}>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => onChange(todo.id)}
                />
                <strong>{index + 1}</strong>
                &nbsp;
                {todo.title}
            </span>
        </li>
    )
}

TodoItem.propTypes = {
    todo:PropTypes.object.isRequired,
    index:PropTypes.number,
    onChange:PropTypes.func.isRequired
}
export default TodoItem