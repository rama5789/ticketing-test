import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@rama89tickets/common';

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
