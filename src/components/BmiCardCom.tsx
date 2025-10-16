import { useState } from "react";
import BmiFormCom from "./BmiFormCom";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./shadcnui/card";
import { Separator } from "./shadcnui/separator";
import { BmiFormDataType } from "@/lib/types";

const BmiCardCom = () => {
	const [bmiResult, setBmiResult] = useState(0);
	const [bmiCategory, setBmiCategory] = useState("");

	const handleBmiCalculation = (fData: BmiFormDataType) => {
		console.log(fData);
	};

	return (
		<>
			<Card className="min-w-2xs">
				<CardHeader className="text-center">
					<CardTitle>BMI Calculator</CardTitle>
					<CardDescription>
						For calculate your BMI, please submit the form.
					</CardDescription>
					<Separator />
				</CardHeader>
				<CardContent>
					<BmiFormCom onCalculate ={handleBmiCalculation} />
				</CardContent>
				<CardFooter className="flex flex-col space-y-1">
					<Separator />
					<p>your BMI is {bmiResult}</p>
					<p>you are {bmiCategory}</p>
				</CardFooter>
			</Card>
		</>
	);
};

export default BmiCardCom;
