/* eslint-disable import/order */
import {
	Post,
	Controller,
	UploadedFile,
	Request as Req,
	UseInterceptors,
	HttpCode
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";

import type { Express, Request } from "express";
import type { POST } from "./types/post";

@Controller("/post")
export class AppController {
	@Post("/form-data")
	@HttpCode(201)
	@UseInterceptors(FileInterceptor("file"))
	formData(@UploadedFile() file: Express.Multer.File) /*: POST.FromData */ {
		return {
			fildName: file.fieldname,
			fileName: file.originalname,
			fileSize: file.size
		};
	}

	@Post("/raw")
	@HttpCode(201)
	raw(@Req() req: Request): POST.Raw {
		const reqBody = req.body;
		const reqContentType = req.headers["content-type"] || "Content type not found.";

		return {
			requestContentType: reqContentType,
			requestBody: reqBody
		};
	}
}
