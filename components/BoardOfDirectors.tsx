import React from 'react'
import styled from 'styled-components'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogPortal,
  DialogTrigger,
} from "@/components/ui/dialog"
import { builder } from '@builder.io/react';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default function BoardOfDirectors() {
  const [data, setData] = React.useState<any>(null);

  React.useEffect(() => {
    builder.getAll('board-of-directors').then((data) => {
      setData(data);
    })
  }, []);

  return (
    <>
      <Container>
        {
          data?.map((item: any) => {
            return (
              <Dialog key={item.id}>
                <DialogTrigger className='cursor-pointer' asChild>
                  <TeamItem>
                    <div className='bg-gray-200'>
                      <img src={item.data.image} alt={item.data.name} className='object-cover' />
                    </div>
                    <div className='p-6'>
                      <div className="text-[14px] text-gray-500 mb-4">{item.data.designation}</div>
                      <div className='text-lg font-semibold mb-4'>{item.data.name}</div>
                      {
                        item.data.linkedin &&
                        <a href={item.data.linkedin} target='_blank' className='block mb-4'>
                          <svg width={76} height={24} viewBox="0 0 76 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.6">
                              <path d="M14.6207 4.85716H2.5207C2.38469 4.85527 2.24963 4.88019 2.12325 4.9305C1.99687 4.98081 1.88163 5.05553 1.78413 5.15038C1.68663 5.24523 1.60876 5.35836 1.55498 5.48331C1.5012 5.60825 1.47257 5.74257 1.4707 5.87858V18.1214C1.47257 18.2575 1.5012 18.3918 1.55498 18.5167C1.60876 18.6417 1.68663 18.7548 1.78413 18.8496C1.88163 18.9445 1.99687 19.0192 2.12325 19.0695C2.24963 19.1198 2.38469 19.1448 2.5207 19.1429H14.6207C14.7567 19.1448 14.8918 19.1198 15.0182 19.0695C15.1445 19.0192 15.2598 18.9445 15.3573 18.8496C15.4548 18.7548 15.5326 18.6417 15.5864 18.5167C15.6402 18.3918 15.6688 18.2575 15.6707 18.1214V5.87858C15.6688 5.74257 15.6402 5.60825 15.5864 5.48331C15.5326 5.35836 15.4548 5.24523 15.3573 5.15038C15.2598 5.05553 15.1445 4.98081 15.0182 4.9305C14.8918 4.88019 14.7567 4.85527 14.6207 4.85716ZM5.77785 16.8143H3.63499V10.3857H5.77785V16.8143ZM4.70642 9.48573C4.41089 9.48573 4.12747 9.36833 3.9185 9.15936C3.70953 8.95039 3.59213 8.66697 3.59213 8.37144C3.59213 8.07591 3.70953 7.79249 3.9185 7.58352C4.12747 7.37455 4.41089 7.25716 4.70642 7.25716C4.86334 7.23936 5.02226 7.25491 5.17276 7.30279C5.32326 7.35066 5.46195 7.42979 5.57974 7.53499C5.69754 7.64018 5.79179 7.76907 5.85633 7.91321C5.92086 8.05736 5.95422 8.21351 5.95422 8.37144C5.95422 8.52937 5.92086 8.68552 5.85633 8.82967C5.79179 8.97381 5.69754 9.1027 5.57974 9.2079C5.46195 9.31309 5.32326 9.39222 5.17276 9.4401C5.02226 9.48797 4.86334 9.50352 4.70642 9.48573ZM13.5064 16.8143H11.3636V13.3643C11.3636 12.5 11.0564 11.9357 10.2778 11.9357C10.0369 11.9375 9.80227 12.0131 9.60559 12.1523C9.40891 12.2915 9.25962 12.4876 9.17785 12.7143C9.12195 12.8822 9.09773 13.059 9.10642 13.2357V16.8072H6.96356C6.96356 16.8072 6.96356 10.9643 6.96356 10.3786H9.10642V11.2857C9.30108 10.9479 9.58421 10.6697 9.9253 10.4809C10.2664 10.2921 10.6525 10.1999 11.0421 10.2143C12.4707 10.2143 13.5064 11.1357 13.5064 13.1143V16.8143Z" fill="black" />
                              <path d="M24.9826 16.5V7.63103H26.6633V15.0391H31.1107V16.5H24.9826ZM32.3429 8.65239V7.15268H33.9202V8.65239H32.3429ZM32.3429 16.5V9.6996H33.9202V16.5H32.3429ZM35.7296 16.5V9.6996H37.0483L37.1776 10.6046H37.2681C37.4232 10.3977 37.6042 10.2167 37.8111 10.0616C38.0266 9.89783 38.2679 9.77286 38.5351 9.68667C38.8109 9.59186 39.1126 9.54445 39.4401 9.54445C39.871 9.54445 40.2503 9.62202 40.5778 9.77717C40.9139 9.93231 41.1768 10.1823 41.3664 10.527C41.5561 10.8718 41.6509 11.3329 41.6509 11.9104V16.5H40.0607V12.1948C40.0607 11.9535 40.0305 11.7552 39.9702 11.6001C39.9184 11.4363 39.8366 11.307 39.7245 11.2122C39.6211 11.1088 39.4918 11.0355 39.3367 10.9924C39.1815 10.9494 39.0091 10.9278 38.8195 10.9278C38.5351 10.9278 38.2765 10.9968 38.0438 11.1347C37.8197 11.2726 37.6387 11.4622 37.5008 11.7035C37.3715 11.9448 37.3069 12.225 37.3069 12.5439V16.5H35.7296ZM43.4089 16.5V7.15268H44.9862V12.5956L47.4297 9.6996H49.2785L47.0031 12.337L49.4078 16.5H47.5978L45.9947 13.4877L44.9862 14.4573V16.5H43.4089ZM53.0253 16.6551C52.3013 16.6551 51.698 16.5302 51.2154 16.2802C50.7327 16.0216 50.3707 15.6295 50.1294 15.1037C49.888 14.578 49.7674 13.91 49.7674 13.0998C49.7674 12.281 49.888 11.613 50.1294 11.0959C50.3707 10.5701 50.7327 10.1823 51.2154 9.93231C51.698 9.67374 52.3013 9.54445 53.0253 9.54445C53.6804 9.54445 54.2277 9.66943 54.6673 9.91938C55.1155 10.1607 55.4516 10.5356 55.6757 11.0442C55.8998 11.5527 56.0118 12.212 56.0118 13.0222V13.4877H51.3834C51.4007 13.91 51.4653 14.2677 51.5773 14.5607C51.6894 14.8451 51.8618 15.0606 52.0945 15.2071C52.3358 15.3451 52.6504 15.414 53.0383 15.414C53.2365 15.414 53.4218 15.3881 53.5942 15.3364C53.7666 15.2847 53.9174 15.2071 54.0467 15.1037C54.176 14.9917 54.2751 14.8538 54.3441 14.69C54.4216 14.5262 54.4604 14.3366 54.4604 14.1212H56.0118C56.0118 14.5521 55.9343 14.927 55.7791 15.2459C55.6326 15.5648 55.4214 15.8277 55.1456 16.0346C54.8784 16.2414 54.5638 16.3966 54.2018 16.5C53.8398 16.6034 53.4477 16.6551 53.0253 16.6551ZM51.4093 12.3758H54.3699C54.3699 12.0914 54.3354 11.85 54.2665 11.6518C54.2061 11.4536 54.1156 11.2898 53.995 11.1605C53.8829 11.0312 53.745 10.9407 53.5813 10.889C53.4175 10.8287 53.2322 10.7985 53.0253 10.7985C52.6892 10.7985 52.4048 10.8545 52.1721 10.9666C51.948 11.0786 51.7756 11.251 51.6549 11.4837C51.5343 11.7164 51.4524 12.0138 51.4093 12.3758ZM59.8457 16.6551C59.2941 16.6551 58.8158 16.5302 58.4107 16.2802C58.0056 16.0303 57.691 15.6424 57.4669 15.1166C57.2514 14.5909 57.1437 13.9143 57.1437 13.0869C57.1437 12.2681 57.2557 11.6001 57.4798 11.0829C57.7039 10.5572 58.0142 10.1693 58.4107 9.91938C58.8072 9.66943 59.2553 9.54445 59.7552 9.54445C60.0655 9.54445 60.35 9.57893 60.6085 9.64788C60.8671 9.71683 61.0955 9.82457 61.2937 9.9711C61.492 10.109 61.6601 10.2814 61.798 10.4882H61.8755V7.15268H63.4528V16.5H62.147L62.0177 15.595H61.9272C61.7118 15.9484 61.4187 16.2156 61.0481 16.3966C60.6861 16.569 60.2853 16.6551 59.8457 16.6551ZM60.337 15.2976C60.699 15.2976 60.9921 15.2158 61.2162 15.052C61.4403 14.8882 61.604 14.6512 61.7075 14.3409C61.8195 14.0307 61.8755 13.6514 61.8755 13.2032V13.0352C61.8755 12.699 61.8454 12.3973 61.785 12.1302C61.7247 11.863 61.6299 11.6389 61.5006 11.4579C61.3799 11.2769 61.2205 11.139 61.0222 11.0442C60.8326 10.9494 60.6042 10.9019 60.337 10.9019C59.9492 10.9019 59.6389 10.9795 59.4062 11.1347C59.1821 11.2812 59.0183 11.5139 58.9149 11.8328C58.8201 12.1431 58.7727 12.5396 58.7727 13.0222V13.2032C58.7727 13.6773 58.8201 14.0694 58.9149 14.3797C59.0183 14.69 59.1821 14.9227 59.4062 15.0779C59.6389 15.2244 59.9492 15.2976 60.337 15.2976ZM65.2602 8.65239V7.15268H66.8375V8.65239H65.2602ZM65.2602 16.5V9.6996H66.8375V16.5H65.2602ZM68.6468 16.5V9.6996H69.9655L70.0948 10.6046H70.1853C70.3405 10.3977 70.5215 10.2167 70.7283 10.0616C70.9438 9.89783 71.1851 9.77286 71.4523 9.68667C71.7281 9.59186 72.0298 9.54445 72.3573 9.54445C72.7883 9.54445 73.1675 9.62202 73.495 9.77717C73.8312 9.93231 74.0941 10.1823 74.2837 10.527C74.4733 10.8718 74.5681 11.3329 74.5681 11.9104V16.5H72.9779V12.1948C72.9779 11.9535 72.9477 11.7552 72.8874 11.6001C72.8357 11.4363 72.7538 11.307 72.6418 11.2122C72.5383 11.1088 72.409 11.0355 72.2539 10.9924C72.0988 10.9494 71.9264 10.9278 71.7368 10.9278C71.4523 10.9278 71.1938 10.9968 70.961 11.1347C70.7369 11.2726 70.556 11.4622 70.418 11.7035C70.2888 11.9448 70.2241 12.225 70.2241 12.5439V16.5H68.6468Z" fill="black" />
                            </g>
                          </svg>
                        </a>
                      }
                    </div>
                  </TeamItem>
                </DialogTrigger>
                <DialogPortal>
                  <DialogContent className='bg-white' style={{maxWidth:'860px'}}>
                    <div className="grid grid-cols-3">
                      <div className='border-r-2 p-6'>
                        <img src={item.data.image} alt={item.data.name} className='object-cover mb-4' />
                        <div className="text-[14px] text-gray-500 mb-4">{item.data.designation}</div>
                        <div className='text-lg font-semibold mb-4'>{item.data.name}</div>
                        {
                          item.data.linkedin &&
                          <a href={item.data.linkedin} target='_blank' className='block mb-4'>
                            <svg width={76} height={24} viewBox="0 0 76 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g opacity="0.6">
                                <path d="M14.6207 4.85716H2.5207C2.38469 4.85527 2.24963 4.88019 2.12325 4.9305C1.99687 4.98081 1.88163 5.05553 1.78413 5.15038C1.68663 5.24523 1.60876 5.35836 1.55498 5.48331C1.5012 5.60825 1.47257 5.74257 1.4707 5.87858V18.1214C1.47257 18.2575 1.5012 18.3918 1.55498 18.5167C1.60876 18.6417 1.68663 18.7548 1.78413 18.8496C1.88163 18.9445 1.99687 19.0192 2.12325 19.0695C2.24963 19.1198 2.38469 19.1448 2.5207 19.1429H14.6207C14.7567 19.1448 14.8918 19.1198 15.0182 19.0695C15.1445 19.0192 15.2598 18.9445 15.3573 18.8496C15.4548 18.7548 15.5326 18.6417 15.5864 18.5167C15.6402 18.3918 15.6688 18.2575 15.6707 18.1214V5.87858C15.6688 5.74257 15.6402 5.60825 15.5864 5.48331C15.5326 5.35836 15.4548 5.24523 15.3573 5.15038C15.2598 5.05553 15.1445 4.98081 15.0182 4.9305C14.8918 4.88019 14.7567 4.85527 14.6207 4.85716ZM5.77785 16.8143H3.63499V10.3857H5.77785V16.8143ZM4.70642 9.48573C4.41089 9.48573 4.12747 9.36833 3.9185 9.15936C3.70953 8.95039 3.59213 8.66697 3.59213 8.37144C3.59213 8.07591 3.70953 7.79249 3.9185 7.58352C4.12747 7.37455 4.41089 7.25716 4.70642 7.25716C4.86334 7.23936 5.02226 7.25491 5.17276 7.30279C5.32326 7.35066 5.46195 7.42979 5.57974 7.53499C5.69754 7.64018 5.79179 7.76907 5.85633 7.91321C5.92086 8.05736 5.95422 8.21351 5.95422 8.37144C5.95422 8.52937 5.92086 8.68552 5.85633 8.82967C5.79179 8.97381 5.69754 9.1027 5.57974 9.2079C5.46195 9.31309 5.32326 9.39222 5.17276 9.4401C5.02226 9.48797 4.86334 9.50352 4.70642 9.48573ZM13.5064 16.8143H11.3636V13.3643C11.3636 12.5 11.0564 11.9357 10.2778 11.9357C10.0369 11.9375 9.80227 12.0131 9.60559 12.1523C9.40891 12.2915 9.25962 12.4876 9.17785 12.7143C9.12195 12.8822 9.09773 13.059 9.10642 13.2357V16.8072H6.96356C6.96356 16.8072 6.96356 10.9643 6.96356 10.3786H9.10642V11.2857C9.30108 10.9479 9.58421 10.6697 9.9253 10.4809C10.2664 10.2921 10.6525 10.1999 11.0421 10.2143C12.4707 10.2143 13.5064 11.1357 13.5064 13.1143V16.8143Z" fill="black" />
                                <path d="M24.9826 16.5V7.63103H26.6633V15.0391H31.1107V16.5H24.9826ZM32.3429 8.65239V7.15268H33.9202V8.65239H32.3429ZM32.3429 16.5V9.6996H33.9202V16.5H32.3429ZM35.7296 16.5V9.6996H37.0483L37.1776 10.6046H37.2681C37.4232 10.3977 37.6042 10.2167 37.8111 10.0616C38.0266 9.89783 38.2679 9.77286 38.5351 9.68667C38.8109 9.59186 39.1126 9.54445 39.4401 9.54445C39.871 9.54445 40.2503 9.62202 40.5778 9.77717C40.9139 9.93231 41.1768 10.1823 41.3664 10.527C41.5561 10.8718 41.6509 11.3329 41.6509 11.9104V16.5H40.0607V12.1948C40.0607 11.9535 40.0305 11.7552 39.9702 11.6001C39.9184 11.4363 39.8366 11.307 39.7245 11.2122C39.6211 11.1088 39.4918 11.0355 39.3367 10.9924C39.1815 10.9494 39.0091 10.9278 38.8195 10.9278C38.5351 10.9278 38.2765 10.9968 38.0438 11.1347C37.8197 11.2726 37.6387 11.4622 37.5008 11.7035C37.3715 11.9448 37.3069 12.225 37.3069 12.5439V16.5H35.7296ZM43.4089 16.5V7.15268H44.9862V12.5956L47.4297 9.6996H49.2785L47.0031 12.337L49.4078 16.5H47.5978L45.9947 13.4877L44.9862 14.4573V16.5H43.4089ZM53.0253 16.6551C52.3013 16.6551 51.698 16.5302 51.2154 16.2802C50.7327 16.0216 50.3707 15.6295 50.1294 15.1037C49.888 14.578 49.7674 13.91 49.7674 13.0998C49.7674 12.281 49.888 11.613 50.1294 11.0959C50.3707 10.5701 50.7327 10.1823 51.2154 9.93231C51.698 9.67374 52.3013 9.54445 53.0253 9.54445C53.6804 9.54445 54.2277 9.66943 54.6673 9.91938C55.1155 10.1607 55.4516 10.5356 55.6757 11.0442C55.8998 11.5527 56.0118 12.212 56.0118 13.0222V13.4877H51.3834C51.4007 13.91 51.4653 14.2677 51.5773 14.5607C51.6894 14.8451 51.8618 15.0606 52.0945 15.2071C52.3358 15.3451 52.6504 15.414 53.0383 15.414C53.2365 15.414 53.4218 15.3881 53.5942 15.3364C53.7666 15.2847 53.9174 15.2071 54.0467 15.1037C54.176 14.9917 54.2751 14.8538 54.3441 14.69C54.4216 14.5262 54.4604 14.3366 54.4604 14.1212H56.0118C56.0118 14.5521 55.9343 14.927 55.7791 15.2459C55.6326 15.5648 55.4214 15.8277 55.1456 16.0346C54.8784 16.2414 54.5638 16.3966 54.2018 16.5C53.8398 16.6034 53.4477 16.6551 53.0253 16.6551ZM51.4093 12.3758H54.3699C54.3699 12.0914 54.3354 11.85 54.2665 11.6518C54.2061 11.4536 54.1156 11.2898 53.995 11.1605C53.8829 11.0312 53.745 10.9407 53.5813 10.889C53.4175 10.8287 53.2322 10.7985 53.0253 10.7985C52.6892 10.7985 52.4048 10.8545 52.1721 10.9666C51.948 11.0786 51.7756 11.251 51.6549 11.4837C51.5343 11.7164 51.4524 12.0138 51.4093 12.3758ZM59.8457 16.6551C59.2941 16.6551 58.8158 16.5302 58.4107 16.2802C58.0056 16.0303 57.691 15.6424 57.4669 15.1166C57.2514 14.5909 57.1437 13.9143 57.1437 13.0869C57.1437 12.2681 57.2557 11.6001 57.4798 11.0829C57.7039 10.5572 58.0142 10.1693 58.4107 9.91938C58.8072 9.66943 59.2553 9.54445 59.7552 9.54445C60.0655 9.54445 60.35 9.57893 60.6085 9.64788C60.8671 9.71683 61.0955 9.82457 61.2937 9.9711C61.492 10.109 61.6601 10.2814 61.798 10.4882H61.8755V7.15268H63.4528V16.5H62.147L62.0177 15.595H61.9272C61.7118 15.9484 61.4187 16.2156 61.0481 16.3966C60.6861 16.569 60.2853 16.6551 59.8457 16.6551ZM60.337 15.2976C60.699 15.2976 60.9921 15.2158 61.2162 15.052C61.4403 14.8882 61.604 14.6512 61.7075 14.3409C61.8195 14.0307 61.8755 13.6514 61.8755 13.2032V13.0352C61.8755 12.699 61.8454 12.3973 61.785 12.1302C61.7247 11.863 61.6299 11.6389 61.5006 11.4579C61.3799 11.2769 61.2205 11.139 61.0222 11.0442C60.8326 10.9494 60.6042 10.9019 60.337 10.9019C59.9492 10.9019 59.6389 10.9795 59.4062 11.1347C59.1821 11.2812 59.0183 11.5139 58.9149 11.8328C58.8201 12.1431 58.7727 12.5396 58.7727 13.0222V13.2032C58.7727 13.6773 58.8201 14.0694 58.9149 14.3797C59.0183 14.69 59.1821 14.9227 59.4062 15.0779C59.6389 15.2244 59.9492 15.2976 60.337 15.2976ZM65.2602 8.65239V7.15268H66.8375V8.65239H65.2602ZM65.2602 16.5V9.6996H66.8375V16.5H65.2602ZM68.6468 16.5V9.6996H69.9655L70.0948 10.6046H70.1853C70.3405 10.3977 70.5215 10.2167 70.7283 10.0616C70.9438 9.89783 71.1851 9.77286 71.4523 9.68667C71.7281 9.59186 72.0298 9.54445 72.3573 9.54445C72.7883 9.54445 73.1675 9.62202 73.495 9.77717C73.8312 9.93231 74.0941 10.1823 74.2837 10.527C74.4733 10.8718 74.5681 11.3329 74.5681 11.9104V16.5H72.9779V12.1948C72.9779 11.9535 72.9477 11.7552 72.8874 11.6001C72.8357 11.4363 72.7538 11.307 72.6418 11.2122C72.5383 11.1088 72.409 11.0355 72.2539 10.9924C72.0988 10.9494 71.9264 10.9278 71.7368 10.9278C71.4523 10.9278 71.1938 10.9968 70.961 11.1347C70.7369 11.2726 70.556 11.4622 70.418 11.7035C70.2888 11.9448 70.2241 12.225 70.2241 12.5439V16.5H68.6468Z" fill="black" />
                              </g>
                            </svg>
                          </a>
                        }
                      </div>
                      <div className="col-span-2 p-6 sm">
                        <div className='text-lg font-semibold mb-4'>About {item.data.name}</div>
                        <p>
                          {item.data.bio}
                        </p>
                      </div>
                    </div>
                  </DialogContent>
                </DialogPortal>
              </Dialog>
            )
          })
        }
      </Container>
    </>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
  align-items: stretch;
`

const TeamItem = styled.div`
  border-radius: 16px;
  background: #FFF;
  box-shadow: 0px 4px 16px 0px rgba(168, 161, 125, 0.12), 0px 0px 4px 0px rgba(0, 0, 0, 0.10), 0px 0px 1px 0px rgba(0, 0, 0, 0.13);
`
