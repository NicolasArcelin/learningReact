function Modal(props) {
  function cancelHandler() {
    props.onCancel();
    console.log("Canceled!");
  }
  function confirmHandler() {
    props.onConfirm();
    console.log("Confirmed!");
  }

  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={cancelHandler}>
        Cancel
      </button>
      <button className="btn" onClick={confirmHandler}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
