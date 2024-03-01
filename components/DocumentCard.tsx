import { format } from 'date-fns';
import React from 'react';
import styled from 'styled-components';

interface DocumentCardProps {
  file: string;
  type: string;
  link: string;
  title: string;
  date: Date;
  description: string;
}

const DocumentCard: React.FC<DocumentCardProps> = ({ file, type, link, title, date, description }) => {
  return (
    <a href={file} target="_blank" rel="noopener noreferrer" >
      <PDFCard className="relative sm mb-6">
          <p>{title}</p>
          {description && (
            <div className="text-gray-500 text-sm mt-4">{description}</div>
          )}
          {date && (
            <div className="text-gray-500 text-sm mt-4">- {format(date, 'LLLL	do, yyyy')}</div>
          )}
      </PDFCard>
    </a>
  );
};

export default DocumentCard;

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
`;