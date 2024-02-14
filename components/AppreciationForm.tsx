import React, { useState } from 'react'
import { Textarea } from './ui/textarea'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Checkbox } from './ui/checkbox'
import Button from './Button'

export default function AppreciationForm() {
  const [isUnityCustomer, setIsUnityCustomer] = useState(true)
  const [appreciationDescription, setAppreciationDescription] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [account, setAccount] = useState('')
  const [customerId, setCustomerId] = useState('')
  const [termsAgreed, setTermsAgreed] = useState(false)

  const handleUnityCustomerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsUnityCustomer(event.target.value === 'yes')
  }

  const handleAppreciationDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAppreciationDescription(event.target.value)
  }

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value)
  }

  const handleAccountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAccount(event.target.value)
  }

  const handleCustomerIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCustomerId(event.target.value)
  }

  const handleTermsAgreedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTermsAgreed(event.target.checked)
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Handle form submission logic here
  }

  return (
    <form className='flex flex-col gap-12' onSubmit={handleSubmit}>
      <div>
        <Label className='text-black mb-3' htmlFor="message">Are you a Unity Bank customer?</Label>
        <div className="flex items-center space-x-4">
          <div className="flex space-x-2">
            <input type="radio" id="unity-customer-yes" name="unity-customer" value="yes" checked={isUnityCustomer} onChange={handleUnityCustomerChange} />
            <label htmlFor="unity-customer-yes">Yes</label>
          </div>
          <div className="flex space-x-2">
            <input type="radio" id="unity-customer-no" name="unity-customer" value="no" checked={!isUnityCustomer} onChange={handleUnityCustomerChange} />
            <label htmlFor="unity-customer-no">No</label>
          </div>
        </div>
      </div>
      <div>
        <Label htmlFor="message">Appreciation description</Label>
        <Textarea id="message" rows={5} value={appreciationDescription} onChange={handleAppreciationDescriptionChange} />
      </div>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <Label htmlFor="email">Email ID</Label>
          <Input type="email" id="email" value={email} onChange={handleEmailChange} />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input type="tel" id="phone" value={phone} onChange={handlePhoneChange} />
        </div>
        <div>
          <Label htmlFor="account">Account Number</Label>
          <Input type="text" id="account" value={account} onChange={handleAccountChange} />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <Label htmlFor="customer_id">Customer ID</Label>
          <Input type="text" id="customer_id" value={customerId} onChange={handleCustomerIdChange} />
        </div>
      </div>
      <div className='flex items-center space-x-2'>
        {/* @ts-ignore */}
        <Checkbox id="terms" checked={termsAgreed} onChange={handleTermsAgreedChange} />
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
          type="primary"
          icon="arrow-right"
        />
      </div>
    </form>
  )
}
