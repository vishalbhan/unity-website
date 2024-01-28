import * as React from "react"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { PersonalCurrentAccount, FixedDeposit, Lockers, RecurringDeposit, SavingsAccount, MSMELoans, BusinessCurrentAccount, BusinessOverview, SupplyChainFinancing, DigitalLending, SocialInfrastructure } from "./icons"

const navItems = {
  personal: [
    {
      title: 'Savings Account',
      href: '/savings-account',
      icon: <SavingsAccount />
    },
    // {
    //   title: 'Current Account',
    //   href: '/current-account',
    //   icon: <PersonalCurrentAccount />
    // },
    {
      title: 'Fixed Deposit',
      href: '/fixed-deposit',
      icon: <FixedDeposit />
    },
    {
      title: 'Recurring Deposit',
      href: '/recurring-deposit',
      icon: <RecurringDeposit />
    },
    {
      title: 'Lockers',
      href: '/lockers',
      icon: <Lockers />
    }
  ],
  business: [
    {
      title: 'Overview',
      href: '/business',
      icon: <BusinessOverview />
    },
    {
      title: 'Current Account',
      href: '/business/current-account',
      icon: <BusinessCurrentAccount />
    },
    {
      title: 'MSME Loans',
      href: '/business/msme-loans',
      icon: <MSMELoans />
    },
    {
      title: 'Supply Chain Financing',
      href: '/business/supply-chain-financing',
      icon: <SupplyChainFinancing />
    },
    {
      title: 'Digital Lending',
      href: '/business/digital-lending',
      icon: <DigitalLending />
    },
    {
      title: 'Social Infrastructure',
      href: '/business/social-infrastructure',
      icon: <SocialInfrastructure />
    }
  ]
}

export function NavMenu({ style }: { style: string; }) {
  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-2 xl:gap-6">
        <NavigationMenuItem className="relative">
          <NavigationMenuTrigger style={{color: style === "light" ? "#000" : "#FFF"}}>Personal</NavigationMenuTrigger>
          <NavigationMenuContent className="p-10 rounded-xl shadow-lg bg-white">
            <h6 className="mb-8">Personal banking</h6>
            <ul className="grid grid-cols-2 w-[600px] gap-6">
              {navItems.personal.map((item) => (
                <li key={item.href}>
                  <NavigationMenuLink asChild href={item.href}>
                    <a className="flex items-center space-x-6">
                      {item.icon}
                      <p className="text-sm font-medium">{item.title}</p>
                    </a>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="relative">
          <NavigationMenuTrigger style={{color: style === "light" ? "#000" : "#FFF"}}>Business</NavigationMenuTrigger>
          <NavigationMenuContent className="p-10 rounded-xl shadow-lg bg-white">
            <h6 className="mb-8">Business banking</h6>
            <ul className="grid grid-cols-2 w-[600px] gap-6">
              {navItems.business.map((item) => (
                <li key={item.href}>
                  <NavigationMenuLink asChild href={item.href}>
                    <a className="flex items-center space-x-6">
                      {item.icon}
                      <p className="text-sm font-medium">{item.title}</p>
                    </a>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/inclusive" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()} style={{color: style === "light" ? "#000" : "#FFF"}}>
              Inclusive
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="left-12">
          <NavigationMenuTrigger style={{color: style === "light" ? "#000" : "#FFF"}}>Company</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid place-items-center w-[600px] gap-6 p-24 rounded-xl shadow-lg bg-white">
              <p className="text-sm">In Progress</p>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact-us" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}  style={{color: style === "light" ? "#000" : "#FFF"}}>
              Contact Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
