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

const BmiCardCom = () => {
	return (
		<>
			<Card className="min-w-2xs">
				<CardHeader className="text-center">
					<CardTitle>BMI Calculator</CardTitle>
					<CardDescription>
						For calculate your BMI, please submit the form.
					</CardDescription>
					<Separator/>
				</CardHeader>
				<CardContent>
                    <BmiFormCom/>
                </CardContent>
				<CardFooter className="flex flex-col space-y-1">
					<Separator/>
					<p>your BMI is 80000</p>
					<p>you are underweight</p>
				</CardFooter>
			</Card>
		</>
	);
};

export default BmiCardCom;
