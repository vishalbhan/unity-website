// import * as React from "react"
// import Link from "next/link"
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu"
// import { PersonalCurrentAccount, FixedDeposit, Lockers, RecurringDeposit, SavingsAccount, MSMELoans, BusinessCurrentAccount, BusinessOverview, SupplyChainFinancing, DigitalLending, SocialInfrastructure, AboutUnity, TreasuryServices, OurTeam, CommunicationCentre, Careers, PMCBankSchemes, Investors, RegulatoryDisclosures, PersonalLoans, PersonalInsurance } from "./icons"

// const navItems = {
//   personal: {
//     save: [
//       {
//         title: 'Savings Account',
//         href: '/personal/savings-account',
//         icon: <SavingsAccount />
//       },
//       {
//         title: 'Current Account',
//         href: '/personal/current-account',
//         icon: <PersonalCurrentAccount />
//       },
//       {
//         title: 'Fixed Deposit',
//         href: '/personal/fixed-deposit',
//         icon: <FixedDeposit />
//       },
//       {
//         title: 'Recurring Deposit',
//         href: '/personal/recurring-deposit',
//         icon: <RecurringDeposit />
//       },
//       {
//         title: 'Lockers',
//         href: '/personal/lockers',
//         icon: <Lockers />
//       }
//     ],
//     borrow: [
//       {
//         title: 'Personal Loan',
//         href: '/personal/loans',
//         icon: <PersonalLoans />
//       }
//     ],
//     invest: [
//       {
//         title: 'General/Health Insurance',
//         href: '/personal/insurance',
//         icon: <PersonalInsurance />
//       },
//     ]
//   },
//   business: [
//     {
//       title: 'Overview',
//       href: '/business',
//       icon: <BusinessOverview />
//     },
//     {
//       title: 'Current Account',
//       href: '/business/current-account',
//       icon: <BusinessCurrentAccount />
//     },
//     {
//       title: 'MSME Loans',
//       href: '/business/msme-loans',
//       icon: <MSMELoans />
//     },
//     {
//       title: 'Supply Chain Financing',
//       href: '/business/supply-chain-finance',
//       icon: <SupplyChainFinancing />
//     },
//     {
//       title: 'Digital Lending',
//       href: '/business/digital-lending',
//       icon: <DigitalLending />
//     },
//     {
//       title: 'Social Infra Finance',
//       href: '/business/social-infra-finance',
//       icon: <SocialInfrastructure />
//     }
//   ],
//   company: [
//     {
//       title: 'About Unity',
//       href: '/about-us',
//       icon: <AboutUnity />
//     },
//     {
//       title: 'Treasury Services',
//       href: '/treasury-services',
//       icon: <TreasuryServices />
//     },
//     {
//       title: 'Our Team',
//       href: '/team',
//       icon: <OurTeam />
//     },
//     {
//       title: 'Communication centre',
//       href: '/communication-centre',
//       icon: <CommunicationCentre />
//     },
//     {
//       title: 'Careers',
//       href: '/careers',
//       icon: <Careers />
//     },
//     {
//       title: 'PMC Bank Schemes',
//       href: '/pmc-bank-schemes',
//       icon: <PMCBankSchemes />
//     },
//     {
//       title: 'Investors',
//       href: '/investors',
//       icon: <Investors />
//     },
//     {
//       title: 'Regulatory disclosures',
//       href: '/regulatory-disclosures',
//       icon: <RegulatoryDisclosures />
//     },
//   ]
// }

// export function NavMenu({ style }: { style: string; }) {
//   const [personalSelectedIndex, setPersonalSelectedIndex] = React.useState(0)

