import {Rule} from 'sanity';

export default {
  name: 'furnify',
  type: 'document',
  title: 'Furnify',
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
      name: 'mainType',
      type: 'string',
      title: 'Item Main Type',
      options: {
        list: [
          {title: 'Office', value: 'office'},
          {title: 'Hotel & Home', value: 'hotelHome'}
        ],
        layout: 'radio'
      },
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'additionalType',
      type: 'string',
      title: 'Item Additional Type',
      options: {
        list: [
          {title: "Chair", value: 'chair'},
          {title: "Desk", value: 'desk'},
          {title: 'Storage Cabinet', value: 'storageCabinet'},
          {title: 'Bed', value: 'bed'},
          {title: 'Wardrobe', value: 'wardrobe'},
          {title: 'Entryway Closet', value: 'entrywayCloset'},
          {title: 'Sofa', value: 'sofa'},
          {title: 'Armchair', value: 'armchair'},
          {title: 'Dresser', value: 'dresser'},
          {title: 'Bedside Table', value: 'bedsideTable'},
          {title: 'Kitchen Table', value: 'kitchenTable'},
          {title: 'Dining Chair', value: 'diningChair'}
        ],
        layout: 'dropdown',
      },
      validation: (Rule: Rule) => Rule.required() 
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
      //Content for the future Single Item Page description (No needed for now)
    }
  ]
}