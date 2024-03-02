import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogPortal,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ArrowRight } from 'lucide-react';
import styled from 'styled-components';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
import useWindowWidth from '@/hooks/useWindowWidth';

const navItems = [
  {
    title: 'Retail Depositor',
  },
  {
    title: 'Institutional Depositor',
  },
]

const content = {

}

const PMCBankSchemes: React.FC<any> = ({ retailCards, institutionalDepositorsContent }) => {
  const [page, setPage] = React.useState(0)
  const width = useWindowWidth()

  return (
    <div className='p-8'>

      {/* Menu */}
      {
        width > 768 ? (
          <div className='flex items-center justify-center gap-10'>
            <div className='flex gap-6'>
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
      <div className="mt-16">

        {/* Retail Depositors */}
        {
          page === 0 && (
            <>
              <div className="text-center mb-16">
                <h2 className='mb-6'>For Retail Depositors</h2>
                <p>Eligibility under Amalgamation Scheme</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {
                  retailCards.map((_: any, i: number) => (
                    <div key={`retail-card-${i}`} className="transparent-card" style={{ backgroundColor: _.color }}>
                      <div dangerouslySetInnerHTML={{ __html: _.content }} />
                      {
                        _.hasModal &&
                        <Dialog>
                          <DialogTrigger>
                            <a className='flex items-center font-semibold mt-6'>
                              Show Details&nbsp;<ArrowRight className='ml-1' size={16} />
                            </a>
                          </DialogTrigger>
                          <DialogContent className='bg-white max-h-[80%] overflow-auto' style={{ maxWidth: '840px' }}>
                            <div className="grid md:grid-cols-5 sm items-stretch">
                              <div className="p-6 bg-[#FBFAF4] border border-r-[1px] col-span-2 h-full">
                                <div>
                                  <h5 className='mb-4'>Reimbursment Roadmap</h5>
                                  <p>{_.amount}</p>
                                </div>
                                <div className='text-sm mt-16'>
                                  Based on aggregating your PMC account(s) in the Same capacity and same right as per DICGC settlement procedure, and after adjusting any dues; subject to claim approval by DICGC
                                  <br /><br />
                                  *  Including interest accrued till 31st March 2021
                                  <br /><br />
                                  ** Subject to claim approval & receipt of funds from DICG
                                </div>
                              </div>
                              <div className="col-span-3 p-12">
                                <ol className="reimbursment-list mb-6">
                                  {
                                    _.reimbursmentSteps && _.reimbursmentSteps.map((step: any, i: number) => (
                                      <li key={`reimbursment-step-${i}`}>
                                        <h6 className='mb-2'>{step.month}</h6>
                                        <div dangerouslySetInnerHTML={{ __html: step.description }} />
                                      </li>
                                    ))
                                  }
                                </ol>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      }
                    </div>
                  ))
                }
              </div>
            </>
          )
        }

        {/* Institutional Depositors */}
        {
          page === 1 && (
            <>
              <div className="text-center mb-16">
                <h2 className='mb-6'>For Institutional Depositors</h2>
                <p>Eligibility under Amalgamation Scheme</p>
              </div>
              <Content>
                <div dangerouslySetInnerHTML={{ __html: institutionalDepositorsContent }} />
              </Content>
            </>
          )
        }
      </div>

    </div>
  )
};

export default PMCBankSchemes;

const Content = styled.div`
  & ul {
    list-style: disc;

    & li {
      margin-left: 32px;
    }
  }
`