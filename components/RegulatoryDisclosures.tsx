import React from 'react'
import Governance from './Governance'
import PDFList from './PDFList'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
import useWindowWidth from '@/hooks/useWindowWidth';

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
    title: 'Other Disclosures',
  },
]

export default function RegulatoryDisclosures() {
  const [page, setPage] = React.useState(0)
  const containerRef = React.useRef<HTMLDivElement | null>(null)
  const width = useWindowWidth()

  React.useEffect(() => {
    const htmlElement = document.querySelector('html');
    if (htmlElement) {
      htmlElement.style.overflowX = 'auto';
    }

    return () => {
      if (htmlElement) {
        htmlElement.style.overflowX = 'hidden';
      }
    }
  }, [])

  return (
    <div className='md:grid grid-cols-4 items-start p-10' ref={containerRef}>

      {/* Menu */}
      {
        width > 768 ? (
          <div className='flex flex-col gap-6 sticky top-10'>
            {
              navItems.map((_, i) => (
                <a 
                  key={`menu-item-${i}`} 
                  onClick={() => {
                    containerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    setPage(i)
                  }}
                  className={`cursor-pointer w-fit px-5 py-3 rounded-full ${page === i ? 'bg-black text-white' : ''}`}
                >
                  <div>{_.title}</div>
                </a>
              ))
            }
          </div>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger className='bg-black text-white w-full p-3 rounded-full mb-12 relative'>
              {navItems[page].title}
              <ChevronDown className='absolute right-4 top-1/2 transform -translate-y-1/2' size={18} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className='bg-white w-full'>
              {
                navItems.map((_, i) => (
                  <DropdownMenuItem 
                    key={`menu-item-${i}`}
                    onClick={() => setPage(i)}
                    className='p-3 w-full text-left hover:bg-gray-100 cursor-pointer'
                  >
                    {_.title}
                  </DropdownMenuItem>
                ))
              }
            </DropdownMenuContent>
          </DropdownMenu>
        )
      }
      
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
            <>
              <h3 className='mb-6'>Policies</h3>
              <PDFList
                name="Policies"
                hasFilter={false}
              />
            </>
          )
        }

        {/* E-Auction */}
        {
          page === 2 && (
            <>
              <h3 className='mb-6'>E-Auction</h3>
              <PDFList
                name="E-Auction"
                hasFilter={false}
              />
            </>
          )
        }

        {/* Other disclosures */}
        {
          page === 3 && (
            <>
              <h3 className='mb-6'>Other Disclosures</h3>
              <PDFList
                name="Other Disclosures"
                hasFilter={false}
              />
            </>
          )
        }

      </div>
      
    </div>
  )
}