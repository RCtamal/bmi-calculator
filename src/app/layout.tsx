import Header from "@/components/Header/Header";
import ThemeProvider from "@/components/Providers/ThemeProvider";
import { RootLayoutProps } from "@/lib/types";
import "./globals.css";
import { Toaster } from "sonner";

const RootLayout = ({ children }: RootLayoutProps) => {
	return (
		<html
			lang="en"
			suppressHydrationWarning>
			<body className="">
				<ThemeProvider
					attribute={"class"}
					defaultTheme="dark"
					enableSystem={false}>
					<Header />

					<main className="container mx-auto px-6 py-3">
						{children}
					</main>

					<Toaster position="bottom-right"/> 
				</ThemeProvider>
			</body>
		</html>
	);
};

export default RootLayout;
