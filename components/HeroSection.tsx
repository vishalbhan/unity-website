import React from 'react';
import styled from 'styled-components';
import { CurrentAccount, FixedDeposit, Lockers, PersonalLoans, RecurringDeposit, SavingsAccount } from './icons';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const HeroSection: React.FC = () => {
  return (
    <>
      <div className='hidden lg:flex items-center'>
        <Link href="/personal/lockers" className='w-full -mr-4 z-10'>
          <HoverCard className='h-60'>
            <Lockers />
            <div className="text">Lockers</div>
            <div className="arrow"><ArrowRight size={16} /></div>
          </HoverCard>
        </Link>
        <Link href="/personal/current-account" className='w-full -mr-4 z-20'>
          <HoverCard className='h-80'>
            <CurrentAccount />
            <div className="text">Current<br/>Account</div>
            <div className="arrow"><ArrowRight size={16} /></div>
          </HoverCard>
        </Link>
        <Link href="/personal/savings-account" className='w-full -mr-4 z-30'>
          <HoverCard className='h-96'>
            <SavingsAccount />
            <div className="text">Savings<br/>Account</div>
            <div className="arrow"><ArrowRight size={16} /></div>
          </HoverCard>
        </Link>
        <img src="/images/hero-desktop.png" alt="Image of phone with Unity Bank app" className='w-72 z-40' />
        <Link href="/personal/fixed-deposit" className='w-full -ml-4 z-30'>
          <HoverCard className='h-96'>
            <FixedDeposit />
            <div className="text">Fixed<br/>Deposit</div>
            <div className="arrow"><ArrowRight size={16} /></div>
          </HoverCard>
        </Link>
        <Link href="/personal/recurring-deposit" className='w-full -ml-4 z-20'>
          <HoverCard className='h-80'>
            <RecurringDeposit />
            <div className="text">Recurring<br/>Deposit</div>
            <div className="arrow"><ArrowRight size={16} /></div>
          </HoverCard>
        </Link>
        <Link href="/personal/loans" className='w-full -ml-4 z-10'>
          <HoverCard className='h-60'>
            <PersonalLoans />
            <div className="text">Loans</div>
            <div className="arrow"><ArrowRight size={16} /></div>
          </HoverCard>
        </Link>
      </div>
      <div className='block lg:hidden'>
        <img src="/images/hero-mobile.png" alt="Image of phone with Unity Bank app" className='w-full' />
      </div>
    </>
  );
};

const HoverCard = styled.div`
  cursor: pointer;
  width: 100%;
  background: #FBF8EC;
  border: 0.94px solid #D9D4CA;
  box-shadow: 0px 3.47px 16.33px 0px #7C4C030D;
  border-radius: 12px;
  transition: all 0.5s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    translate: 0 -16px;
  }

  & .text {
    font-size: 13.9px;
    font-weight: 500;
    line-height: 17.37px;
    text-align: center;
    margin-top: 12px;
  }

  & .arrow {
    margin-top: 8px;
    opacity: 0;
    translate: 0 8px;
    transition: all 0.5s ease;
  }

  &:hover .arrow {
    opacity: 1;
    translate: 0 0;
  }
`

export default HeroSection;