import { Controller, Get } from "@nestjs/common";

@Controller("/app")
export class AppController {
	private greeting: string = "Hello world!";

	@Get("/greeting")
	sayHello(): string {
		return this.greeting;
	}
}
