# Portfolio Pessoal

Um portfolio moderno e responsivo construído com React, TypeScript e TailwindCSS.

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca principal para construção da interface
- **TypeScript** - Tipagem estática para melhor desenvolvimento
- **TailwindCSS** - Framework CSS para estilização rápida e responsiva
- **Lucide React** - Biblioteca de ícones modernos
- **Vite** - Build tool rápido e moderno

## 📁 Estrutura do Projeto

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx      # Barra de navegação
│   │   ├── Hero.tsx        # Seção principal
│   │   ├── About.tsx       # Seção sobre mim
│   │   ├── Skills.tsx      # Seção de habilidades
│   │   ├── Projects.tsx    # Seção de projetos
│   │   ├── Contact.tsx     # Formulário de contato
│   │   └── Footer.tsx      # Rodapé
│   ├── App.tsx             # Componente principal
│   ├── main.tsx            # Ponto de entrada
│   └── index.css           # Estilos globais
├── public/                 # Arquivos estáticos
└── package.json           # Dependências e scripts
```

## 🛠️ Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd portfolio
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra http://localhost:5173 no seu navegador

## 📱 Funcionalidades

- **Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Navegação Suave**: Scroll suave entre seções
- **Formulário de Contato**: Formulário funcional com validação
- **Links Sociais**: Integração com redes sociais
- **Portfolio de Projetos**: Galeria de projetos com tecnologias utilizadas
- **Seção de Habilidades**: Categorias organizadas de tecnologias

## 🎨 Personalização

### Alterar Informações Pessoais

1. **Nome e Título**: Edite os componentes `Navbar.tsx`, `Hero.tsx` e `Footer.tsx`
2. **Informações de Contato**: Atualize `Contact.tsx` e `Footer.tsx`
3. **Projetos**: Modifique o array `projects` em `Projects.tsx`
4. **Habilidades**: Edite o array `skillCategories` em `Skills.tsx`

### Cores e Estilos

As cores principais estão definidas em `tailwind.config.js`. O tema usa a paleta de cores `primary` que pode ser personalizada.

## 📦 Build para Produção

Para criar uma versão otimizada para produção:

```bash
npm run build
```

Os arquivos serão gerados na pasta `dist`.

## 🚀 Deploy

O projeto pode ser deployado em plataformas como:
- Vercel
- Netlify
- GitHub Pages
- Qualquer serviço de hospedagem estática

## 📄 Licença

MIT License - Sinta-se livre para usar este projeto como base para seu próprio portfolio.

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

---

**Desenvolvido com ❤️ usando React e TypeScript**
