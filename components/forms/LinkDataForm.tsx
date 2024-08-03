"use client";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { linksSchema } from "@/lib/schema";

function LinkDataForm({
	onSubmit,
	typeOfForm,
	formData,
}: {
	onSubmit: (values: z.infer<typeof linksSchema>) => void;
	typeOfForm: "add" | "edit";
	formData?: z.infer<typeof linksSchema>;
}) {
	const form = useForm<z.infer<typeof linksSchema>>({
		resolver: zodResolver(linksSchema),
		defaultValues: {
			title: typeOfForm === "edit" && formData ? formData.title : "",
			link: typeOfForm === "edit" && formData ? formData.link : "",
			description:
				typeOfForm === "edit" && formData ? formData.description : "",
			imgSrc: typeOfForm === "edit" && formData ? formData.imgSrc : "",
			tags: typeOfForm === "edit" && formData ? formData.tags : "",
		},
	});

	const getGraphDetails = async (url: string) => {
		const response = await fetch(
			`/api/og-scrape?url=${encodeURIComponent(url)}`
		);
		if (response.ok) {
			const data = await response.json();
			form.setValue("title", data.ogTitle);
			form.setValue("description", data.ogDescription);
			form.setValue("imgSrc", data.ogImage[0].url);
		}
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
				{/* Link */}
				<FormField
					control={form.control}
					name="link"
					render={({ field }) => (
						<FormItem className="flex-1">
							<FormLabel>Link</FormLabel>
							<FormControl>
								<div className="flex gap-2">
									<Input
										placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
										{...field}
									/>
									<Button
										onClick={() => getGraphDetails(field.value)}
										variant={"secondary"}
										type="button"
									>
										Fetch
									</Button>
								</div>
							</FormControl>
							<FormDescription>Link that to be saved.</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* Title */}
				<FormField
					control={form.control}
					name="title"
					render={({ field }) => (
						<FormItem className="flex-1">
							<FormLabel>Link Title</FormLabel>
							<FormControl>
								<Input placeholder="Resource for UIUX" {...field} />
							</FormControl>
							<FormDescription>Title for the link.</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* Description */}
				<FormField
					control={form.control}
					name="description"
					render={({ field }) => (
						<FormItem className="flex-1">
							<FormLabel>Link Description</FormLabel>
							<FormControl>
								<Textarea
									placeholder="This is a long description of what the actual link is about"
									{...field}
								/>
							</FormControl>
							<FormDescription>Link Description.</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* Tags */}
				<FormField
					control={form.control}
					name="tags"
					render={({ field }) => (
						<FormItem className="flex-1">
							<FormLabel>Link Related tags</FormLabel>
							<FormControl>
								<Input placeholder="uiux, design, frontend" {...field} />
							</FormControl>
							<FormDescription>Enter Comma separated tags.</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* Image Source */}
				<FormField
					control={form.control}
					name="imgSrc"
					render={({ field }) => (
						<FormItem className="flex-1">
							<FormLabel>Image Link</FormLabel>
							<FormControl>
								<Input
									placeholder="https://images.unsplash.com/photo-1506157786151"
									{...field}
								/>
							</FormControl>
							<FormDescription>Display image for link.</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit">Save</Button>
			</form>
		</Form>
	);
}

export default LinkDataForm;
