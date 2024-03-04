import React from 'react'
import Button from './Button'
import { builder } from '@builder.io/react';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

type Service = {
  items: {
    title: string,
    description: string
  }[]
}

export default function FixedIncomeProducts() {
  const [fipData, setFipData] = React.useState<Service | null>(null)

  React.useEffect(() => {
    builder.get('treasury-services', {
      query: {
        name: "Fixed Income Products"
      }
    }).promise().then(( data: any ) => {
      if (data) setFipData(data.data)
    })
  }, [])

  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
        {
          fipData?.items.map((_: any, i: number) => (
            <div className='white-card' key={`fixed-income-product-${i}`}>
              <h6 className="mb-6">{_.title}</h6>
              <div className="mb-6">{_.description}</div>
              <Button
                text="Reach out to us"
                type="link"
                href=""
                action="form"
                popup="contact"
                icon="arrow-right"
              />
            </div>
          ))
        }
      </div>
    </div>
  )
}