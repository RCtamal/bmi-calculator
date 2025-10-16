import { ReactNode } from "react";
import z from "zod";
import { bmiFormSchema } from "./zodSchema";

export type RootLayoutProps = Readonly<{
	children: ReactNode;
}>;

export type BmiFormDataType = z.infer<typeof bmiFormSchema>;
