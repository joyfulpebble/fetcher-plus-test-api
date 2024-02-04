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
		const raw_middlewares = [
			HtmlParserMiddleware,
			JavascriptParserMiddleware,
			JsonParserMiddleware,
			TextParserMiddleware,
			XmlParserMiddleware
		];

		middlewareConsumer.apply(...raw_middlewares).forRoutes({
			path: "/post/raw",
			method: RequestMethod.POST
		});

		middlewareConsumer.apply(UrlEncodedParserMiddleware).forRoutes({
			path: "/post/urlencode",
			method: RequestMethod.POST
		});
	}
}
