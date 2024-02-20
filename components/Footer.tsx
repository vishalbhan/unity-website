import React from 'react'
import styled from 'styled-components'
import { Logo } from './icons'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export default function Footer() {
  return (
    <FooterContainer className='p-8 md:p-16 grid-cols-2 md:grid-cols-6'>
      <div className='col-span-2 md:col-span-1 grid place-items-center md:block mb-8 md:mb-0'>
        <Logo style="dark" />
      </div>
      
      <div>
        <div className="text-lg font-semibold mb-6">Personal</div>
        <div className='flex flex-col gap-3 mb-6'>
          <div className='font-semibold'>Save</div>
          <Link href="/personal/savings-account">Savings Account</Link>
          <Link href="/personal/current-account">Current Account</Link>
          <Link href="/personal/fixed-desosit">Fixed Deposit</Link>
          <Link href="/personal/recurring-deposit">Recurring Deposit</Link>
          <Link href="/personal/lockers">Lockers</Link>
          <Link href="/personal/nri-banking">NRI Banking</Link>
        </div>
        <div className='flex flex-col gap-3 mb-6'>
          <div className='font-semibold'>Borrow</div>
          <Link href="/personal/loans">Personal Loans</Link>
        </div>
        <div className='flex flex-col gap-3 mb-6'>
          <div className='font-semibold'>Insure</div>
          <Link href="/personal/insurance">General/Health Insurance</Link>
        </div>
      </div>

      <div>
        <Link href="/business">
          <div className="text-lg font-semibold text-white mb-6">Business <ChevronRight size={18} className='inline mb-[2px]' /></div>
        </Link>
        <div className='flex flex-col gap-3 mb-6'>
          <Link href="/business/current-account">Current Account</Link>
          <Link href="/business/msme-loans">MSME Loans</Link>
          <Link href="/business/supply-chain-finance">Supply Chain Financing</Link>
          <Link href="/business/digital-lending">Digital Lending</Link>
          <Link href="/business/social-infra-finance">Social Infra Finance</Link>
        </div>
        <Link href="/inclusive-banking">
          <div className="text-lg font-semibold text-white mb-6">Inclusive <ChevronRight size={18} className='inline mb-[2px]' /></div>
        </Link>
        <div className="text-lg font-semibold mb-6">Calculators</div>
        <div className='flex flex-col gap-3 mb-6'>
          <Link href="/">FD Calculator</Link>
          <Link href="/">RD Calculator</Link>
          <Link href="/">EMI Calculator</Link>
        </div>
      </div>

      <div>
        <div className="text-lg font-semibold mb-6">Company</div>
        <div className='flex flex-col gap-3 mb-6'>
          <Link href="/about-us">About Unity</Link>
          <Link href="/treasury-services">Treasury Services</Link>
          <Link href="/team">Our Team</Link>
          <Link href="/communication-centre">Communication Centre</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/pmc-bank-schemes">PMC Bank Schemes</Link>
          <Link href="/investors">Investors</Link>
          <Link href="/regulatory-disclosures">Regulatory Disclosures</Link>
        </div>
      </div>

      <div>
        <div className="text-lg font-semibold mb-6">Useful Links</div>
        <div className='flex flex-col gap-3 mb-6'>
        <Link href="/important-documents">Important Documents</Link>
        <Link href="/download-forms">Download Forms</Link>
        <Link href="/terms-and-conditions">Terms & Conditions</Link>
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="/faqs">FAQs</Link>
        <Link href="/blog">Blogs</Link>
        <Link href="/general-disclaimer">General Disclaimer</Link>
        <Link href="/rbi-disclaimer">RBI Disclaimer</Link>
        <Link href="/gstin">GSTIN</Link>
        </div>
      </div>
      
      <div>
        <div className="text-lg font-semibold mb-6">Connect with us</div>
        <div className='flex flex-col gap-3 mb-6'>
          <Link href="/contact-us">Contact Us</Link>
          <Link href="/media-centres">Media Centres</Link>
          <Link href="/forms">Feedback Form</Link>
        </div>
      </div>

    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
  display: grid;
  grid-gap: 24px;
  background-color: #080808;
  color: #fff;

  & a {
    width: fit-content;
    color: rgba(255,255,255,0.7);
  }

  & a:hover {
    color: rgba(255,255,255,0.85);
  }
`