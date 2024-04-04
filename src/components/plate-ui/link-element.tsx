import { cn, withRef } from '@udecode/cn'
import { PlateElement, useElement } from '@udecode/plate-common'
import { type TLinkElement, useLink } from '@udecode/plate-link'
import React from 'react'

export const LinkElement = withRef<typeof PlateElement>(
	({ className, children, ...props }, ref) => {
		const element = useElement<TLinkElement>()
		const { props: linkProps } = useLink({ element })

		return (
			<PlateElement
				ref={ref}
				asChild
				className={cn(
					'font-medium text-primary underline decoration-primary underline-offset-4',
					className,
				)}
				// biome-ignore lint/suspicious/noExplicitAny: <explanation>
				{...(linkProps as any)}
				{...props}
			>
				{/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
				<a>{children}</a>
			</PlateElement>
		)
	},
)