//   return (
//     <NavigationMenu>
//       <NavigationMenuList className="gap-2 xl:gap-6">
//         <NavigationMenuItem className="relative">
//           <NavigationMenuTrigger style={{color: style === "light" ? "#000" : "#FFF"}}>Personal</NavigationMenuTrigger>
//           <NavigationMenuContent className="p-10 rounded-xl shadow-lg bg-white">
//             <div className="w-[800px]">
//               <h6 className="mb-8">Personal banking</h6>
//               <div className="grid grid-cols-5 items-start gap-8">
//                 <div className="col-span-2">
//                   <div className={`sm rounded-xl mb-4 p-4 ${personalSelectedIndex === 0 ? 'bg-[#F5F4F1]' : ''}`} onMouseEnter={() => setPersonalSelectedIndex(0)}>
//                     <h6 className="">Save</h6>
//                     <p>Grow your savings securely with unity accounts and deposits</p>
//                   </div>
//                   <div className={`sm rounded-xl mb-4 p-4 ${personalSelectedIndex === 1 ? 'bg-[#F5F4F1]' : ''}`} onMouseEnter={() => setPersonalSelectedIndex(1)}>
//                     <h6 className="">Borrow</h6>
//                     <p>Get instant loans with interest rates in your interest</p>
//                   </div>
//                   <div className={`sm rounded-xl mb-4 p-4 ${personalSelectedIndex === 2 ? 'bg-[#F5F4F1]' : ''}`} onMouseEnter={() => setPersonalSelectedIndex(2)}>
//                     <h6 className="">Invest</h6>
//                     <p>Secure your future with health insurance etc</p>
//                   </div>
//                 </div>
//                 <ul className="col-span-3 grid grid-cols-2 gap-6">
//                   {personalSelectedIndex === 0 && navItems.personal.save.map((item) => (
//                     <li key={item.href}>
//                       <NavigationMenuLink asChild href={item.href}>
//                         <a className="flex items-center space-x-6">
//                           {item.icon}
//                           <p className="text-sm font-medium">{item.title}</p>
//                         </a>
//                       </NavigationMenuLink>
//                     </li>
//                   ))}
//                   {personalSelectedIndex === 1 && navItems.personal.borrow.map((item) => (
//                     <li key={item.href}>
//                       <NavigationMenuLink asChild href={item.href}>
//                         <a className="flex items-center space-x-6">
//                           {item.icon}
//                           <p className="text-sm font-medium">{item.title}</p>
//                         </a>
//                       </NavigationMenuLink>
//                     </li>
//                   ))}
//                   {personalSelectedIndex === 2 && navItems.personal.invest.map((item) => (
//                     <li key={item.href} className="col-span-2">
//                       <NavigationMenuLink asChild href={item.href}>
//                         <a className="flex items-center space-x-6">
//                           {item.icon}
//                           <p className="text-sm font-medium">{item.title}</p>
//                         </a>
//                       </NavigationMenuLink>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </NavigationMenuContent>
//         </NavigationMenuItem>
//         <NavigationMenuItem className="relative">
//           <NavigationMenuTrigger style={{color: style === "light" ? "#000" : "#FFF"}}>Business</NavigationMenuTrigger>
//           <NavigationMenuContent className="p-10 rounded-xl shadow-lg bg-white">
//             <h6 className="mb-8">Business banking</h6>
//             <ul className="grid grid-cols-2 w-[600px] gap-6">
//               {navItems.business.map((item) => (
//                 <li key={item.href}>
//                   <NavigationMenuLink asChild href={item.href}>
//                     <a className="flex items-center space-x-6">
//                       {item.icon}
//                       <p className="text-sm font-medium">{item.title}</p>
//                     </a>
//                   </NavigationMenuLink>
//                 </li>
//               ))}
//             </ul>
//           </NavigationMenuContent>
//         </NavigationMenuItem>
//         <NavigationMenuItem>
//           <Link href="/inclusive-banking" legacyBehavior passHref>
//             <NavigationMenuLink className={navigationMenuTriggerStyle()} style={{color: style === "light" ? "#000" : "#FFF"}}>
//               Inclusive
//             </NavigationMenuLink>
//           </Link>
//         </NavigationMenuItem>
//         <NavigationMenuItem className="left-12">
//           <NavigationMenuTrigger style={{color: style === "light" ? "#000" : "#FFF"}}>Company</NavigationMenuTrigger>
//           <NavigationMenuContent className="p-10 rounded-xl shadow-lg bg-white">
//             <ul className="grid grid-cols-2 w-[600px] gap-6">
//               {navItems.company.map((item) => (
//                 <li key={item.href}>
//                   <NavigationMenuLink asChild href={item.href}>
//                     <a className="flex items-center space-x-6">
//                       {item.icon}
//                       <p className="text-sm font-medium">{item.title}</p>
//                     </a>
//                   </NavigationMenuLink>
//                 </li>
//               ))}
//             </ul>
//           </NavigationMenuContent>
//         </NavigationMenuItem>
//         <NavigationMenuItem>
//           <Link href="/contact-us" legacyBehavior passHref>
//             <NavigationMenuLink className={navigationMenuTriggerStyle()}  style={{color: style === "light" ? "#000" : "#FFF"}}>
//               Contact Us
//             </NavigationMenuLink>
//           </Link>
//         </NavigationMenuItem>
//       </NavigationMenuList>
//     </NavigationMenu>
//   )
// }
