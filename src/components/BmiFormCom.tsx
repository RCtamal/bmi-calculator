"use client";

import { BmiFormDataType } from "@/lib/types";
import { bmiFormSchema } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "./shadcnui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "./shadcnui/form";
import { Input } from "./shadcnui/input";

const BmiFormCom = () => {
	const cForm = useForm<BmiFormDataType>({
		resolver: zodResolver(bmiFormSchema),
		defaultValues: { weight: 0, height: 0 },
	});

	const cFormSubmit = (cData: BmiFormDataType) => {
		console.log(cData);
	};

	const allClear = () => {
		cForm.reset();
	};

	return (
		<>
			<Form {...cForm}>
				<form
					onSubmit={cForm.handleSubmit(cFormSubmit)}
					noValidate
					className="grid gap-4">
					<FormField
						control={cForm.control}
						name="weight"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Weight</FormLabel>
								<FormControl>
									<Input
										placeholder="Enter your Weight"
										{...field}
										value={field.value || ""}
										onChange={(e) =>
											field.onChange(
												e.target.valueAsNumber,
											)
										}
									/>
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={cForm.control}
						name="height"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Height</FormLabel>
								<FormControl>
									<Input
										type="number"
										placeholder="Enter your Height"
										{...field}
										value={field.value || ""}
										onChange={(e) =>
											field.onChange(
												e.target.valueAsNumber,
											)
										}
									/>
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>

					<Button
						disabled={cForm.formState.isSubmitting}
						className="cursor-pointer"
						type="submit">
						Check
					</Button>
					<Button
						className="cursor-pointer"
						type="button"
						variant={"destructive"}
						onClick={allClear}>
						Reset
					</Button>
				</form>
			</Form>
		</>
	);
};

export default BmiFormCom;
