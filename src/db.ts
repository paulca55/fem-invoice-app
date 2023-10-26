// db.ts
import Dexie, { Table } from 'dexie';
import { Invoice } from '@/types/Invoices';

export class MySubClassedDexie extends Dexie {
  // 'invoices' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  invoices!: Table<Invoice>;

  constructor() {
    super('InvoiceApp');
    this.version(1).stores({
      invoices:
        '++id, createdAt, paymentDue, description, paymentTerms, clientName, clientEmail, status, senderAddress, clientAddress, items, total', // Primary key and indexed props
    });
  }
}

export const db = new MySubClassedDexie();
