import React from 'react'
import styled from 'styled-components'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from './ui/input'
import { Slider } from './ui/slider'
import Button from './Button'

export default function EMICalculator() {
  return (
    <CalculatorContainer className='grid md:grid-cols-2'>
      <Controls className='flex flex-col gap-10 p-6 lg:p-14'>
        <div className='text-3xl font-semibold'>EMI Calculator</div>

        <div className="flex items-center justify-between">
          <p className="text-lg">Loan type</p>
          <Select>
            <SelectTrigger className="w-60">
              <SelectValue placeholder="Select loan type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Loan against property</SelectItem>
              <SelectItem value="2">Personal loan</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <p className="text-lg">Loan amount</p>
            <Input type="number" placeholder="" className='w-32'/>
          </div>
          <div className='py-4'>
            <div className="mb-2"><Slider defaultValue={[33]} max={100} step={1} /></div>
            <div className="flex items-center justify-between text-gray-500">
              <div className="text-xs">10,000</div>
              <div className="text-xs">10 Lakhs</div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <p className="text-lg">Tenure</p>
            <Input type="number" placeholder="" className='w-32'/>
          </div>
          <div className='py-4'>
            <div className="mb-2"><Slider defaultValue={[33]} max={100} step={1} /></div>
            <div className="flex items-center justify-between text-gray-500">
              <div className="text-xs">1 month</div>
              <div className="text-xs">36 months</div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <p className="text-lg">Interest per annum</p>
            <Input type="number" placeholder="" className='w-32'/>
          </div>
          <div className='py-4'>
            <div className="mb-2"><Slider defaultValue={[33]} max={100} step={1} /></div>
            <div className="flex items-center justify-between text-gray-500">
              <div className="text-xs">15.75%</div>
              <div className="text-xs">44.90%</div>
            </div>
          </div>
        </div>

      </Controls>
      <Result className='relative px-16 pt-32 pb-16'>
        <div className="bg absolute w-full left-10 top-20 pointer-events-none">
          <svg width={508} height={248} viewBox="0 0 508 248" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M470 93.54H479.07" stroke="#88D38F" strokeWidth="2.69687" strokeMiterlimit={10} strokeLinecap="round" />
            <path d="M474.53 89V98.0708" stroke="#88D38F" strokeWidth="2.69687" strokeMiterlimit={10} strokeLinecap="round" />
            <path d="M410.242 166C406.795 166 404.001 168.795 404.001 172.242C404.001 175.689 406.795 178.484 410.242 178.484C413.69 178.484 416.484 175.689 416.484 172.242C416.484 168.795 413.69 166 410.242 166Z" fill="#63ACF1" />
            <path d="M384 33.4766C396.353 32.9469 403.94 25.3532 404.477 13C405.006 25.3532 412.6 32.9398 424.953 33.4766C412.6 34.0062 405.013 41.5999 404.477 53.9531C403.947 41.5999 396.353 34.0134 384 33.4766Z" fill="#F0C045" />
            <path d="M469.785 229H460" stroke="#EE80C2" strokeWidth="2.69687" strokeMiterlimit={10} strokeLinecap="round" />
            <path d="M24.0002 235.545C30.965 235.843 35.2424 240.125 35.545 247.09C35.8436 240.125 40.125 235.847 47.0898 235.545C40.125 235.246 35.8477 230.965 35.545 224C35.2464 230.965 30.965 235.242 24.0002 235.545Z" fill="#F0C045" />
            <path d="M59.2424 85.4839C55.7951 85.4839 53.0005 82.6893 53.0005 79.242C53.0005 75.7946 55.7951 73 59.2424 73C62.6897 73 65.4844 75.7946 65.4844 79.242C65.4844 82.6893 62.6897 85.4839 59.2424 85.4839Z" fill="#EE80C2" />
            <path d="M123.718 21.4349C117.799 21.4349 113.001 16.6366 113.001 10.7175C113.001 4.79837 117.799 0 123.718 0C129.637 0 134.436 4.79837 134.436 10.7175C134.436 16.6366 129.637 21.4349 123.718 21.4349Z" fill="#63ACF1" />
            <path d="M107.596 199.192C104.505 199.192 102 196.686 102 193.596C102 190.505 104.505 188 107.596 188C110.686 188 113.191 190.505 113.191 193.596C113.191 196.686 110.686 199.192 107.596 199.192Z" fill="#88D38F" />
          </svg>
        </div>

        <div className="text-center mb-8">
          <div className='text-5xl font-extrabold mb-3'>
            <span className='text-3xl mr-3'>₹</span>
            453
          </div>
          <p className='text-gray-500'>Monthly EMI</p>
        </div>

        <div className="w-max mx-auto rounded-xl flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 mb-32">
          <p>@</p>
          <div className='font-semibold text-2xl'>35%</div>
          <p>A.P.R</p>
        </div>

        <div className="flex items-center justify-between mb-3">
          <p>Interest amount</p>
          <div className='text-xl font-bold'>
            <span className='text-lg mr-3'>₹</span>
            2,530
          </div>
        </div>

        <div className="flex items-center justify-between mb-6">
          <p>Total amount payable</p>
          <div className='text-xl font-bold'>
            <span className='text-lg mr-3'>₹</span>
            22,530
          </div>
        </div>

        <Button
          text="Apply for a loan"
          type="primary"
          href="/"
          icon="arrow-right"
          width="full"
        />
      </Result>
    </CalculatorContainer>
  )
}

const CalculatorContainer = styled.div`
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 24px;
  box-shadow: 0px 4px 32px 0px rgba(0, 0, 0, 0.18);
  overflow: hidden;
`

const Controls = styled.div`
  border-right: 1px solid rgba(0, 0, 0, 0.10);
`

const Result = styled.div`
  border-radius: 24px;
  background-color: rgb(250,255,248);
  overflow: hidden;
`
