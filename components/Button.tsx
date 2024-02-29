import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { Dialog } from '@headlessui/react'
import PopupForm from './PopupForm'

type ButtonProps = {
  text: string
  type: "primary" | "secondary" | "tertiary" | "link",
  action: "link" | "form" | "submit",
  href: string,
  icon?: "arrow-right",
  width?: "full" | "fit"
}

export default function Button({ text, type, action = "link", href, icon, width = "fit" }: ButtonProps) {
  let [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      {
        action === "link" && href && (
          <Link href={href}>
            <ButtonContainer type={type} className={`flex items-center justify-center ${width === "full" ? 'w-full' : 'w-fit'}`}>
              {text}
              {
                icon &&
                <span className='ml-2'>
                  {
                    icon === "arrow-right" && <ArrowRight size={16} />
                  }
                </span>
              }
            </ButtonContainer>
          </Link>
        )
      }
      {
        action === "form" && (
          <>
            <ButtonContainer type={type} className={`flex items-center justify-center ${width === "full" ? 'w-full' : 'w-fit'}`} onClick={() => setIsOpen(true)}>
              {text}
              {
                icon &&
                <span className='ml-2'>
                  {
                    icon === "arrow-right" && <ArrowRight size={16} />
                  }
                </span>
              }
            </ButtonContainer>
            <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
              <Dialog.Panel>
                <Dialog.Title>Reach out to us</Dialog.Title>
                <PopupForm />
              </Dialog.Panel>
            </Dialog>
          </>
        )
      }
      {
        action === "submit" && (
          <>
            <ButtonContainer type={type} className={`flex items-center justify-center ${width === "full" ? 'w-full' : 'w-fit'}`}>
              {text}
              {
                icon &&
                <span className='ml-2'>
                  {
                    icon === "arrow-right" && <ArrowRight size={16} />
                  }
                </span>
              }
            </ButtonContainer>
          </>
        )
      }
    </>
  )
}

const ButtonContainer = styled.button<{ type: string }>`
  padding: ${props => props.type === "link" ? "4px" : "12px 19px 12px 20px"};
  background: ${props => (
    props.type === 'primary' && '#FFCD1E' ||
    props.type === 'secondary' && '#FFF' ||
    props.type === 'tertiary' && '#F3F3F3' ||
    props.type === 'link' && 'transparent' 
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