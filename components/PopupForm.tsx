import React, { useEffect, useState } from 'react';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Checkbox } from './ui/checkbox';
import Button from './Button';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { usePathname } from 'next/navigation';

const topicValues = [
  {
    title: "Personal Banking",
    path: "/"
  },
  {
    title: "Business Banking",
    path: "/business"
  },
  {
    title: "Inclusive Banking",
    path: "/inclusive-banking"
  },
  {
    title: "Savings Account",
    path: "/personal/savings-account"
  },
  {
    title: "Fixed Deposits",
    path: "/personal/fixed-deposits"
  },
  {
    title: "Recurring Deposit",
    path: "/personal/recurring-deposit"
  },
  {
    title: "Lockers",
    path: "/personal/lockers"
  },
  {
    title: "Insurance",
    path: "/personal/insurance"
  },
  {
    title: "Personal Loans",
    path: "/personal/loans"
  },
  {
    title: "NRI Banking",
    path: "/personal/nri-banking"
  },
  {
    title: "Current Account",
    path: "/business/current-account"
  },
  {
    title: "MSME Loans",
    path: "/business/msme-loans"
  },
  {
    title: "Digital Lending",
    path: "/business/digital-lending"
  },
  {
    title: "Supply Chain Finance",
    path: "/business/supply-chain-finance"
  },
  {
    title: "Social Infra Finance",
    path: "/business/social-infra-finance"
  },
]

const PopupForm: React.FC<any> = ({ withResume }: { withResume: boolean }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    termsAgreed: true
  });
  const [topic, setTopic] = useState('');
  const pathname = usePathname()

  // in useEffect, setTopic to the title if current pathname matches the path
  useEffect(() => {
    const currentTopic = topicValues.find((topic) => topic.path === pathname);
    if (currentTopic) {
      setTopic(currentTopic.title);
    }
  }, [pathname]);

  const handleChange = (event: any) => {
    const { name, value, type, checked } = event.target;
    console.log(type)
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form className='flex flex-col gap-6' onSubmit={handleSubmit}>
      <h5>Reach out to us</h5>
      <div>
        <Label htmlFor="name">Name</Label>
        <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className='max-w-lg' />
      </div>
      <div>
        <Label htmlFor="email">Email ID</Label>
        <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className='max-w-lg' />
      </div>
      <div>
        <Label htmlFor="phone">Phone Number</Label>
        <Input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className='max-w-lg' />
      </div>
      <div>
        <Label>Topic</Label>
        <Select value={topic} onValueChange={(value: any) => setTopic(value)}>
          <SelectTrigger className="max-w-lg">
            <SelectValue placeholder="Select a topic" />
          </SelectTrigger>
          <SelectContent className='bg-white'>
            {
              topicValues.map((topic, index) => (
                <SelectItem key={index} value={topic.title}>{topic.title}</SelectItem>
              ))
            }
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea name="message" id="message" rows={5} value={formData.message} onChange={handleChange} />
      </div>
      {
        withResume && (
          <div>
            <Label htmlFor="resume">Resume</Label>
            <Input type="file" id="resume" name="resume" onChange={handleChange} />
          </div>
        )
      }
      <div className='flex items-center space-x-3'>
        <Checkbox 
          checked={formData.termsAgreed}
          id="termsAgreed"
          onCheckedChange={(checked) => {
            return checked
              ? setFormData(prevData => ({ ...prevData, termsAgreed: true }))
              : setFormData(prevData => ({ ...prevData, termsAgreed: false }));
          }}
        />
        <label
          htmlFor="termsAgreed"
          className="text-sm leading-relaxed text-gray-400 mt-[4px]"
        >
          I confirm that the above details are accurate and I agree with the <a href="/terms-and-conditions">Terms and Conditions</a>
        </label>
      </div>
      <div>
        <Button
          text="Submit"
          href=""
          action="submit"
          type="primary"
          icon="arrow-right"
        />
      </div>
    </form>
  );
};

export default PopupForm;