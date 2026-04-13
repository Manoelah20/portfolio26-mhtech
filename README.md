# Portfolio Manoela Harrison

Portfólio profissional desenvolvido com React, TypeScript e Tailwind CSS.

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

### Alterar Pessoais

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

## 🚀 Deploy no Vercel Grátis

### Passo a Passo

1. **Acesse o Vercel**
   - Vá para [vercel.com](https://vercel.com)
   - Faça login com sua conta GitHub

2. **Conecte o Repositório**
   - Clique em "Add New Project"
   - Importe o repositório `portfolio-mh-26` do seu GitHub
   - O Vercel detectará automaticamente que é um projeto Vite

3. **Configure o Deploy**
   - O `vercel.json` já está configurado, então não precisa alterar nada
   - Clique em "Deploy"

4. **Aguarde o Deploy**
   - O Vercel irá instalar as dependências e fazer o build automaticamente
   - Em alguns minutos seu site estará online

5. **Domínio Gratuito**
   - O Vercel fornecerá um domínio gratuito como: `seu-portfolio.vercel.app`
   - Você pode personalizar o domínio nas configurações do projeto

### Plano Gratuito do Vercel

- ✅ Hospedagem ilimitada de sites estáticos
- ✅ Deploy automático a cada commit
- ✅ SSL/HTTPS gratuito
- ✅ CDN global
- ✅ Domínios personalizados
- ✅ 100GB de largura de banda por mês

### Outras Plataformas

- Netlify
- GitHub Pages
- Qualquer serviço de hospedagem estática

## 📄 Licença

MIT License - Sinta-se livre para usar este projeto como base para seu próprio portfolio.

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

---

Desenvolvido com ❤️ usando React e TypeScript
