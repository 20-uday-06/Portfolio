import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Uday Tyagi - AI & Web Developer',
	description:
		'Welcome to my portfolio! I am an AI enthusiast and web developer specializing in building intelligent, scalable, and impactful solutions. With a passion for Artificial Intelligence, Machine Learning, and modern web technologies, I craft innovative applications that bridge the gap between smart systems and seamless user experiences.',
	keywords: [
		'Web Developer',
		'Frontend Developer',
		'React Developer',
		'Next.js',
		'JavaScript',
		'TypeScript',
		'HTML5',
		'Responsive Design',
		'UI/UX',
		'Web Accessibility',
		'Performance Optimization',
		'Modern Web Development',
		'Progressive Web Apps',
		'Uday Tyagi',
		'AI Developer',
		'Artificial Intelligence',
		'Machine Learning',
		'AI Solutions',
		'AI Applications',
		'AI Web Development',
		'AI Enthusiast',
		'AI Projects',
		'AI Portfolio',
	],
	authors: [{ name: 'Uday Tyagi' }],
	creator: 'Uday Tyagi',
	openGraph: {
		title: 'Uday Tyagi - AI & Web Developer Portfolio',
		description: 'Passionate AI & web developer crafting modern and engaging digital experiences. Explore my projects and web development expertise.',
		url: 'https://your-domain.com',
		siteName: 'Uday Tyagi - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Uday Tyagi - AI & Web Developer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Uday Tyagi - AI & Web Developer',
		description: 'Passionate AI & web developer crafting modern and engaging digital experiences. Explore my projects and web development expertise.',
		creator: '@uday_tyagi2006',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
