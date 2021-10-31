function Button({ handleClick, isDisabled }) {
  return (
    <button disabled={isDisabled} onClick={handleClick}>
      Click
    </button>
  );
}

export default Button;
