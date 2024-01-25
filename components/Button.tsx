import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

type ButtonProps = {
  text: string
  type: "primary" | "secondary",
  href: string,
  icon?: "arrow-right"
}

export default function Button({ text, type, href, icon }: ButtonProps) {
  return (
    <Link href={href}>
      <ButtonContainer type={type}>
        {text}{' '}
        {icon === "arrow-right" && <ArrowRight />}
      </ButtonContainer>
    </Link>
  )
}

const ButtonContainer = styled.button<{ type: string }>`
  padding: 12px 19px 12px 20px;
  background: ${props => props.type === 'primary' ? '#FFCD1E' : '#fff'};
  border-radius: 99px;
  
`