export default {
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Título',
        type: 'string',
      },
      {
        name: 'author',
        title: 'Autor',
        type: 'string',
      },
      {
        name: 'date',
        title: 'Data (00/00/0000)',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Imagem',
        type: 'image',
      },
      {
        name: 'body',
        title: 'Body',
        type: 'array',
        of: [{type: 'block'}],
      },
      {
        name: 'external_link',
        title: 'Link Externo',
        type: 'string',
      },
    ],
  }
  