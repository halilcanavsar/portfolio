function ToggleButton({ setIsOpen }) {
  return (
    <button onClick={() => setIsOpen((prev) => !prev)}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <path strokeWidth="3" stroke="black" strokeLinecap="round" />
        <path strokeWidth="3" stroke="black" strokeLinecap="round" />
        <path strokeWidth="3" stroke="black" strokeLinecap="round" />
      </svg>
    </button>
  );
}

export default ToggleButton;
