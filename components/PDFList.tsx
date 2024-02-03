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

export default function PDFList({name, hasFilter, pdfs}: Props) {
  const [data, setData] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(10);
  const [offset, setOffset] = React.useState(0);

  React.useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = async () => {
    // Make your API request with the query and pagination parameters
    const response = await fetch(`/api/query?limit=${limit}&offset=${offset}`);
    const newData = await response.json();
    setData(newData);
  };

  const nextPage = () => {
    setPage(page + 1);
  };

  const previousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  React.useEffect(() => {
    builder.get('pdf-list').promise().then(( data: any ) => {
      console.log(data.data.pdfs)
    })
  }, [])

  return (
    <>
      <h3 className='mb-6'>{name}</h3>
      {
        pdfs?.map((pdf, index) => (
          <PDFCard key={index} className='mb-4'>
            <a href={pdf.file} target='_blank' rel='noopener noreferrer'>
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
  padding: 12px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 16px;
`