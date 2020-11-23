import {
  Subjects,
  Publisher,
  PaymentCreatedEvent,
} from '@rama89tickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
