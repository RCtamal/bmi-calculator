import z from "zod";

export const bmiFormSchema = z.object({
	Weight: z
		.number()
		.gte(1, { message: "Weight must be at least 1 kg" })
		.lte(200, { message: "Weight must be at most 200 kg" }),
	Height: z
		.number()
		.gte(1, { message: "Height must be at least 1 cm" })
		.lte(300, { message: "Height must be at most 300 cm" }),
});
