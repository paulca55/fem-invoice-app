export type Invoice = {
  id: number;
  invoiceId: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: InvoiceStatus;
  senderAddress: SenderAddress;
  clientAddress: ClientAddress;
  items: Item[];
  total: number;
};

export type InvoiceStatus = 'paid' | 'pending' | 'draft';

type SenderAddress = {
  street: string;
  city: string;
  postCode: string;
  country: string;
};

type ClientAddress = {
  street: string;
  city: string;
  postCode: string;
  country: string;
};

type Item = {
  name: string;
  quantity: number;
  price: number;
  total: number;
};
