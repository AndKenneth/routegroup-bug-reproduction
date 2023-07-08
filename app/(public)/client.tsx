'use client'

import { useState } from 'react'

export default function Client() {
  const [state, setState] = useState(0)

  return <div onClick={() => setState((n) => n + 1)}>state</div>
}
