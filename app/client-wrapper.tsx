'use client'

import { useState } from 'react'

export default function Wrapper({ children }: { children: React.ReactNode }) {
  const [state] = useState(0)
  return <div>{children}</div>
}
