import { InvoiceStatus } from '@/types/invoice';
import { StatusType } from '@/components/Status';

// Get invoice status type
function getStatusType(status: InvoiceStatus): StatusType {
  switch (status) {
    case 'draft':
      return 'neutral';
    case 'pending':
      return 'warning';
    case 'paid':
      return 'success';
    default:
      return 'neutral';
  }
}

export { getStatusType };
