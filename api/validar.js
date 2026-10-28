export default function handler(req, res) {
    const { cupom } = req.body;
    const CUPOM_SECRETO = "CompreEganheAgora";

    if (cupom === CUPOM_SECRETO) {
        return res.status(200).json({ 
            aprovado: true, 
            link_pagamento: "https://link-do-seu-pagamento.com" 
        });
    }
    return res.status(400).json({ aprovado: false });
}
