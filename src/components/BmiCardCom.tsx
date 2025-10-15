"use client";

import BmiFormCom from "./BmiFormCom";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./shadcnui/card";

const BmiCardCom = () => {
	return (
		<>
			<Card>
				<CardHeader>
					<CardTitle>BMI Calculator</CardTitle>
					<CardDescription>
						For calculate your BMI, please submit the form.
					</CardDescription>
				</CardHeader>
				<CardContent>
                    <BmiFormCom/>
                </CardContent>
				<CardFooter>
					<p>your BMI is 80000</p>
					<p>you are underweight</p>
				</CardFooter>
			</Card>
		</>
	);
};

export default BmiCardCom;
