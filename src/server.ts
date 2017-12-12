import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './modules/app.module';
import * as bodyParser from 'body-parser';
import * as Express from 'express';

let server = new Express();

async function bootstrap() {
	const app = await NestFactory.create(ApplicationModule, server);
	app.use(bodyParser.json());
	server.set('view engine', 'ejs');
	await app.listen(3000);
}
bootstrap();
