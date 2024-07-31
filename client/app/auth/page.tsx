import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const Google = () => {
	return (
		<svg
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			x="0px"
			y="0px"
			width="20px"
			viewBox="0 0 48 48"
			enable-background="new 0 0 48 48"
			xmlSpace="preserve"
		>
			<path
				fill="#FFC107"
				d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
			/>
			<path
				fill="#FF3D00"
				d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
			/>
			<path
				fill="#4CAF50"
				d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
			/>
			<path
				fill="#1976D2"
				d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
			/>
		</svg>
	);
};

function Auth() {
	return (
		<div className="relative h-screen w-full flex-center p-2">
			<div className="absolute top-0 left-0 w-full">
				<svg className="w-screen h-screen opacity-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
					<path
						fill="#252634"
						d="M33.06 154.22V37.28c32.29 0 58.47 26.18 58.47 58.48s-26.18 58.47-58.47 58.47z"
					></path>
					<path
						fill="#4e4f66"
						d="M150 37.28v116.95c-32.29 0-58.47-26.18-58.47-58.48S117.71 37.28 150 37.28z"
					></path>
					<path
						fill="#d6d6e9"
						d="M150 37.28h116.95c0 32.29-26.18 58.47-58.48 58.47S150 69.57 150 37.28z"
					></path>
					<path
						fill="#A5A6BC"
						d="M150 95.75h116.94c0 32.29-26.18 58.47-58.47 58.47S150 128.04 150 95.75z"
					></path>
				</svg>
			</div>
			<Card className="relative z-10 mx-auto max-w-sm">
				<CardHeader>
					<CardTitle className="text-2xl">Login</CardTitle>
					<CardDescription>
						Login through Google to start saving your favorite links.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="grid gap-4">
						<Button variant="outline" className="w-full flex-center gap-2">
							<Google />
							<p>Login with Google</p>
						</Button>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}

export default Auth;
