import React from 'react'
import { Wrapper, Content, Text } from './Banner.styles'

export default function Banner({ image, title, text }) {
  return (
    <Wrapper image={image}>
      <Content>
        <Text>
          <h1>{title}</h1>
          <p>{text}</p>
        </Text>
      </Content>
    </Wrapper>
  )
}
