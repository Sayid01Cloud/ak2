import { useState } from "react";
function farge() {
  const [farge, SetFarge] = Usestate ("Rød");


return (
  <section>
    <h1>Her er {SetFarge} RØD!</h1>
    <button onClick={() => SetFarge ("blå")}>
      Bytt til blå

    </button>

  </section>
)};


