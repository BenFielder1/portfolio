"use client"

import dynamic from 'next/dynamic';

const Game1 = dynamic(() => import('./Game1'), {
  ssr: false,
  loading: () => <div>Loading Game...</div>
});

const Game2 = dynamic(() => import('./Game2'), {
    ssr: false,
    loading: () => <div>Loading Game...</div>
});

// import Game1 from './Game1';
// import Game2 from './Game2';

export default function GamePage() {
  return (
    <div className="flex justify-center items-center" /*style= {{display: "grid", placeItems: "center" }} style={{ textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center" }}*/>
      <Game1 /><Game2 />
    </div>
  );
}

