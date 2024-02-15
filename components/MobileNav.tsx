import { ArrowLeft, ChevronRight, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";
import styled from "styled-components";
import { AboutUnity, BusinessCurrentAccount, BusinessOverview, Careers, CommunicationCentre, DigitalLending, FixedDeposit, Investors, Lockers, LogoLarge, MSMELoans, OurTeam, PMCBankSchemes, PersonalCurrentAccount, RecurringDeposit, RegulatoryDisclosures, SavingsAccount, SocialInfrastructure, SupplyChainFinancing, TreasuryServices } from "./icons";
import Button from "./Button";
import Link from "next/link";

const navItems = {
  personal: [
    {
      title: 'Savings Account',
      href: '/personal/savings-account',
      icon: <SavingsAccount />
    },
    {
      title: 'Current Account',
      href: '/personal/current-account',
      icon: <PersonalCurrentAccount />
    },
    {
      title: 'Fixed Deposit',
      href: '/personal/fixed-deposit',
      icon: <FixedDeposit />
    },
    {
      title: 'Recurring Deposit',
      href: '/personal/recurring-deposit',
      icon: <RecurringDeposit />
    },
    {
      title: 'Lockers',
      href: '/personal/lockers',
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
      href: '/business/supply-chain-finance',
      icon: <SupplyChainFinancing />
    },
    {
      title: 'Digital Lending',
      href: '/business/digital-lending',
      icon: <DigitalLending />
    },
    {
      title: 'Social Infra Finance',
      href: '/business/social-infra-finance',
      icon: <SocialInfrastructure />
    }
  ],
  company: [
    {
      title: 'About Unity',
      href: '/about-us',
      icon: <AboutUnity />
    },
    {
      title: 'Treasury Services',
      href: '/treasury-services',
      icon: <TreasuryServices />
    },
    {
      title: 'Our Team',
      href: '/team',
      icon: <OurTeam />
    },
    {
      title: 'Communication centre',
      href: '/communication-centre',
      icon: <CommunicationCentre />
    },
    {
      title: 'Careers',
      href: '/careers',
      icon: <Careers />
    },
    {
      title: 'PMC Bank Schemes',
      href: '/pmc-bank-schemes',
      icon: <PMCBankSchemes />
    },
    {
      title: 'Investors',
      href: '/investors',
      icon: <Investors />
    },
    {
      title: 'Regulatory disclosures',
      href: '/regulatory-disclosures',
      icon: <RegulatoryDisclosures />
    },
  ]
}

export default function MobileNav({
  style,
}: {
  style: string
}) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [page, setPage] = React.useState("main")
  const pathname = usePathname()

  React.useEffect(() => {
    handleClose()
  }, [pathname])

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
    setPage("main")
  }

  return (
    <>
      <a onClick={handleOpen}>
        <Menu style={{ color: style === "light" ? "#000" : "#FFF" }} />
      </a>
      <MobileMenuContainer isOpen={isOpen}>
        {
          page !== "main" &&
          <div className="absolute top-6 left-6">
            <a onClick={() => setPage("main")}>
              <ArrowLeft />
            </a>
          </div>
        }
        <div className="absolute top-6 right-6">
          <a onClick={handleClose}>
            <X />
          </a>
        </div>
        <div className="absolute w-full bottom-0 left-0 p-4">
          <Button text="Login" type="tertiary" href="/" width="full" icon="arrow-right" />
        </div>
        {
          page === "main" &&
          <div className="flex flex-col justify-center items-center gap-8 h-full">
            <div className="mb-8"><LogoLarge /></div>
            <NavItem onClick={() => setPage("personal")}>Personal<ChevronRight className="ml-1" /></NavItem>
            <NavItem onClick={() => setPage("business")}>Business<ChevronRight className="ml-1" /></NavItem>
            <NavItem href="/inclusive">Inclusive</NavItem>
            <NavItem onClick={() => setPage("company")}>Company<ChevronRight className="ml-1" /></NavItem>
            <NavItem href="/contact-us">Contact Us</NavItem>
          </div>
        }
        {
          page === "personal" &&
          <div className="mt-16 p-8">
            <h5 className="mb-10">Personal banking</h5>
            <div className="flex flex-col gap-8">
              {navItems.personal.map((item) => (
                <Link key={item.href} href={item.href} className="flex items-center space-x-6">
                  {item.icon}
                  <p className="text-sm font-medium">{item.title}</p>
                </Link>
              ))}
            </div>
          </div>
        }
        {
          page === "business" &&
          <div className="mt-16 p-8">
            <h5 className="mb-10">Business banking</h5>
            <div className="flex flex-col gap-8">
              {navItems.business.map((item) => (
                <Link key={item.href} href={item.href} className="flex items-center space-x-6">
                  {item.icon}
                  <p className="text-sm font-medium">{item.title}</p>
                </Link>
              ))}
            </div>
          </div>
        }
        {
          page === "company" &&
          <div className="mt-16 p-8">
            <h5 className="mb-10">Company</h5>
            <div className="flex flex-col gap-8">
              {navItems.company.map((item) => (
                <Link key={item.href} href={item.href} className="flex items-center space-x-6">
                  {item.icon}
                  <p className="text-sm font-medium">{item.title}</p>
                </Link>
              ))}
            </div>
          </div>
        }
      </MobileMenuContainer>
    </>
  )
}

const MobileMenuContainer = styled.div<{isOpen: boolean;}>`
  position: fixed;
  inset: 0;
  width: 100lvw;
  height: 100lvh;
  background: #fff;
  z-index: 100;
  transform: ${({isOpen}) => isOpen ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.15s ease-in-out;
`

const NavItem = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  font-weight: 600;
  color: #000;
`
