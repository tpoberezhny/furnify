import {Rule} from 'sanity'

export default {
  name: 'privacyCZ',
  type: 'document',
  title: 'PrivacyCZ',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Page Title',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      description: 'Main content for the Privacy page',
      of: [
        {
          type: 'block',
        },
      ],
    },
  ],
}
