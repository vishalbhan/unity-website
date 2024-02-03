import React from 'react'
import styled from 'styled-components'
import { Logo } from './icons'
import Link from 'next/link'

export default function Footer() {
  return (
    <FooterContainer>
      <div><Logo style="dark" /></div>
      
      <div>
        <div className="text-lg font-semibold mb-6">Personal</div>
        <div className='flex flex-col gap-2 mb-6'>
          <div className='font-semibold'>Save</div>
          <Link href="/personal/savings-account">Savings Account</Link>
          <Link href="/personal/current-account">Current Account</Link>
          <Link href="/personal/fixed-desosit">Fixed Deposit</Link>
          <Link href="/personal/recurring-deposit">Recurring Deposit</Link>
          <Link href="/personal/lockers">Lockers</Link>
          <Link href="/personal/nri-banking">NRI Banking</Link>
        </div>
        <div className='flex flex-col gap-2 mb-6'>
          <div className='font-semibold'>Borrow</div>
          <Link href="/personal/loans">Personal Loans</Link>
        </div>
        <div className='flex flex-col gap-2 mb-6'>
          <div className='font-semibold'>Insure</div>
          <Link href="/personal/insurance">General/Health Insurance</Link>
        </div>
      </div>

      <div>
        <div className="text-lg font-semibold mb-6">Business</div>
        <div className='flex flex-col gap-2 mb-6'>
          <Link href="/business/current-account">Current Account</Link>
          <Link href="/business/loans">Loans</Link>
          <Link href="/personal/msme-loans">MSME Loans</Link>
          <Link href="/personal/lockers">Lockers</Link>
          <Link href="/personal/nri-banking">NRI Banking</Link>
        </div>
        <div className="text-lg font-semibold mb-6">Inclusive</div>
        <div className="text-lg font-semibold mb-6">Calculators</div>
        <div className='flex flex-col gap-2 mb-6'>
          <Link href="/">FD Calculator</Link>
          <Link href="/">RD Calculator</Link>
          <Link href="/">EMI Calculator</Link>
        </div>
      </div>

      <div>
        <div className="text-lg font-semibold mb-6">Company</div>
        <div className='flex flex-col gap-2 mb-6'>
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
        <div className='flex flex-col gap-2 mb-6'>
        <Link href="/">Important Documents</Link>
        <Link href="/">Download Forms</Link>
        <Link href="/">Terms & Conditions</Link>
        <Link href="/">Privacy Policy</Link>
        <Link href="/">FAQs</Link>
        <Link href="/">Blogs</Link>
        <Link href="/">General Disclaimer</Link>
        <Link href="/">RBI Disclaimer</Link>
        <Link href="/">GSTIN</Link>
        </div>
      </div>
      
      <div>
        <div className="text-lg font-semibold mb-6">Connect with us</div>
        <div className='flex flex-col gap-2 mb-6'>
          <Link href="/">Contact Us</Link>
          <Link href="/">Media Centres</Link>
          <Link href="/">Feedback Form</Link>
        </div>
      </div>

    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 24px;
  padding: 60px 24px;
  background-color: #080808;
  color: #fff;

  & a {
    color: rgba(255,255,255,0.8);
  }
`