import {Fragment } from "react";

let items = [
    'New York',
    'San Francisco',
    'Tokyo',
    'London',
    'Singapore'
];
items = [];

function ListGroup() {
  return (
    <>
        <h1> Task Manager</h1>
        {items.length === 0 ? <p>No tasks found!</p> : null}
        {items.map(item => <li key={item}>{item}</li>)}
    </>
  );
}

export default ListGroup;