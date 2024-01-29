import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";

import { AppModule } from "./app.module";

async function bootstrap() {
	const PORT = 3001;
	const app = await NestFactory.create<NestExpressApplication>(AppModule, {
		rawBody: true,
		bodyParser: false,
		cors: {
			allowedHeaders:
				"X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
			credentials: true,
			optionsSuccessStatus: 200,
			methods: ["GET", "DELETE", "PATCH", "POST", "PUT"],
			origin: "*"
		}
	});

	await app.listen(PORT, () => {
		console.log("Server started on port " + PORT);
	});
}

bootstrap();
