# Not Following Back

Aplicação web desenvolvida em **React com Vite** para identificar quais contas você segue no Instagram que **não te seguem de volta**.

O projeto é totalmente **stateless**: todo o processamento dos dados ocorre de forma local no seu navegador, garantindo privacidade total, sem armazenamento ou envio de dados para servidores externos.

## Como Usar

1. Acesse o **Instagram** no aplicativo ou web e vá em **Configurações e privacidade** (`Central de Contas > Suas informações e permissões > Baixar suas informações`).
2. Solicite a exportação dos seus dados no formato **JSON**.
3. **Dica de agilidade:** Para tornar o processo muito mais rápido, desmarque todas as outras opções e selecione apenas os dados de **Seguidores e seguindo**. As demais informações não são necessárias para esta ferramenta.
4. **Precisão dos dados:** Escolha o período **"Desde o início" / "Todo o período"** para garantir que a lista reflita o histórico completo da sua conta.
5. Assim que o download estiver concluído, localize e envie os dois arquivos JSON (`followers` e `following`) na aplicação para visualizar o resultado.

> [!NOTE]
> **Sobre os dados do Instagram:** O relatório exportado pelo próprio Instagram pode apresentar uma pequena defasagem temporal. Por conta disso, é comum que apareçam na lista contas que você deixou de seguir muito recentemente ou perfis que foram desativados/excluídos.

## Tecnologias Utilizadas

- **React**
- **Vite**

## Como Rodar o Projeto Localmente

Se preferir clonar e executar o projeto na sua máquina:

```bash
# Clone o repositório
git clone [https://github.com/cleinerfg/not-following-back.git](https://github.com/cleinerfg/not-following-back.git)

# Entre na pasta do projeto
cd not-following-back

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```
