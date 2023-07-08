'use client'

import { useState } from 'react'

export default function Client({ start }: { start: number }) {
  const [state, setState] = useState(start)

  return <div onClick={() => setState((n) => n + 1)}>{state}</div>
}
