import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import type { VariantProps } from 'class-variance-authority'
import { Loader2Icon } from 'lucide-react'
import { type ButtonHTMLAttributes, forwardRef } from 'react'
import { Box } from '../box'
import { buttonVariants } from './variants'

export interface ButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean
	loading?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			className,
			variant,
			size,
			asChild = false,
			loading,
			disabled,
			children,
			...props
		},
		ref,
	) => {
		const Comp = asChild ? Slot : 'button'
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				disabled={loading || disabled}
				ref={ref}
				{...props}
			>
				<Box className={cn({ 'opacity-0': loading })}>{children}</Box>
				{loading && <Loader2Icon className="absolute animate-spin" />}
			</Comp>
		)
	},
)
Button.displayName = 'Button'

export { Button, buttonVariants }
