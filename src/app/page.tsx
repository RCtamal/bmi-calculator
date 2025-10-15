import BmiCardCom from "@/components/BmiCardCom";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home | Nextjs Starter Template",
	description: "Home page of Nextjs Starter Template",
};

const page = () => {
	return (
		<>
			<section className="grid h-[80dvh] place-items-center">
				<BmiCardCom/>
			</section>
		</>
	);
};

export default page;
