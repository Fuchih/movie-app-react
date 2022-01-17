import { useState } from 'react'
import { Wrapper } from './Rate.styles';

export default function Rate() {
  const [value, setValue] = useState(5)

  return (
    <>
      <input
        type="range"
        min="1"
        max="10"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {value}
      <Wrapper>Rate</Wrapper>
    </>
  )
}
