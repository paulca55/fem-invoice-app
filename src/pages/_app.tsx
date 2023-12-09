import type { AppProps } from 'next/app';
import { GlobalStyle } from '@/styles/GlobalStyle';
import React from 'react';
import { ThemeModeProvider } from '@/contexts/ThemeModeProvider';
import { ThemeWrapper } from '@/components/ThemeWrapper';
import { League_Spartan } from 'next/font/google';
import { Sidebar } from '@/components/Sidebar';
import styled from 'styled-components';
import { breakpoints } from '@/constants';
import { db } from '@/db';
import { generateRandomInvoiceId } from '@/utilities';
import { rem } from 'polished';

const leagueSpartan = League_Spartan({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  db.invoices.bulkPut([
    {
      invoiceId: generateRandomInvoiceId(),
      createdAt: '18-08-2021',
      paymentDue: '19-08-2021',
      description: 'Re-branding',
      paymentTerms: 1,
      clientName: 'Jensen Huang',
      clientEmail: 'jensenh@mail.com',
      status: 'paid',
      senderAddress: {
        street: '19 Union Terrace',
        city: 'London',
        postCode: 'E1 3EZ',
        country: 'United Kingdom',
      },
      clientAddress: {
        street: '106 Kendell Street',
        city: 'Sharrington',
        postCode: 'NR24 5WQ',
        country: 'United Kingdom',
      },
      items: [
        {
          name: 'Brand Guidelines',
          quantity: 1,
          price: 180009,
          total: 180009,
        },
      ],
      total: 180009,
    },
    {
      invoiceId: generateRandomInvoiceId(),
      createdAt: '21-08-2021',
      paymentDue: '20-09-2021',
      description: 'Graphic Design',
      paymentTerms: 30,
      clientName: 'Alex Grim',
      clientEmail: 'alexgrim@mail.com',
      status: 'pending',
      senderAddress: {
        street: '19 Union Terrace',
        city: 'London',
        postCode: 'E1 3EZ',
        country: 'United Kingdom',
      },
      clientAddress: {
        street: '84 Church Way',
        city: 'Bradford',
        postCode: 'BD1 9PB',
        country: 'United Kingdom',
      },
      items: [
        {
          name: 'Banner Design',
          quantity: 1,
          price: 156,
          total: 156,
        },
        {
          name: 'Email Design',
          quantity: 2,
          price: 200,
          total: 400,
        },
      ],
      total: 556,
    },
    {
      invoiceId: generateRandomInvoiceId(),
      createdAt: '24-09-2021',
      paymentDue: '01-10-2021',
      description: 'Website Redesign',
      paymentTerms: 7,
      clientName: 'John Morrison',
      clientEmail: 'jm@myco.com',
      status: 'paid',
      senderAddress: {
        street: '19 Union Terrace',
        city: 'London',
        postCode: 'E1 3EZ',
        country: 'United Kingdom',
      },
      clientAddress: {
        street: '79 Dover Road',
        city: 'Westhall',
        postCode: 'IP19 3PF',
        country: 'United Kingdom',
      },
      items: [
        {
          name: 'Website Redesign',
          quantity: 1,
          price: 1400233,
          total: 1400233,
        },
      ],
      total: 1400233,
    },
    {
      invoiceId: generateRandomInvoiceId(),
      createdAt: '11-10-2021',
      paymentDue: '12-10-2021',
      description: 'Logo Concept',
      paymentTerms: 1,
      clientName: 'Alysa Werner',
      clientEmail: 'alysa@email.co.uk',
      status: 'pending',
      senderAddress: {
        street: '19 Union Terrace',
        city: 'London',
        postCode: 'E1 3EZ',
        country: 'United Kingdom',
      },
      clientAddress: {
        street: '63 Warwick Road',
        city: 'Carlisle',
        postCode: 'CA20 2TG',
        country: 'United Kingdom',
      },
      items: [
        {
          name: 'Logo Sketches',
          quantity: 1,
          price: 10204,
          total: 10204,
        },
      ],
      total: 10204,
    },
    {
      invoiceId: generateRandomInvoiceId(),
      createdAt: '07-10-2021',
      paymentDue: '14-10-2021',
      description: 'Re-branding',
      paymentTerms: 7,
      clientName: 'Mellisa Clarke',
      clientEmail: 'mellisa.clarke@example.com',
      status: 'pending',
      senderAddress: {
        street: '19 Union Terrace',
        city: 'London',
        postCode: 'E1 3EZ',
        country: 'United Kingdom',
      },
      clientAddress: {
        street: '46 Abbey Row',
        city: 'Cambridge',
        postCode: 'CB5 6EG',
        country: 'United Kingdom',
      },
      items: [
        {
          name: 'New Logo',
          quantity: 1,
          price: 153233,
          total: 153233,
        },
        {
          name: 'Brand Guidelines',
          quantity: 1,
          price: 2500,
          total: 2500,
        },
      ],
      total: 403233,
    },
    {
      invoiceId: generateRandomInvoiceId(),
      createdAt: '01-10-2021',
      paymentDue: '31-10-2021',
      description: 'Landing Page Design',
      paymentTerms: 30,
      clientName: 'Thomas Wayne',
      clientEmail: 'thomas@dc.com',
      status: 'pending',
      senderAddress: {
        street: '19 Union Terrace',
        city: 'London',
        postCode: 'E1 3EZ',
        country: 'United Kingdom',
      },
      clientAddress: {
        street: '3964  Queens Lane',
        city: 'Gotham',
        postCode: '60457',
        country: 'United States of America',
      },
      items: [
        {
          name: 'Web Design',
          quantity: 1,
          price: 615591,
          total: 615591,
        },
      ],
      total: 615591,
    },
    {
      invoiceId: generateRandomInvoiceId(),
      createdAt: '05-11-2021',
      paymentDue: '12-10-2021',
      description: 'Logo Re-design',
      paymentTerms: 7,
      clientName: 'Anita Wainwright',
      clientEmail: '',
      status: 'draft',
      senderAddress: {
        street: '19 Union Terrace',
        city: 'London',
        postCode: 'E1 3EZ',
        country: 'United Kingdom',
      },
      clientAddress: {
        street: '',
        city: '',
        postCode: '',
        country: '',
      },
      items: [
        {
          name: 'Logo Re-design',
          quantity: 1,
          price: 310204,
          total: 310204,
        },
      ],
      total: 310204,
    },
  ]);

  return (
    <ThemeModeProvider>
      <ThemeWrapper>
        <PageWrapper className={leagueSpartan.className}>
          <Sidebar />
          <PageContentWrapper>
            <PageContent>
              <Component {...pageProps} />
            </PageContent>
          </PageContentWrapper>
        </PageWrapper>
        <GlobalStyle />
      </ThemeWrapper>
    </ThemeModeProvider>
  );
}

const PageWrapper = styled.div`
  --sidebar-size: 72px;

  @media (min-width: ${breakpoints.sm}) {
    --sidebar-size: 80px;
  }

  @media (min-width: ${breakpoints.lg}) {
    --sidebar-size: 103px;
  }
`;

const PageContentWrapper = styled.main`
  display: flex;
  justify-content: center;
  padding-left: 40px;
  padding-right: 40px;

  @media (min-width: ${breakpoints.lg}) {
    margin-left: var(--sidebar-size);
  }
`;

const PageContent = styled.main`
  width: 100%;
  max-width: ${rem(730)};
`;
