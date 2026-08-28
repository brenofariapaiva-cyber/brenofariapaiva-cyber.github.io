/*
  ============================================================
  BLOG DA ADVANCED ENGLISH — como adicionar um post novo
  ============================================================
  Este é o ÚNICO arquivo que você precisa editar pra publicar um
  post novo. Não mexe em blog.html nem em post.html.

  Passo a passo:
  1. Copie o bloco "MODELO" ali embaixo (comentado, entre /* e * /)
  2. Cole ele dentro do array BLOG_POSTS, logo depois do "[" na linha abaixo
  3. Preencha os campos (title, excerpt, category, date, content...)
  4. Salve o arquivo

  Detalhes de cada campo:
  - slug: um "apelido" curto do post, só letras minúsculas e hífen,
    sem espaço e sem acento. Precisa ser ÚNICO (não repetir de outro
    post). Ex: 'perder-medo-de-falar'
  - title: o título do post, como vai aparecer grande na página
  - excerpt: um resumo de 1-2 frases, aparece no card da listagem
  - category: TEM que ser exatamente um destes 4 textos, igualzinho:
      "Fala e Confiança"
      "Viagem"
      "Trabalho e Carreira"
      "Provas e Intercâmbio"
  - date: a data no formato AAAA-MM-DD (ex: '2026-09-01')
  - cover: caminho da imagem de capa (ex: 'assets/blog/nome-da-foto.jpg').
    Se você ainda não tem uma imagem, deixe '' (vazio) que o site
    mostra um fundo bonito no lugar.
  - author: opcional. Se não escrever nada, usa o autor padrão lá
    embaixo (BLOG_DEFAULT_AUTHOR). Só preencha se quiser um autor
    diferente nesse post específico.
  - content: o texto do post. Cada parágrafo entre <p> e </p>.
    Pode usar <strong>negrito</strong> e <em>itálico</em> também.

  O tempo de leitura é calculado sozinho a partir do tamanho do
  texto — não precisa preencher isso.
  ============================================================
*/

const BLOG_CATEGORIES = [
  'Fala e Confiança',
  'Viagem',
  'Trabalho e Carreira',
  'Provas e Intercâmbio'
];

const BLOG_DEFAULT_AUTHOR = {
  name: 'Breno Faria Paiva',
  role: 'Professor e fundador da Advanced English',
  photo: ''
};

const BLOG_POSTS = [

  /* ===== MODELO — copie daqui pra baixo (sem as barras /* * /) e cole acima deste comentário =====

  {
    slug: 'meu-post-novo',
    title: 'Título do post aqui',
    excerpt: 'Um resumo curto de uma ou duas frases sobre o post.',
    category: 'Fala e Confiança',
    date: '2026-09-01',
    cover: '',
    author: null,
    content: `
      <p>Primeiro parágrafo do post.</p>
      <p>Segundo parágrafo do post.</p>
    `
  },

  ===== fim do modelo ===== */

];
