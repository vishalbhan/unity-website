import React from 'react'
import styled from 'styled-components'
import { builder } from '@builder.io/react';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

type Props = {
  name: string,
  hasFilter: boolean,
  pdfs?: {
    title: string,
    file: any,
    date?: string,
    description?: string,
  }[]
}

export default function PDFList({name, hasFilter}: Props) {
  const [data, setData] = React.useState<any>(null);
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(10);
  const [offset, setOffset] = React.useState(0);

  const nextPage = () => {
    setPage(page + 1);
  };

  const previousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  React.useEffect(() => {
    builder.get('pdf-list',{
      query: {
        data: {
          listName: name
        }
      }
    }).promise().then(( data: any ) => {
      if (data.data) setData(data.data)
    })
  }, [])

  return (
    <>
      {
        data?.pdfs?.map((pdf: any, index: number) => (
          <PDFCard key={index} className='sm mb-4'>
            <a href={pdf.file} target='_blank' rel='noopener noreferrer'>
              <p>{pdf.title}</p>
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
  padding: 24px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 16px;

  & h6 {
    font-size: 16px;
    font-weight: 500;
  }
`