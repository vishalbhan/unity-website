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
import { Button } from './ui/button'
import CustomButton from './Button'
import { Switch } from './ui/switch'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import clsx from 'clsx'
import { CalendarIcon } from 'lucide-react'
import { addDays, addMonths, addYears, format } from 'date-fns'
import { Calendar } from './ui/calendar'

export default function RDCalculator({ title, cta }: { title: string, cta: string }) {
  const [depositAmount, setDepositAmount] = React.useState(1000)
  const [tenure, setTenure] = React.useState(6)
  const [date, setDate] = React.useState<Date>(new Date())
  const [isSeniorCitizen, setIsSeniorCitizen] = React.useState(false)
  const [returnAmount, setReturnAmount] = React.useState(0)
  const interestRate = isSeniorCitizen ? 9 : 8.5

  function calculateRDReturns(P: number, r: number, n: number, t: number) {
    let totalMonths = n * t;
    let monthlyInterestRate = r / (12 * 100);
    let amount = P * (((Math.pow((1 + monthlyInterestRate), totalMonths)) - 1) / monthlyInterestRate) * (1 + monthlyInterestRate);
    return amount.toFixed(2);
  }


  React.useEffect(() => {
    const calculateReturnAmount = () => {
      const returnAmount = calculateRDReturns(depositAmount, interestRate, 4, tenure/12);
      setReturnAmount(+returnAmount);
    };

    calculateReturnAmount();
  }, [depositAmount, tenure, interestRate]);

  function formatToIndianCurrency(num: number) {
    return num.toLocaleString('en-IN', { maximumFractionDigits: 0 });
  }

  // log tenure when it changes
  React.useEffect(() => {
    console.log(tenure);
  }, [tenure]);

  return (
    <CalculatorContainer className='grid md:grid-cols-2'>
      <Controls className='flex flex-col gap-10 p-6 lg:p-14'>
        <div className='text-3xl font-semibold'>{title}</div>

        <div>
          <div className="flex items-center justify-between">
            <p className="text-lg">Installment amount</p>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-lg">₹</span>
              <Input 
                type="text"
                value={formatToIndianCurrency(depositAmount)}
                onChange={(e: any) => setDepositAmount(e.target.value)}
                placeholder=""
                className='w-40 pl-8'
                inputMode='numeric'
                onKeyDown={(e: any) => (e.keyCode >= 48 && e.keyCode <= 57) || e.keyCode === 8 ? null : e.preventDefault()}
              />
            </div>
          </div>
          <div className='py-4'>
            <div className="mb-2">
              <Slider 
                defaultValue={[depositAmount]}
                value={[depositAmount]}
                min={1000}
                max={1000000}
                step={500}
                onValueChange={(e: any) => setDepositAmount(e)}
              />
            </div>
            <div className="flex items-center justify-between text-gray-500">
              <div className="text-xs">₹ 1,000</div>
              <div className="text-xs">₹ 10 Lakh</div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <p className="text-lg">Tenure</p>
            <Input 
              type="number"
              value={tenure}
              min={6}
              onChange={(e: any) => setTenure(e.target.value)}
              placeholder=""
              className='w-40'
              onKeyDown={(e: any) => e.keyCode === 32 && e.preventDefault()}
            />
          </div>
          <div className='py-4'>
            <div className="mb-2">
              <Slider 
                defaultValue={[6]}
                value={[tenure]}
                min={6}
                max={120}
                step={3}
                onValueChange={(e: any) => setTenure(e[0])}
              />
            </div>
            <div className="flex items-center justify-between text-gray-500">
              <div className="text-xs">6 Months</div>
              <div className="text-xs">120 Months</div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-lg">Start Date</p>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={clsx(
                  "justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full bg-white p-0">
              <Calendar
                mode="single"
                selected={date}
                // @ts-ignore
                onSelect={setDate}
                initialFocus
                className='w-auto'
              />
            </PopoverContent>
          </Popover>
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
            ₹ {formatToIndianCurrency(+depositAmount + +returnAmount)}
          </div>
          <p className='text-gray-500'>Amount on maturity</p>
        </div>

        <div className="w-max mx-auto rounded-xl flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 mb-32">
          <p>@</p>
          <div className='font-semibold text-2xl'>{interestRate}%</div>
          <p>Interest rate</p>
        </div>

        <div className="flex items-center justify-between mb-3">
          <p>Installment amount</p>
          <div className='text-xl font-bold'>
            ₹ {formatToIndianCurrency(depositAmount)}
          </div>
        </div>

        <div className="flex items-center justify-between mb-3">
          <p>Total earnings</p>
          <div className='text-xl font-bold'>
            ₹ {formatToIndianCurrency(returnAmount)}
          </div>
        </div>

        <div className="flex items-center justify-between mb-10">
          <p>Maturity Date</p>
          <div className='text-xl font-bold'>
            {format(addMonths(new Date(date), tenure), "PPP")}
          </div>
        </div>

        <CustomButton
          text={cta}
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
