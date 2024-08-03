import { NextRequest, NextResponse } from "next/server";
import ogs from "open-graph-scraper";

export async function GET(req: NextRequest) {
	const { searchParams } = new URL(req.url);
	const url = searchParams.get("url");

	if (!url || typeof url !== "string") {
		return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
	}

	try {
		const options = { url };
		const { result } = await ogs(options);
		return NextResponse.json(result);
	} catch (error) {
		return NextResponse.json(
			{ error: "Failed to fetch metadata" },
			{ status: 500 }
		);
	}
}
