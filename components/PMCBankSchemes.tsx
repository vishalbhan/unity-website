import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogPortal,
  DialogTrigger,
} from "@/components/ui/dialog"
import Button from './Button';
import { ArrowRight } from 'lucide-react';

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

  return (
    <>

      {/* Menu */}
      <div className='flex items-center justify-center gap-10'>
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
      <div className="mt-16">

        {/* Retail Depositors */}
        {
          page === 0 && (
            <>
              <div className="text-center mb-16">
                <h2 className='mb-6'>For Retail Depositors</h2>
                <p>Eligibility under Amalgamation Scheme</p>
              </div>

              <div className="grid grid-cols-3 gap-8">
                {
                  retailCards.map((_: any, i: number) => (
                    <div key={`retail-card-${i}`} className="transparent-card" style={{backgroundColor:_.color}}>
                      <div dangerouslySetInnerHTML={{__html:_.content}} />
                      {
                        _.hasModal &&
                        <Dialog>
                          <DialogTrigger>
                            <a className='flex items-center font-semibold mt-6'>
                              Show Details&nbsp;<ArrowRight className='ml-1' size={16} />
                            </a>
                          </DialogTrigger>
                          <DialogContent className='bg-white max-h-[90%] overflow-auto' style={{maxWidth:'840px'}}>
                            <div className="grid grid-cols-3">
                              <div className="p-6 bg-[#FBFAF4] border border-r-[1px] border-color-red">
                                <h5 className='mb-4'>Reimbursment Roadmap</h5>
                                <p className='mb-12'>{_.amount}</p>
                              </div>
                              <div className="col-span-2 p-6">

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
              <div className="text-center mb-12">
                <h2 className='mb-6'>For Institutional Depositors</h2>
                <p>Eligibility under Amalgamation Scheme</p>
              </div>
              <div dangerouslySetInnerHTML={{__html:institutionalDepositorsContent}} />
            </>
          )
        }
      </div>
      
    </>
  )
};

export default PMCBankSchemes;