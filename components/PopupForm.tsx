import React, { useState } from 'react';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Checkbox } from './ui/checkbox';
import Button from './Button';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';

const PopupForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    termsAgreed: true
  });

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
        <Select>
          <SelectTrigger className="max-w-lg">
            <SelectValue placeholder="Select a topic" />
          </SelectTrigger>
          <SelectContent className='bg-white'>
            <SelectItem value="Personal Banking">Personal Banking</SelectItem>
            <SelectItem value="Business Banking">Business Banking</SelectItem>
            <SelectItem value="Inclusive Banking">Inclusive Banking</SelectItem>
            <SelectItem value="Savings Account">Savings Account</SelectItem>
            <SelectItem value="Current Account">Current Account</SelectItem>
            <SelectItem value="Fixed Deposits">Fixed Deposits</SelectItem>
            <SelectItem value="Recurring Deposit">Recurring Deposit</SelectItem>
            <SelectItem value="Lockers">Lockers</SelectItem>
            <SelectItem value="Insurance">Insurance</SelectItem>
            <SelectItem value="Personal Loans">Personal Loans</SelectItem>
            <SelectItem value="NRI Banking">NRI Banking</SelectItem>
            <SelectItem value="MSME Loans">MSME Loans</SelectItem>
            <SelectItem value="Digital Lending">Digital Lending</SelectItem>
            <SelectItem value="Supply Chain Finance">Supply Chain Finance</SelectItem>
            <SelectItem value="Social Infra Finance">Social Infra Finance</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea name="message" id="message" rows={5} value={formData.message} onChange={handleChange} />
      </div>
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