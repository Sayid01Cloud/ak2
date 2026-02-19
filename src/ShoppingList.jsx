import ShoppingItem from './ShoppingItem.jsx';

function ShoppingList({ varer, onToggleKjopt, onEndreAntall }) {
  return (
    <section>
      <h2>Handleliste</h2>
      <ul>
        {varer.map((vare) => (
          <ShoppingItem
            key={vare.id}
            vare={vare}
            onToggleKjopt={onToggleKjopt}
            onEndreAntall={onEndreAntall}
          />
        ))}
      </ul>
    </section>
  );
}

export default ShoppingList;