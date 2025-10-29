export const produtos = [
  { 
    id: 1,
    nome: "Pizza Margherita", 
    descricao: "Molho de tomate, mussarela e manjericão fresco", 
    preco: 45.90, 
    categoria: "pizzas",
    imagem: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=600&h=400&fit=crop",
    ingredientes: [
      "Molho de tomate caseiro",
      "Mussarela especial",
      "Manjericão fresco",
      "Azeite de oliva extra virgem",
      "Orégano",
      "Massa artesanal fermentação natural"
    ]
  },
  { 
    id: 2,
    nome: "Pizza Calabresa", 
    descricao: "Molho de tomate, mussarela e calabresa fatiada", 
    preco: 48.90, 
    categoria: "pizzas",
    imagem: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=600&h=400&fit=crop",
    ingredientes: [
      "Molho de tomate caseiro",
      "Mussarela especial",
      "Calabresa fatiada premium",
      "Cebola roxa em rodelas",
      "Azeitonas pretas",
      "Orégano",
      "Azeite de oliva",
      "Massa artesanal"
    ]
  },
  { 
    id: 3,
    nome: "Pizza Quatro Queijos", 
    descricao: "Mussarela, provolone, parmesão e gorgonzola", 
    preco: 52.90, 
    categoria: "pizzas",
    imagem: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=600&h=400&fit=crop",
    ingredientes: [
      "Molho de tomate caseiro",
      "Mussarela especial",
      "Provolone derretido",
      "Parmesão ralado na hora",
      "Gorgonzola cremoso",
      "Orégano",
      "Azeite de oliva",
      "Massa artesanal italiana"
    ]
  },
  { 
    id: 4,
    nome: "Pizza Pepperoni", 
    descricao: "Mussarela, pepperoni e molho especial", 
    preco: 50.90, 
    categoria: "pizzas",
    imagem: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600&h=400&fit=crop",
    ingredientes: [
      "Molho de tomate caseiro",
      "Mussarela especial",
      "Pepperoni importado",
      "Orégano",
      "Pimenta calabresa",
      "Azeite de oliva",
      "Massa fina e crocante"
    ]
  },
  { 
    id: 5,
    nome: "Hambúrguer Artesanal", 
    descricao: "Pão brioche, carne 180g e queijo cheddar", 
    preco: 32.90, 
    categoria: "hamburgueres",
    imagem: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop",
    ingredientes: [
      "Pão brioche artesanal tostado",
      "Carne Angus 180g grelhada",
      "Queijo cheddar derretido",
      "Alface americana fresca",
      "Tomate fatiado",
      "Cebola caramelizada",
      "Molho especial da casa",
      "Bacon opcional"
    ]
  },
  { 
    id: 6,
    nome: "Hambúrguer Duplo Bacon", 
    descricao: "2 carnes, bacon crocante, cheddar e molho especial", 
    preco: 38.90, 
    categoria: "hamburgueres",
    imagem: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=600&h=400&fit=crop",
    ingredientes: [
      "Pão brioche artesanal",
      "2 Carnes Angus 180g cada",
      "Bacon crocante fatiado",
      "Dupla camada de cheddar",
      "Alface americana",
      "Tomate fresco",
      "Molho barbecue artesanal",
      "Cebola crispy",
      "Picles"
    ]
  },
  { 
    id: 7,
    nome: "Hambúrguer Vegetariano", 
    descricao: "Hambúrguer de grão-de-bico com queijo coalho", 
    preco: 34.90, 
    categoria: "hamburgueres",
    imagem: "https://media.istockphoto.com/id/1331109186/photo/close-up-of-a-veggie-burger-with-copy-space.jpg?s=612x612&w=0&k=20&c=I9QgB8ar8CF8VmkN4U9gleYBWwADSl-tCYQ86OH679w=",
    ingredientes: [
      "Pão integral artesanal",
      "Hambúrguer de grão-de-bico caseiro",
      "Queijo coalho grelhado",
      "Alface crespa orgânica",
      "Tomate seco",
      "Pepino fatiado",
      "Maionese de ervas frescas",
      "Broto de alfafa",
      "Molho de iogurte"
    ]
  },
  { 
    id: 8,
    nome: "Hambúrguer Frango Grelhado", 
    descricao: "Filé de frango, queijo prato e molho de mostarda", 
    preco: 30.90, 
    categoria: "hamburgueres",
    imagem: "https://img.freepik.com/fotos-premium/hamburguer-de-frango-grelhado-com-molho-no-prato_1339-174886.jpg",
    ingredientes: [
      "Pão australiano",
      "Filé de frango grelhado",
      "Queijo prato derretido",
      "Alface roxa",
      "Tomate cereja",
      "Cebola roxa",
      "Molho de mostarda e mel",
      "Rúcula fresca"
    ]
  },
  { 
    id: 9,
    nome: "Salada Caesar", 
    descricao: "Alface, croutons, parmesão e molho caesar", 
    preco: 28.90, 
    categoria: "saladas",
    imagem: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=600&h=400&fit=crop",
    ingredientes: [
      "Alface romana fresca",
      "Croutons caseiros temperados",
      "Queijo parmesão ralado na hora",
      "Molho caesar tradicional",
      "Peito de frango grelhado em tiras",
      "Bacon em cubos crocantes",
      "Pimenta do reino moída na hora",
      "Azeite de oliva extra virgem"
    ]
  },
  { 
    id: 10,
    nome: "Salada Grega", 
    descricao: "Tomate, pepino, cebola roxa, azeitonas e queijo feta", 
    preco: 26.90, 
    categoria: "saladas",
    imagem: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&h=400&fit=crop",
    ingredientes: [
      "Tomate cereja orgânico",
      "Pepino japonês fatiado",
      "Cebola roxa em rodelas",
      "Azeitonas kalamata",
      "Queijo feta em cubos",
      "Pimentão verde picado",
      "Azeite de oliva extra virgem",
      "Orégano fresco",
      "Vinagre balsâmico",
      "Sal marinho"
    ]
  },
  { 
    id: 11,
    nome: "Salada Tropical", 
    descricao: "Mix de folhas, manga, abacate e molho de laranja", 
    preco: 29.90, 
    categoria: "saladas",
    imagem: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop",
    ingredientes: [
      "Mix de folhas verdes",
      "Manga palmer madura",
      "Abacate cremoso",
      "Cenoura ralada",
      "Nozes caramelizadas",
      "Molho de laranja e mel",
      "Queijo coalho grelhado",
      "Hortelã fresca",
      "Suco de limão siciliano"
    ]
  },
  { 
    id: 12,
    nome: "Refrigerante", 
    descricao: "Lata 350ml - Coca-Cola, Guaraná ou Fanta", 
    preco: 6.90, 
    categoria: "bebidas",
    imagem: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=600&h=400&fit=crop",
    ingredientes: [
      "Água gaseificada",
      "Açúcar refinado",
      "Corante caramelo IV",
      "Aromatizantes naturais",
      "Acidulante ácido fosfórico",
      "Cafeína",
      "Conservantes autorizados",
      "Gelo a vontade"
    ]
  },
  { 
    id: 13,
    nome: "Suco Natural", 
    descricao: "500ml - Laranja, Limão ou Abacaxi com hortelã", 
    preco: 12.90, 
    categoria: "bebidas",
    imagem: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=600&h=400&fit=crop",
    ingredientes: [
      "Frutas frescas selecionadas",
      "Água mineral filtrada",
      "Gelo de água mineral",
      "Açúcar orgânico (opcional)",
      "Hortelã fresca colhida na hora",
      "Limão espremido na hora",
      "Gelo picado"
    ]
  },
  { 
   id: 14,
  nome: "Água Mineral", 
  descricao: "Garrafa 500ml - Com ou sem gás", 
  preco: 4.90, 
  categoria: "bebidas",
  imagem: "https://io.convertiez.com.br/m/farmaponte/shop/products/images/22004/medium/agua-mineral-crystal-sem-gas-garrafa-1-unidade-com-500ml_17652.webp",
  ingredientes: [
    "Água mineral natural",
    "Gás carbônico (versão com gás)",
    "Sem adição de conservantes",
    "Sem adição de açúcares",
    "Embalagem PET reciclável"
    ]
  },
  { 
    id: 15,
    nome: "Chá Gelado", 
    descricao: "500ml - Pêssego, Limão ou Manga", 
    preco: 8.90, 
    categoria: "bebidas",
    imagem: "https://p2.trrsf.com/image/fget/cf/1200/900/middle/images.terra.com/2023/10/30/759785217-cha-gelado-simples.jpg",
    ingredientes: [
      "Chá preto orgânico",
      "Essência natural de frutas",
      "Água mineral",
      "Gelo cristal",
      "Açúcar mascavo (opcional)",
      "Fatias de limão",
      "Hortelã fresca",
      "Mel orgânico"
    ]
  },
  { 
    id: 16,
    nome: "Batata Frita", 
    descricao: "Porção de batata frita crocante com cheddar e bacon", 
    preco: 18.90, 
    categoria: "acompanhamentos",
    imagem: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&h=400&fit=crop",
    ingredientes: [
      "Batata asterix selecionada",
      "Óleo de soja premium",
      "Sal marinho flor de sal",
      "Queijo cheddar derretido cremoso",
      "Bacon crocante em pedaços",
      "Cebolinha verde picada",
      "Páprica defumada",
      "Orégano",
      "Molho barbecue à parte"
    ]
  },
  { 
    id: 17,
    nome: "Onion Rings", 
    descricao: "Anéis de cebola empanados crocantes", 
    preco: 16.90, 
    categoria: "acompanhamentos",
    imagem: "https://media.istockphoto.com/id/865789218/pt/foto/onion-rings-with-ketchup.jpg?s=612x612&w=0&k=20&c=6NWddcDwDpWQCSGDqNW_e8lSZRTCYZ7OT0hVLOPY_W0=",
    ingredientes: [
      "Cebola roxa em anéis",
      "Farinha de trigo especial",
      "Farinha de rosca caseira",
      "Ovos caipiras",
      "Tempero caseiro secreto",
      "Óleo de soja para fritura",
      "Sal e pimenta",
      "Molho tártaro caseiro"
    ]
  },
  { 
    id: 18,
    nome: "Nuggets de Frango", 
    descricao: "10 unidades de nuggets crocantes com molho barbecue", 
    preco: 22.90, 
    categoria: "acompanhamentos",
    imagem: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&h=400&fit=crop",
    ingredientes: [
      "Peito de frango moído",
      "Farinha de rosca panko",
      "Farinha de trigo",
      "Ovos orgânicos",
      "Tempero especial da casa",
      "Cebola em pó",
      "Alho picado",
      "Salsinha fresca",
      "Molho barbecue artesanal"
    ]
  },
  { 
     id: 19,
  nome: "Milk-shake", 
  descricao: "500ml - Chocolate, Morango ou Baunilha", 
  preco: 15.90, 
  categoria: "sobremesas",
  imagem: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&h=400&fit=crop",
  ingredientes: [
    "Sorvete premium",
    "Leite integral gelado",
    "Calda de chocolate belga",
    "Morangos frescos (sabor morango)",
    "Baunilha madagascar (sabor baunilha)",
    "Chantilly caseiro",
    "Granulado colorido",
    "Cereja maraschino"
    ]
  },
  { 
    id: 20,
    nome: "Brownie com Sorvete", 
    descricao: "Brownie de chocolate com sorvete de creme", 
    preco: 21.90, 
    categoria: "sobremesas",
    imagem: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=600&h=400&fit=crop",
    ingredientes: [
      "Brownie de chocolate meio amargo",
      "Sorvete de creme premium",
      "Calda de chocolate quente",
      "Nozes picadas",
      "Avelãs trituradas",
      "Açúcar de confeiteiro",
      "Folhas de hortelã",
      "Creme de leite fresco"
    ]
  }
];