import Dexie, { Table } from 'dexie';
import { Invoice } from '@/types/invoice';

class MySubClassedDexie extends Dexie {
  // 'invoices' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  invoices!: Table<Invoice>;

  constructor() {
    super('InvoiceApp');
    this.version(1).stores({
      // Primary key and indexed props
      invoices:
        '++id, invoiceId, createdAt, paymentDue, description, paymentTerms, clientName, clientEmail, status, senderAddress, clientAddress, items, total',
    });
  }
}

// Add invoice
async function addInvoice(invoice: Invoice) {
  await db.invoices.add(invoice).catch((error) => console.error(error));
}

const db = new MySubClassedDexie();

export { db, addInvoice };
