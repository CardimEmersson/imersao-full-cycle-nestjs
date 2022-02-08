import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('emails')
export class SendMailTweetsJob {
  @Process()
  async handle(job: Job) {
    console.log('Kafka para enviar a mensagem para o Wesley');
  }
}
