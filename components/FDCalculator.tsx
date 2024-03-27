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
import { Switch } from './ui/switch'

export default function FDCalculator() {
  const [depositAmount, setDepositAmount] = React.useState(10000)
  const [years, setYears] = React.useState(1)
  const [months, setMonths] = React.useState(1)
  const [days, setDays] = React.useState(1)
  const [tenure, setTenure] = React.useState(1)
  const [isSeniorCitizen, setIsSeniorCitizen] = React.useState(false)
  const [returnAmount, setReturnAmount] = React.useState(0)
  const interestRate = isSeniorCitizen ? 10 : 9

  React.useEffect(() => {
    const totalDays = (years * 365 + months * 30 + days) / 365;
    setTenure(totalDays);
  }, [years, months, days]);

  React.useEffect(() => {
    const calculateReturnAmount = () => {
      const returnAmount = depositAmount * tenure * (interestRate / 100);
      setReturnAmount(returnAmount);
    };

    calculateReturnAmount();
  }, [depositAmount, tenure, interestRate]);

  function formatToIndianCurrency(num: number) {
    return '₹ ' + num.toLocaleString('en-IN', { maximumFractionDigits: 0 });
  }

  return (
    <CalculatorContainer className='grid md:grid-cols-2'>
      <Controls className='flex flex-col gap-10 p-6 lg:p-14'>
        <div className='text-3xl font-semibold'>FD Calculator</div>

        <div className="flex items-center justify-between">
          <p className="text-lg">Type of Deposit</p>
          <Select>
            <SelectTrigger className="w-60">
              <SelectValue placeholder="Select loan type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Re-investment Plan</SelectItem>
              <SelectItem value="2"></SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <p className="text-lg">Deposit amount</p>
            <Input 
              type="text"
              value={formatToIndianCurrency(depositAmount)}
              onChange={(e: any) => setDepositAmount(e.target.value)}
              placeholder=""
              className='w-40'
            />
          </div>
          <div className='py-4'>
            <div className="mb-2">
              <Slider 
                defaultValue={[10000]}
                min={10000}
                max={20000000} 
                step={100}
                onValueChange={(e: any) => setDepositAmount(e)}
              />
            </div>
            <div className="flex items-center justify-between text-gray-500">
              <div className="text-xs">₹ 10,000</div>
              <div className="text-xs">₹ 2 Crores</div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <p className="text-lg">Tenure</p>
            <div className="flex gap-3">
              <Select onValueChange={(e: any) => setYears(e)}>
                <SelectTrigger>
                  <SelectValue placeholder={years + " years"} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Year</SelectItem>
                  <SelectItem value="2">2 Years</SelectItem>
                  <SelectItem value="3">3 Years</SelectItem>
                  <SelectItem value="4">4 Years</SelectItem>
                  <SelectItem value="5">5 Years</SelectItem>
                  <SelectItem value="6">6 Years</SelectItem>
                  <SelectItem value="7">7 Years</SelectItem>
                  <SelectItem value="8">8 Years</SelectItem>
                  <SelectItem value="9">9 Years</SelectItem>
                  <SelectItem value="10">10 Years</SelectItem>
                </SelectContent>
              </Select>
              <Select onValueChange={(e: any) => setMonths(e)}>
                <SelectTrigger>
                  <SelectValue placeholder="Month" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0 Months</SelectItem>
                  <SelectItem value="1">1 Month</SelectItem>
                  <SelectItem value="2">2 Months</SelectItem>
                  <SelectItem value="3">3 Months</SelectItem>
                  <SelectItem value="4">4 Months</SelectItem>
                  <SelectItem value="5">5 Months</SelectItem>
                  <SelectItem value="6">6 Months</SelectItem>
                  <SelectItem value="7">7 Months</SelectItem>
                  <SelectItem value="8">8 Months</SelectItem>
                  <SelectItem value="9">9 Months</SelectItem>
                  <SelectItem value="10">10 Months</SelectItem>
                  <SelectItem value="11">11 Months</SelectItem>
                </SelectContent>
              </Select>
              <Select onValueChange={(e: any) => setDays(e)}>
                <SelectTrigger>
                  <SelectValue placeholder="Day" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0 Days</SelectItem>
                  <SelectItem value="1">1 Day</SelectItem>
                  <SelectItem value="2">2 Days</SelectItem>
                  <SelectItem value="3">3 Days</SelectItem>
                  <SelectItem value="4">4 Days</SelectItem>
                  <SelectItem value="5">5 Days</SelectItem>
                  <SelectItem value="6">6 Days</SelectItem>
                  <SelectItem value="7">7 Days</SelectItem>
                  <SelectItem value="8">8 Days</SelectItem>
                  <SelectItem value="9">9 Days</SelectItem>
                  <SelectItem value="10">10 Days</SelectItem>
                  <SelectItem value="11">11 Days</SelectItem>
                  <SelectItem value="12">12 Days</SelectItem>
                  <SelectItem value="13">13 Days</SelectItem>
                  <SelectItem value="14">14 Days</SelectItem>
                  <SelectItem value="15">15 Days</SelectItem>
                  <SelectItem value="16">16 Days</SelectItem>
                  <SelectItem value="17">17 Days</SelectItem>
                  <SelectItem value="18">18 Days</SelectItem>
                  <SelectItem value="19">19 Days</SelectItem>
                  <SelectItem value="20">20 Days</SelectItem>
                  <SelectItem value="21">21 Days</SelectItem>
                  <SelectItem value="22">22 Days</SelectItem>
                  <SelectItem value="23">23 Days</SelectItem>
                  <SelectItem value="24">24 Days</SelectItem>
                  <SelectItem value="25">25 Days</SelectItem>
                  <SelectItem value="26">26 Days</SelectItem>
                  <SelectItem value="27">27 Days</SelectItem>
                  <SelectItem value="28">28 Days</SelectItem>
                  <SelectItem value="29">29 Days</SelectItem>
                  <SelectItem value="30">30 Days</SelectItem>
                  <SelectItem value="31">31 Days</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-lg">Are you a Senior Citizen?</p>
          <Switch onCheckedChange={(value) => setIsSeniorCitizen(value => !value)} />
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

        <div className="sm text-center mb-8">
          <div className='text-4xl font-extrabold mb-3'>
            {/* <span className='text-3xl mr-3'>₹</span> */}
            {formatToIndianCurrency(+depositAmount + +returnAmount)}
          </div>
          <p className='text-gray-500'>Amount on maturity</p>
        </div>

        <div className="w-max mx-auto rounded-xl flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 mb-32">
          <p>@</p>
          <div className='font-semibold text-2xl'>{interestRate}%</div>
          <p>Interest rate</p>
        </div>

        <div className="flex items-center justify-between mb-3">
          <p>Invested amount</p>
          <div className='text-xl font-bold'>
            {formatToIndianCurrency(depositAmount)}
          </div>
        </div>

        <div className="flex items-center justify-between mb-6">
          <p>Total earnings</p>
          <div className='text-xl font-bold'>
            {formatToIndianCurrency(returnAmount)}
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
