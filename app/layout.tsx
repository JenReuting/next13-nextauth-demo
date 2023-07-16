import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Provider from './components/Provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'NextJS 13 - Next-Auth',
	description: 'Next-Auth implementation with NextJS 13 + new App Router',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang='en'
			className={`${inter.className} h-full scroll-smooth antialiased`}
		>
			<body className='flex h-full flex-col'>
				<Provider>
					<main className='grow'>{children}</main>
				</Provider>
			</body>
		</html>
	);
}
