import React from 'react';

/**
 * Membuat Component Hello
 */
function Hello(props) {
  // Destructing props
  const { name } = props;

  return (
    <div className="hello">
      <h2>Hello React</h2>
      <p>Saya {name} Frontend Engineer</p>
    </div>
  );
}

// export Component Hello
export default Hello;
