import {Rule} from 'sanity';

export default {
  name: 'furnifyCZ',
  type: 'document',
  title: 'FurnifyCZ',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title of the item',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug of the item',
      options: {
        source: 'title',
      }
      //Slug for the future Single Item Page (No needed for now)
    },
    {
      name: 'brand',
      type: 'string',
      title: 'Brand of the item',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'titleImage',
      type: 'image',
      title: 'Title Image'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description'
      //Small description for the information about size etc. (Not sure if needed for now)
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
    },
    {
      name: 'rentPrice',
      type: 'number',
      title: 'Rent Price',
      validation: (Rule: Rule) => Rule.required().min(0)
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
        }
      ]
    }
  ]
}