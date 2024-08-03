import { z } from "zod";

export const linksSchema = z.object({
	link: z.string().min(1, {
		message: "Enter a link.",
	}),
  title: z.string().min(1, {
    message: "Enter a title.",
  }),
  description: z.string().min(1, {
    message: "Enter a description.",
  }),
  imgSrc: z.string().min(1, {
    message: "Enter an image source.",
  }),
  tags: z.string().min(1, {
    message: "Enter comma seperated tags.",
  }),
});