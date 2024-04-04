import '@/app/globals.css'

import { getTheme } from '@/actions'
import { TooltipProvider } from '@/components/plate-ui/tooltip'
import { Container } from '@/components/ui/container'
import { Toaster } from '@/components/ui/sonner'
import { fontSans } from '@/configs/font'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
	title: 'Blog',
	description: 'IT Blog',
}

type MainLayoutProps = Readonly<{
	children: ReactNode
}>

export default async function RootLayout({ children }: MainLayoutProps) {
	const theme = getTheme()

	return (
		<html lang="en" className={theme}>
			<body
				className={cn(
					'min-h-screen bg-base font-sans antialiased',
					fontSans.variable,
				)}
			>
				<TooltipProvider
					disableHoverableContent
					delayDuration={500}
					skipDelayDuration={0}
				>
					<Container className="mx-auto my-10 max-w-5xl select-none max-lg:px-4">
						{children}
					</Container>
					<Toaster position="top-center" richColors />
				</TooltipProvider>
			</body>
		</html>
	)
}
