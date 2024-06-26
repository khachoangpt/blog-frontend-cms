'use client'

import { cn } from '@udecode/cn'
import {
	useCommentDeleteButton,
	useCommentDeleteButtonState,
	useCommentEditButton,
	useCommentEditButtonState,
} from '@udecode/plate-comments'
import React from 'react'

import { Button } from './button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from './dropdown-menu'
import { Icons } from './icon'

export function CommentMoreDropdown() {
	const editButtonState = useCommentEditButtonState()
	const { props: editProps } = useCommentEditButton(editButtonState)
	const deleteButtonState = useCommentDeleteButtonState()
	const { props: deleteProps } = useCommentDeleteButton(deleteButtonState)

	return (
		<DropdownMenu modal={false}>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" className={cn('h-6 p-1 text-muted-foreground')}>
					<Icons.more className="size-4" />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem {...editProps}>Edit comment</DropdownMenuItem>
				<DropdownMenuItem {...deleteProps}>Delete comment</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
