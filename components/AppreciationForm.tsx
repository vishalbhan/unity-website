import React, { useState } from 'react';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Checkbox } from './ui/checkbox';
import Button from './Button';

export default function AppreciationForm() {
  const [formData, setFormData] = useState({
    isUnityCustomer: true,
    appreciationDescription: '',
    name: '',
    email: '',
    phone: '',
    account: '',
    customerId: '',
    termsAgreed: false
  });

  const handleChange = (event: any) => {
    const { name, value, type, checked } = event.target;
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
    <form className='flex flex-col gap-12' onSubmit={handleSubmit}>
      <div>
        <Label className='text-black mb-3' htmlFor="unity-customer">Are you a Unity Bank customer?</Label>
        <div className="flex items-center space-x-4">
          <div className="flex space-x-2">
            <input type="radio" id="unity-customer-yes" name="isUnityCustomer" value="yes" checked={formData.isUnityCustomer} onChange={handleChange} />
            <label htmlFor="unity-customer-yes">Yes</label>
          </div>
          <div className="flex space-x-2">
            <input type="radio" id="unity-customer-no" name="isUnityCustomer" value="no" checked={!formData.isUnityCustomer} onChange={handleChange} />
            <label htmlFor="unity-customer-no">No</label>
          </div>
        </div>
      </div>
      <div>
        <Label htmlFor="appreciationDescription">Appreciation description</Label>
        <Textarea id="appreciationDescription" rows={5} value={formData.appreciationDescription} onChange={handleChange} />
      </div>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="email">Email ID</Label>
          <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="account">Account Number</Label>
          <Input type="text" id="account" name="account" value={formData.account} onChange={handleChange} />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <Label htmlFor="customer_id">Customer ID</Label>
          <Input type="text" id="customer_id" name="customerId" value={formData.customerId} onChange={handleChange} />
        </div>
      </div>
      <div className='flex items-center space-x-2'>
        {/* @ts-ignore */}
        <Checkbox id="terms" name="termsAgreed" checked={formData.termsAgreed} onChange={handleChange} />
        <label
          htmlFor="terms"
          className="text-sm leading-none text-gray-400"
        >
          I confirm that above details are accurate and I agree with the Terms and Conditions
        </label>
      </div>
      <div>
        <Button
          text="Submit"
          href="#"
          action="submit"
          type="primary"
          icon="arrow-right"
        />
      </div>
    </form>
  );
}
