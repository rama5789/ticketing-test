import {
  Subjects,
  Publisher,
  OrderCancelledEvent,
} from '@rama89tickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
