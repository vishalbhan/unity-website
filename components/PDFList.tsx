import React from 'react'
import styled from 'styled-components'

type Props = {
  name: string,
  hasFilter: boolean,
  pdfs: {
    title: string,
    url: string,
    date?: string,
    description?: string,
  }[]
}

export default function PDFList({name, pdfs}: Props) {
  return (
    <>
      <h5 className='mb-6'>{name}</h5>
      {
        pdfs.map((pdf, index) => (
          <PDFCard key={index} className='mb-4'>
            <a href={pdf.url} target='_blank' rel='noopener noreferrer'>
              <h6>{pdf.title}</h6>
              { pdf.description && <p className='text-gray-500 text-sm mt-4'>{pdf.description}</p> }
              { pdf.date && <p className='text-gray-500 text-sm mt-4'>{pdf.date}</p> }
            </a>
          </PDFCard>
        ))
      }
    </>
  )
}

const PDFCard = styled.div`
  
`