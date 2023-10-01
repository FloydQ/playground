'use client'
import { useState } from 'react'

export default function Home() {
  const [state, setState] = useState<number>(0)
  return (
    <main>
      <p className="title">{state}</p>
      <div className="grid-buttons">
        <button onClick={(event) => setState(state + 1)}>+</button>
        <button onClick={(event) => setState(state - 1)}>-</button>
        <button onClick={(event) => setState(0)}>reset</button>
      </div>
    </main>
  )
}
