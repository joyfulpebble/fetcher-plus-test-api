export namespace POST {
	export interface Raw {
		requestContentType: string;
		requestBody: string;
	}

	export interface FromData {
		fildName: string;
		fileName: string;
		fileSize: number;
	}
}
