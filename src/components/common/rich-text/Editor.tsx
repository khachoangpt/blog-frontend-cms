'use client'

import { CommentsPopover } from '@/components/plate-ui/comments-popover'
import { Editor } from '@/components/plate-ui/editor'
import { FixedToolbarButtons } from '@/components/plate-ui/fixed-toolbar-buttons'
import { FloatingToolbar } from '@/components/plate-ui/floating-toolbar'
import { FloatingToolbarButtons } from '@/components/plate-ui/floating-toolbar-buttons'
import { MentionCombobox } from '@/components/plate-ui/mention-combobox'
import { Toolbar } from '@/components/plate-ui/toolbar'
import { TooltipProvider } from '@/components/plate-ui/tooltip'
import { plugins } from '@/plugins/plate'
import { CommentsProvider } from '@udecode/plate-comments'
import { Plate } from '@udecode/plate-common'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const initialValue = [
	{
		id: '1',
		type: 'p',
		children: [{ text: '' }],
	},
]

export function PlateEditor() {
	return (
		<TooltipProvider>
			<DndProvider backend={HTML5Backend}>
				<CommentsProvider users={{}} myUserId="1">
					<Plate plugins={plugins} initialValue={initialValue}>
						<Toolbar className="border-t-2 border-x-2 rounded-tl-md rounded-tr-md">
							<FixedToolbarButtons />
						</Toolbar>
						<Editor className="border-2 rounded-none rounded-bl-md rounded-br-md focus-visible:ring-0 focus-visible:ring-offset-0" />
						<FloatingToolbar>
							<FloatingToolbarButtons />
						</FloatingToolbar>
						<MentionCombobox items={[]} />
						<CommentsPopover />
					</Plate>
				</CommentsProvider>
			</DndProvider>
		</TooltipProvider>
	)
}
