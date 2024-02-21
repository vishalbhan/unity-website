import React, { useState } from 'react';
import styled from 'styled-components';
import { builder } from '@builder.io/react';
import ReactPaginate from 'react-paginate';
import { Input } from './ui/input';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

type Props = {
  name: string;
  hasFilter: boolean;
  pdfs?: {
    title: string;
    file: any;
    date?: string;
    description?: string;
  }[];
};

function PDFList({ name, hasFilter }: Props) {
  const [data, setData] = React.useState<any>(null);
  const [currentPage, setCurrentPage] = React.useState<number>(0);
  const [searchTerm, setSearchTerm] = useState('');

  const itemsPerPage = 10; // Number of items to display per page

  React.useEffect(() => {
    builder
      .get('pdf-list', {
        query: {
          data: {
            listName: name,
          },
        },
      })
      .promise()
      .then((data: any) => {
        if (data.data) setData(data.data);
      });
  }, []);

  const handlePageChange = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data?.pdfs?.filter((pdf: any) =>
    pdf.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const offset = currentPage * itemsPerPage;
  const pageCount = Math.ceil((filteredData?.length || 0) / itemsPerPage);
  const paginatedData = filteredData?.slice(offset, offset + itemsPerPage);

  return (
    <>
      <Input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearchChange}
        className='max-w-lg mx-auto bg-white rounded-full mb-12 p-6'
      />

      {paginatedData?.map((pdf: any, index: number) => (
        <PDFCard key={index} className="sm mb-6">
          <a href={pdf.file} target="_blank" rel="noopener noreferrer">
            <p>{pdf.title}</p>
            {pdf.description && (
              <p className="text-gray-500 text-sm mt-4">{pdf.description}</p>
            )}
            {pdf.date && (
              <p className="text-gray-500 text-sm mt-4">{pdf.date}</p>
            )}
          </a>
        </PDFCard>
      ))}

      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={4}
        onPageChange={handlePageChange}
        containerClassName={'flex gap-4 ml-auto mt-8'}
        activeClassName={'active'}
      />
    </>
  );
}

export default PDFList;

const PDFCard = styled.div`
  padding: 24px;
  border: 1px solid rgba(0, 0, 0, 0.16);
  border-radius: 16px;

  & h6 {
    font-size: 16px;
    font-weight: 500;
  }
`;