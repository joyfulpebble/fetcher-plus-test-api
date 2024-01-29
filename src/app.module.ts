import { Module, MiddlewareConsumer, RequestMethod } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import {
	HtmlParserMiddleware,
	JavascriptParserMiddleware,
	JsonParserMiddleware,
	TextParserMiddleware,
	UrlEncodedParserMiddleware,
	XmlParserMiddleware
} from "./common/middleware";

@Module({
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {
	configure(middlewareConsumer: MiddlewareConsumer): void {
		const middlewares = [
			UrlEncodedParserMiddleware,
			HtmlParserMiddleware,
			JavascriptParserMiddleware,
			JsonParserMiddleware,
			TextParserMiddleware,
			XmlParserMiddleware
		];

		middlewareConsumer.apply(...middlewares).forRoutes({
			path: "/post/raw",
			method: RequestMethod.POST
		});
	}
}
