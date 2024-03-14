/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CreateBlogResponse = {
  properties: {
    id: {
      type: 'string',
      description: `Id of blog`,
    },
    title: {
      type: 'string',
      description: `Title of blog`,
    },
    summary: {
      type: 'string',
      description: `Summary of blog`,
    },
    thumbnail: {
      type: 'string',
      description: `Thumbnail of blog`,
    },
    content: {
      type: 'string',
      description: `Content of blog`,
    },
    is_published: {
      type: 'boolean',
      description: `Is published`,
    },
    published_at: {
      type: 'string',
      description: `Published at`,
    },
    created_at: {
      type: 'string',
      description: `Created at`,
    },
    updated_at: {
      type: 'string',
      description: `Updated at`,
    },
    deleted_at: {
      type: 'string',
      description: `Deleted at`,
    },
  },
} as const;
