# Site Agência Fernanda Urbano

Site institucional da **Agência Fernanda Urbano** – marketing digital, estratégia, branding, redes sociais e UX/UI.

## Estrutura do projeto

- **index.html** – Página inicial (hero, sobre, equipe, serviços, história, CTA)
- **quem-somos.html** – Missão, visão, valores e história do logo
- **equipe.html** – Perfis da equipe (Fernanda Urbano e Igor Mallis)
- **servicos.html** – Serviços e empresas que trabalhamos
- **blog.html** – Blog com cards de postagens
- **contato.html** – Formulário de contato e canais (WhatsApp, Instagram)

### Pastas

- **css/** – Estilos (style.css, style-blog.css)
- **js/** – Scripts (navbar, rolagem, formulário, blog)
- **img/** – Imagens e logo da agência

## Tecnologias

- HTML5 semântico
- CSS3 (variáveis, grid, flexbox)
- JavaScript (menu mobile, reveal no scroll, formulário)
- Fontes: Google Fonts (DM Sans, Playfair Display)
- Ícones: Bootstrap Icons

## Como rodar localmente

1. Clone o repositório ou baixe os arquivos.
2. Abra a pasta no VS Code (ou outro editor).
3. Use a extensão **Live Server** (ou similar) e abra `index.html`, ou abra o arquivo direto no navegador.

## Personalização

- **Contato:** altere e-mail, telefone e endereço no rodapé de cada página e no `contato.html`.
- **Redes sociais:** substitua os links do Instagram e WhatsApp no header e no footer.
- **Blog:** edite `js/post.json` para alterar ou adicionar postagens; as imagens podem usar URLs (ex.: Unsplash) ou caminhos locais em `img/`.
- **Empresas que trabalhamos:** em `servicos.html`, troque os itens da seção “Empresas que trabalhamos” por logos ou nomes dos clientes.

## Hospedagem no GitHub (GitHub Pages)

### 1. Criar o repositório no GitHub

1. Acesse [github.com](https://github.com) e faça login.
2. Clique no **+** no canto superior direito → **New repository**.
3. Preencha:
   - **Repository name:** por exemplo `site-agencia-fernanda-urbano` (sem espaços).
   - **Description:** opcional (ex.: "Site institucional Agência Fernanda Urbano").
   - Deixe **Public**.
   - **Não** marque "Add a README" (você já tem um na pasta).
4. Clique em **Create repository**.

### 2. Conectar a pasta do site ao repositório e enviar o código

No terminal (PowerShell ou CMD), na pasta do projeto, rode:

```bash
git remote add origin https://github.com/SEU-USUARIO/site-agencia-fernanda-urbano.git
git branch -M main
git push -u origin main
```

Troque `SEU-USUARIO` pelo seu usuário do GitHub e `site-agencia-fernanda-urbano` pelo nome exato do repositório que você criou.

Se o GitHub pedir autenticação, use um **Personal Access Token** em vez da senha (Settings → Developer settings → Personal access tokens).

### 3. Ativar o GitHub Pages (hospedagem gratuita)

1. No repositório no GitHub, vá em **Settings** (Configurações).
2. No menu da esquerda, em **Code and automation**, clique em **Pages**.
3. Em **Source** (Build and deployment), escolha **Deploy from a branch**.
4. Em **Branch**, selecione **main** (ou **master**) e a pasta **/ (root)**.
5. Clique em **Save**.

Em alguns minutos o site ficará no ar em:

**https://SEU-USUARIO.github.io/site-agencia-fernanda-urbano/**

(Substitua pelo seu usuário e nome do repositório.)

### 4. Usar um domínio próprio (opcional)

Se você tiver um domínio (ex.: `agenciafernandaurbano.com.br`):

1. Em **Pages**, em **Custom domain**, digite o domínio e salve.
2. No seu provedor de domínio, crie um registro **CNAME** apontando para `SEU-USUARIO.github.io` (ou use os registros **A** que o GitHub indicar).

---

© Agência Fernanda Urbano. Todos os direitos reservados.
