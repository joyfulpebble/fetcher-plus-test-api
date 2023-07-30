import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
	private greeting: string = "Hello world from app service!";

	public sayHello(): string {
		return this.greeting;
	}
}
