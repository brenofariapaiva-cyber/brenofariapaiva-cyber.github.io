/*
  ============================================================
  ÁREA DE MEMBROS — como adicionar uma aula nova
  ============================================================
  Este é o ÚNICO arquivo que você precisa editar pra publicar uma
  aula nova. Não mexe em membros.html.

  Passo a passo:
  1. Sobe o vídeo no YouTube como "Não listado" (assim ele não
     aparece em busca nem no seu canal público, só quem tem o link
     acessa) — ou no Vimeo, se preferir.
  2. Pega o link de INCORPORAR (embed), não o link normal do vídeo.
     No YouTube: clica em Compartilhar → Incorporar → copia só a
     parte que tem "https://www.youtube.com/embed/...".
  3. Copie o bloco "MODELO" ali embaixo (comentado) e cole dentro do
     array AULAS_LESSONS, logo depois do "[" na linha abaixo.
  4. Preencha os campos e salve o arquivo.

  Detalhes de cada campo:
  - level: TEM que ser exatamente um destes 3 textos:
      "Iniciante"
      "Intermediário"
      "Avançado"
  - order: número da aula dentro do nível (1, 2, 3...) — controla
    a ordem que aparece na tela
  - title: título da aula
  - description: uma frase curta descrevendo o conteúdo
  - embedUrl: o link de incorporar (embed) do YouTube ou Vimeo
  ============================================================
*/

const AULAS_LESSONS = [

  /* ===== MODELO — copie daqui pra baixo (sem as barras /* * /) e cole acima deste comentário =====

  {
    level: 'Iniciante',
    order: 1,
    title: 'Apresentando-se em inglês',
    description: 'Frases essenciais para o primeiro contato.',
    embedUrl: 'https://www.youtube.com/embed/SEU_VIDEO_AQUI'
  },

  ===== fim do modelo ===== */

];
