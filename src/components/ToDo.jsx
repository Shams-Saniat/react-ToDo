import React, { useState } from 'react'
import Backdrop from './Backdrop';
import Modal from './Modal';

function ToDo(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function deleteHandler() {
        setModalIsOpen(true);
    }

    function closeModalHandler(){
      setModalIsOpen(false);
    }

  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <h2 className="font-bold">{props.text}</h2>
        <div>
            <button className="btn btn-soft btn-error" onClick={deleteHandler}>Delete</button>
        </div>
      </div>
      {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
      <Backdrop />
    </div>
  );
}

export default ToDo
