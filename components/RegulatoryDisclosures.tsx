import React from 'react'
import Governance from './Governance'
import PDFList from './PDFList'

const navItems = [
  {
    title: 'Governance',
  },
  {
    title: 'Policies',
  },
  {
    title: 'E-Auction',
  },
  {
    title: 'Other disclosures',
  },
]

export default function RegulatoryDisclosures() {
  const [page, setPage] = React.useState(0)

  return (
    <div className='grid grid-cols-4'>

      {/* Menu */}
      <div className='flex flex-col gap-6'>
        {
          navItems.map((_, i) => (
            <a 
              key={`menu-item-${i}`} 
              onClick={() => setPage(i)}
              className={`cursor-pointer w-fit px-5 py-3 rounded-full ${page === i ? 'bg-black text-white' : ''}`}
            >
              <div>{_.title}</div>
            </a>           
          ))
        }
      </div>
      
      {/* Content */}
      <div className="col-span-3">

        {/* Governance */}
        {
          page === 0 && (
            <Governance />
          )
        }

        {/* Policies */}
        {
          page === 1 && (
            <PDFList
              name="Policies"
              hasFilter={false}
              pdfs={[]}
            />
          )
        }

        {/* E-Auction */}
        {
          page === 2 && (
            <PDFList
              name="E-Auction"
              hasFilter={true}
              pdfs={[]}
            />
          )
        }

        {/* Other disclosures */}
        {
          page === 3 && (
            <PDFList
              name="Other disclosures"
              hasFilter={false}
              pdfs={[]}
            />
          )
        }

      </div>
      
    </div>
  )
}