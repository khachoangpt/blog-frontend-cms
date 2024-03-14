import { cva } from 'class-variance-authority'

export const badgeVariants = cva(
	'inline-flex rounded-full items-center border px-2.5 py-0.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
	{
		variants: {
			variant: {
				default:
					'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
				secondary:
					'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
				destructive:
					'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
				outline: 'text-foreground',
			},
			size: {
				default: '',
				large: 'py-2 px-3',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	},
)
