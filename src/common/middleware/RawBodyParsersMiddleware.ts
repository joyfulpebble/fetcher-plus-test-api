import { Injectable, NestMiddleware } from "@nestjs/common";
import { urlencoded, raw, json, text } from "body-parser";

import { NextFunction, Request, Response } from "express";

@Injectable()
export class UrlEncodedParserMiddleware implements NestMiddleware {
	use(req: Request, res: Response, next: NextFunction): void {
		const handleFunc = urlencoded({ type: "application/x-www-form-urlencoded" });

		handleFunc(req, res, next);
	}
}

@Injectable()
export class XmlParserMiddleware implements NestMiddleware {
	use(req: Request, res: Response, next: NextFunction): void {
		const handleFunc = raw({ type: "application/xml" });

		handleFunc(req, res, next);
	}
}

@Injectable()
export class TextParserMiddleware implements NestMiddleware {
	use(req: Request, res: Response, next: NextFunction): void {
		const handleFunc = text();

		handleFunc(req, res, next);
	}
}

@Injectable()
export class JsonParserMiddleware implements NestMiddleware {
	use(req: Request, res: Response, next: NextFunction): void {
		const handleFunc = json();

		handleFunc(req, res, next);
	}
}

@Injectable()
export class JavascriptParserMiddleware implements NestMiddleware {
	use(req: Request, res: Response, next: NextFunction): void {
		const handleFunc = raw({ type: "application/javascript" });

		handleFunc(req, res, next);
	}
}

@Injectable()
export class HtmlParserMiddleware implements NestMiddleware {
	use(req: Request, res: Response, next: NextFunction): void {
		const handleFunc = raw({ type: "text/html" });

		handleFunc(req, res, next);
	}
}
