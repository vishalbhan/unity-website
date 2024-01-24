import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


type FAQs = {
  faqs: {
    question: string
    answer: string
  }[]
}

export default function FAQs({ faqs }: FAQs) {
  return (
    <div>
      <Accordion type="single" collapsible>
        {
          faqs.map((faq, index) => {
            return (
              <div key={index}>
                <AccordionItem value={index.toString()} className='max-w-4xl mx-auto py-8'>
                  <AccordionTrigger>
                    <div className='text-xl'>{faq.question}</div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              </div>
            )
          })
        }
      </Accordion>
    </div>
  )
}
