import { Injectable } from '@nestjs/common';

@Injectable()
export class BatchService {
	getHello(): string {
		return 'welcome to Nestar BATCH Api Server!';
	}
}
