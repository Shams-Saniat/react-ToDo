function Modal(props) {

    function cancelHandler() {
        props.onCancel();
    }
    function confirmHandler() {
        props.onConfirm();
    }

    return (
        <div>
            <p>Are you sure?</p>
            <button className="btn btn-soft btn-primary" onClick={props.onCancel}>
                Cancel
            </button>
            <button className="btn btn-primary" onClick={props.onCancel}>
                Confirm
            </button>
        </div>
    );
}

export default Modal;