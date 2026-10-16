/* ============================================================
   CONFIGURAÇÃO — compartilhada pelo cardápio e pelo painel.
   Edite só este arquivo. Não coloque senhas aqui: o arquivo é público.
   ============================================================ */
window.CONFIG = {
  // Webhook do n8n que recebe pedidos novos (POST). Vazio = modo teste: nada é enviado.
  N8N_PEDIDO_URL: "https://n8n.painellipe.online/webhook/receber-pedido-cantina",

  // Webhook do n8n que atualiza status e pagamento de um pedido (POST), usado pelo painel.
  N8N_STATUS_URL: "https://n8n.painellipe.online/webhook/atualizar-status-cantina",

  // Webhook do n8n que altera preço e disponibilidade (esgotado) de um item (POST), usado pelo painel.
  N8N_ITEM_URL: "https://n8n.painellipe.online/webhook/alterar-item-cantina",

  // Nome da aba da planilha com o cardápio oficial (colunas: id, categoria, nome, desc, emoji, preco, disponivel).
  ABA_CARDAPIO: "Cardapio",

  // ID da planilha do Google Sheets (trecho entre /d/ e /edit na URL).
  SHEET_ID: "17o6cWNHn4SeyvIZ0rElyQIiZmJqfMl5MyUA1nW9JpVg",

  // Pix. Deixe PIX_CHAVE vazio para esconder a opção "Pagar com Pix agora".
  PIX_CHAVE: "",
  PIX_NOME: "",

  // WhatsApp da cantina para o aluno enviar o comprovante. Só números, com DDI 55 (ex.: 5599999999999).
  WHATSAPP_CANTINA: ""
};
