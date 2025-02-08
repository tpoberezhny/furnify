import {Rule} from 'sanity';

export default {
  name: 'terms',
  type: 'document',
  title: 'Terms',
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
      }
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      description: 'Main content for the Terms page',
      of: [
        {
          type: 'block'
        }
      ]
    }
  ]

}