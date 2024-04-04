export const queryTags = {
	me: (tags: MeTags) => [`me:${tags.jwt}`],
}

type MeTags = {
	jwt: string
}
