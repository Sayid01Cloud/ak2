import { useState } from 'react';
import AddForm from './AddForm.jsx';
import ShoppingList from './ShoppingList.jsx';

function App() {
  const [varer, setVarer] = useState([
    { id: 1, navn: 'Melk', antall: 2, kjopt: false },
    { id: 2, navn: 'Egg', antall: 1, kjopt: true }
  ]);
  const [nesteId, setNesteId] = useState(3);

  const leggTilVare = (navn, antall) => {
    const nyVare = {
      id: nesteId,
      navn: navn,
      antall: antall,
      kjopt: false
    };
    setVarer([nyVare, ...varer]); // Ny vare først i listen
    setNesteId(nesteId + 1);
  };

  const toggleKjopt = (id) => {
    setVarer(varer.map(vare =>
      vare.id === id
        ? { ...vare, kjopt: !vare.kjopt }
        : vare
    ));
  };

  const endreAntall = (id, nyttAntall) => {
    setVarer(varer.map(vare =>
      vare.id === id
        ? { ...vare, antall: nyttAntall }
        : vare
    ));
  };

  return (
    <main>
      <h1>Handleliste</h1>
      <AddForm onLeggTilVare={leggTilVare} />
      <ShoppingList
        varer={varer}
        onToggleKjopt={toggleKjopt}
        onEndreAntall={endreAntall}
      />
    </main>
  );
}

export default App;
