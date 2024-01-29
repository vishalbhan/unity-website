import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

type ButtonProps = {
  text: string
  type: "primary" | "secondary" | "tertiary",
  href: string,
  icon?: "arrow-right",
  width?: string
}

export default function Button({ text, type, href, icon, width = "auto" }: ButtonProps) {
  return (
    <Link href={href}>
      <ButtonContainer type={type} className={`flex items-center justify-center ${width === "full" ? 'w-full' : ''}`}>
        {text}
        {
          icon &&
          <span className='ml-2'>
            {
              icon === "arrow-right" && <ArrowRight size={15} />
            
            }
          </span>
        }
      </ButtonContainer>
    </Link>
  )
}

const ButtonContainer = styled.button<{ type: string }>`
  padding: 12px 19px 12px 20px;
  background: ${props => (
    props.type === 'primary' && '#FFCD1E' ||
    props.type === 'secondary' && '#FFF' ||
    props.type === 'tertiary' && '#F3F3F3'
  )};
  border-radius: 99px;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    filter: brightness(96%);
  }

  &:active {
    translate: 0 3px;
  }
`