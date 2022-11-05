import React from 'react';
import D20221103 from './Component/D20221103.js';
import D20221104 from './Component/D20221104.js';
import D20221105 from './Component/D20221105.js';

export default function App() {
  return (
    <div>
      <h1>업무일지</h1>
      <D20221103 />
      <D20221104 />
      <D20221105 />
    </div>
  );
}
