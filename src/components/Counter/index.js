import React from 'react';
import { useEffect, useState } from 'react';

function Counter() {
  /**
   * useState mengembalikan sepasang value (array): [0, function()]
   */
  const [angka, setAngka] = useState(0);

  function addAngka() {
    setAngka(angka + 1);
  }

  function updateDOM() {
    console.log("Lifecycle: Component dimount");

    /**
     * Melakukan side effect: mengakses dom
     */
    document.title = `Hasil: ${angka}`;
  }

  /**
   * useEffect dijalankan pada lifestyle mount dan update
   */
  useEffect(updateDOM, [angka]);

  console.log("Lifecycle: Component dirender");

  return (
    <div>
      <p>Hasil: {angka}</p>
      <button onClick={addAngka}>Add</button>
    </div>
  );
}

// export Component Counter
export default Counter;