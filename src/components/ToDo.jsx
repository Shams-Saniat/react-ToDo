import React from 'react'

function ToDo(props) {
    function deleteHandler() {
        console.log('button clicked');
        console.log(props.text);
    }

  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <h2 className="font-bold">{props.text}</h2>
        <div>
            <button className="btn btn-soft btn-error" onClick={deleteHandler}>Delete</button>
        </div>
      </div>

    </div>
  );
}

export default ToDo
