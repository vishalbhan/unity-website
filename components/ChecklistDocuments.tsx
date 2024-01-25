import React from 'react'
import { Check } from 'lucide-react'
import styled from 'styled-components'

type ChecklistItem = {
  checklistItems: {
    title: string,
    documents: {
      title: string
    }[]
  }[]
}

export default function ChecklistDocuments({ checklistItems }: ChecklistItem) {
  const [selected, setSelected] = React.useState(0)

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2'>
      <div className='flex flex-col gap-4'>
        {
          checklistItems.map((item: any, index: number) => (
            <div className={`inline-block w-max py-3 pl-6 pr-10 rounded-lg ${index === selected ? 'bg-[rgba(0,0,0,0.03)]' : ''}`}>
            <a key={index} className='cursor-pointer flex gap-4' onClick={() => setSelected(index)}>
              <Check color="#008207" className='mr-2 mt-1' />
              <p className='text-lg font-semibold'>{item.title}</p>
            </a>
            </div>
          ))
        }
      </div>
      <DocumentsCard>
        <div className='flex flex-col gap-4'>
          <span className='text-lg font-semibold mb-4'>Documents required</span>
          <ul className='flex flex-col gap-2'>
            {
              checklistItems[selected].documents.map((document: any, index: number) => (
                <li key={`document-${index}`} className='text-sm'>{document.title}</li>
              ))
            }
          </ul>
        </div>
      </DocumentsCard>
    </div>
  )
}

const DocumentsCard = styled.div`
  padding: 32px 42px;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.16);
  background: #FBFAF4;

  & ul {
    list-style: disc;
    margin-left: 16px;
  }

  & li {
    font-size: 16px;
    color: rgba(0,0,0,0.8);
    margin-bottom: 12px;
  }
`
