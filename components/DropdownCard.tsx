import { ChevronDown, Info } from 'lucide-react';
import React, { useState } from 'react';
import styled from 'styled-components';

interface DropdownCardProps {
  title: string;
  content: string;
}

const DropdownCard: React.FC<DropdownCardProps> = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Dropdown>
      <Trigger className='text-left' onClick={toggleContent}>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Info size={28} className='mr-8' />
            <p className='text-xl pr-8'>{title}</p>
          </div>
          <div>
            <ChevronDown size={28} className={`transition-all duration-200 ${isExpanded ? 'rotate-180' : ''}`}/>
          </div>
        </div>
      </Trigger>
      <Content isExpanded={isExpanded}>
        <div className="p-8">
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
      </Content>
    </Dropdown>
  );
};

export default DropdownCard;

const Dropdown = styled.div`
  border: 1px solid #00000016;
  padding: 28px 28px 28px 32px;
  border-radius: 16px;
  transition: all 0.3s ease;

  &:hover {
    background: white;
  }
`;

const Trigger = styled.div`
  padding: 16px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
`;

const Content = styled.div<{isExpanded: boolean}>`
  max-height: ${({ isExpanded }) => isExpanded ? '600px' : '0'};
  overflow: hidden;
  transition: ${({ isExpanded }) => isExpanded ? 'max-height 0.5s ease' : 'max-height 0.3s ease'};

  & ol {
    list-style-type: decimal;
    padding-left: 1rem;

    & li {
      padding-left: 1rem;
      margin-bottom: 16px;
      font-size: 18px;
      line-height: 1.5;
    }
  }
`;