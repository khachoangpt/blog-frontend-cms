import { cn } from '@/lib/utils'
import type { VariantProps } from 'class-variance-authority'
import { type HTMLAttributes, forwardRef } from 'react'
import { Container } from '../container'
import { Heading } from '../heading'
import {
	alertDescriptionVariants,
	alertTitleVariants,
	alertVariants,
} from './variants'

const Alert = forwardRef<
	HTMLDivElement,
	HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
	<Container
		ref={ref}
		role="alert"
		className={cn(alertVariants({ variant }), className)}
		{...props}
	/>
))
Alert.displayName = 'Alert'

const AlertTitle = forwardRef<
	HTMLParagraphElement,
	HTMLAttributes<HTMLHeadingElement> & VariantProps<typeof alertTitleVariants>
>(({ className, children, ...props }, ref) => (
	<Heading
		level={5}
		ref={ref}
		className={cn(alertTitleVariants(), className)}
		{...props}
	>
		{children}
	</Heading>
))
AlertTitle.displayName = 'AlertTitle'

const AlertDescription = forwardRef<
	HTMLParagraphElement,
	HTMLAttributes<HTMLParagraphElement> &
		VariantProps<typeof alertDescriptionVariants>
>(({ className, ...props }, ref) => (
	<Container
		ref={ref}
		className={cn(alertDescriptionVariants(), className)}
		{...props}
	/>
))
AlertDescription.displayName = 'AlertDescription'

export { Alert, AlertDescription, AlertTitle }
