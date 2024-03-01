import React, { useState } from 'react';
import styled from 'styled-components';
import { builder } from '@builder.io/react';
import ReactPaginate from 'react-paginate';
import { Input } from './ui/input';
import { format } from 'date-fns';
import clsx from 'clsx';
import { ChevronLeft, ChevronRight, Download } from 'lucide-react';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

type Props = {
  name: string;
  searchAlign?: "left" | "center";
  hasFilter: boolean;
  pdfs?: {
    title: string;
    file: any;
    date?: string;
    description?: string;
  }[];
};

function PDFList({ name, searchAlign = "left", hasFilter }: Props) {
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
        className={clsx(
          'max-w-lg bg-white rounded-full mb-12 p-6',
          searchAlign === "center" && "mx-auto",
        )}
      />

      {paginatedData?.map((pdf: any, index: number) => (
        <a href={pdf.file} target="_blank" rel="noopener noreferrer" key={`pdf-${index}`}>
          <PDFCard className="sm relative mb-6">
            <p>{pdf.title}</p>
            {pdf.description && (
              <div className="text-gray-500 text-sm mt-4">{pdf.description}</div>
            )}
            {pdf.date && (
              <div className="text-gray-500 text-sm mt-4">- {format(pdf.date, 'LLLL	do, yyyy')}</div>
            )}
            <div className="icon absolute top-1/2 right-8">
              <Download />
            </div>
          </PDFCard>
        </a>
      ))}

      {
        pageCount > 1 &&
        <ReactPaginate
          previousLabel={<ChevronLeft className='-mr-1'/>}
          nextLabel={<ChevronRight className='-ml-1' />}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={4}
          onPageChange={handlePageChange}
          containerClassName={'flex space-x-4 justify-end mt-12'}
          activeClassName={'active'}
        />
      }
    </>
  );
}

export default PDFList;

const PDFCard = styled.div`
  padding: 24px;
  border: 1px solid rgba(0, 0, 0, 0.16);
  border-radius: 16px;
  transition: all 0.3s ease;

  & h6 {
    font-size: 16px;
    font-weight: 500;
  }

  &:hover {
    background: white;
  }

  & .icon {
    opacity: 0;
    translate: 40% -50%;
    transition: all 0.3s ease;
  }

  &:hover .icon {
    opacity: 1;
    translate: 0 -50%;
    transition: all 0.3s ease;
  }
`;