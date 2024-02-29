import React, { useEffect } from 'react'
import PDFList from './PDFList'
import { builder } from '@builder.io/react';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

const navItems = [
  {
    title: 'Shareholders Information',
  },
  {
    title: 'Credit Rating',
  },
  {
    title: 'Valuation of Market Linked Debentures',
  },
  {
    title: 'Exchange Filings',
  },
  {
    title: 'Registrar and Share Transfer Agent',
  },
  {
    title: 'Investor Grievances',
  },
  {
    title: 'Financials',
  },
]

export default function InvestorsDisclosures() {
  const [page, setPage] = React.useState(0)
  const [data, setData] = React.useState<any>([]) 

  useEffect(() => {
    if (page === 4) {
      builder.get('contact-person', {
        query: {
          name: "Registrar and Share Transfer Agent"
        }
      }).promise().then(( data: any ) => {
        if (data) setData(data.data)
      })
    }

    if (page === 5) {
      builder.get('contact-person', {
        query: {
          name: "Investor Grievances"
        }
      }).promise().then(( data: any ) => {
        if (data) setData(data.data)
      })
    }
  }, [page])

  return (
    <div className='md:grid grid-cols-3 gap-8 p-14'>

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
      <div className="col-span-2">

        {/* Shareholders Information */}
        {
          page === 0 && (
            <>
              <h3 className='mb-12'>Shareholders Information</h3>
              {/* <PDFList
                name="Shareholders - Annual Reports"
                hasFilter={false}
              /> */}
              <PDFList
                name="Shareholders - Quarterly Financial Results"
                hasFilter={false}
              />
            </>
          )
        }

        {/* Credit Rating */}
        {
          page === 1 && (
            <>
              <h3 className='mb-6'>Credit Rating</h3>
              <PDFList
                name="Credit Rating"
                hasFilter={false}
              />
            </>
          )
        }

        {/* Valuation of Market Linked Debentures */}
        {
          page === 2 && (
            <>
              <h3 className='mb-6'>Valuation of Market Linked Debentures</h3>
              <PDFList
                name="Valuation of Market Linked Debentures"
                hasFilter={false}
              />
            </>
          )
        }

        {/* Exchange Filings */}
        {
          page === 3 && (
            <>
              <h3 className='mb-6'>Exchange Filings</h3>
              <PDFList
                name="Exchange Filings"
                hasFilter={false}
              />
            </>
          )
        }

        {/* Registrar and Share Transfer Agent */}
        {
          page === 4 && (
            <>
              <h3 className='mb-6'>Registrar and Share Transfer Agent</h3>
              <div className="transparent-card" dangerouslySetInnerHTML={{__html:data.content}} />
            </>
          )
        }

        {/* Investor Grievances */}
        {
          page === 5 && (
            <>
              <h3 className='mb-6'>Investor Grievances</h3>
              <div className="transparent-card" dangerouslySetInnerHTML={{__html:data.content}} />
            </>
          )
        }

        {/* Financials */}
        {
          page === 6 && (
            <>
              <h3 className='mb-6'>Financials</h3>
              <PDFList
                name="Financials"
                hasFilter={false}
              />
            </>
          )
        }

      </div>
      
    </div>
  )
}