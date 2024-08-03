"use client";

import MainContainer from "@/components/custom/MainContainer";
import LinkDataForm from "@/components/forms/LinkDataForm";

import { linksSchema } from "@/lib/schema";
import { z } from "zod";

function Home() {
	function onSubmit(values: z.infer<typeof linksSchema>) {
		console.log(values);
	}

	return (
		<MainContainer heading="Add New">
			<div className="sm:w-1/2 mx-auto">
				<LinkDataForm onSubmit={onSubmit} typeOfForm="add" />
			</div>
		</MainContainer>
	);
}

export default Home;
