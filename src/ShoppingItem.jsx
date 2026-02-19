function ShoppingItem({ vare, onToggleKjopt, onEndreAntall }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={vare.kjopt}
        onChange={() => onToggleKjopt(vare.id)}
      />
      <label>{vare.navn}</label>
      <input
        type="number"
        value={vare.antall}
        onChange={(e) => {
          const nyttAntall = parseInt(e.target.value);
          if (nyttAntall > 0) {
            onEndreAntall(vare.id, nyttAntall);
          }
        }}
        min="1"
      />
    </li>
  );
}

export default ShoppingItem;