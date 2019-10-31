function SpecialCharacters({ insertSpecialCharacter }) {
  function handleClick(event) {
    const { value } = event.target;
    insertSpecialCharacter(value);
  }
  return (
    <div className="specialCharacters">
      <input value="ā" type="button" onClick={handleClick} />
      <input value="ū" type="button" onClick={handleClick} />
      <input value="ī" type="button" onClick={handleClick} />
      <input value="ñ" type="button" onClick={handleClick} />
      <style jsx>{`
        .specialCharacters {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </div>
  );
}

export default SpecialCharacters;
