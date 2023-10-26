export type Invoice = {
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: Status;
  senderAddress: SenderAddress;
  clientAddress: ClientAddress;
  items: Item[];
  total: number;
};

type Status = 'paid' | 'pending' | 'draft';

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
