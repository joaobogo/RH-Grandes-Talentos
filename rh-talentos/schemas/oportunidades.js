export default {
  name: 'oportunidades',
  title: 'Oportunidades',
  type: 'document',
  fields: [
    {
      name: 'posicao',
      title: 'Posição',
      type: 'string',
    },
    {
      name: 'cidade',
      title: 'Cidade',
      type: 'string',
    },
    {
      name: 'estado',
      title: 'Estado',
      type: 'string',
    },
    {
      name: 'tipotrabalho',
      title: 'Tipo de Trabalho (Remoto, Híbrido ou Presencial)',
      type: 'string',
    },
    {
      name: 'salario',
      title: 'Salário',
      type: 'string',
    },
    {
      name: 'descricao',
      title: 'Descrição',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'beneficios',
      title: 'Benefícios',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'requisitos',
      title: 'Requisitos',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'pjclt',
      title: 'PJ ou CLT',
      type: 'string',
    },
  ],
}
