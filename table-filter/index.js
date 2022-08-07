const info = [
    {
        "data": "2004-04-30T09:39:36.325Z",
        "cliente": {
            "primeiro_nome": "Ricardo",
            "ultimo_nome": "Eletro",
            "telefone": "(00) 00000-0000"
        },
        "produto": "Televisão",
        "preco": 365,
        "quantidade": 5,
        "loja": {
            "nome": "Ricardo-Eletro",
            "telefone": "(00) 00000-0000"
        },
        "compra_efetuada": "NAO"
    },
    {
        "data": "2004-04-30T09:39:36.325Z",
        "cliente": {
            "primeiro_nome": "João",
            "ultimo_nome": "Gomes",
            "telefone": "(11) 11111-1111"
        },
        "produto": "DVD",
        "preco": 651,
        "quantidade": 4,
        "loja": {
            "nome": "BIG",
            "telefone": "(11) 11111-1111"
        },
        "compra_efetuada": "SIM"
    },
    {
        "data": "2004-04-30T09:39:36.325Z",
        "cliente": {
            "primeiro_nome": "Lucas",
            "ultimo_nome": "Henrique",
            "telefone": "(33) 33333-3333"
        },
        "produto": "Computador",
        "preco": 1500,
        "quantidade": 1,
        "loja": {
            "nome": "Rapidão",
            "telefone": "(33) 33333-3333"
        },
        "compra_efetuada": "SIM"
    },
    {
        "data": "2004-04-30T09:39:36.325Z",
        "cliente": {
            "primeiro_nome": "Maria",
            "ultimo_nome": "Alice",
            "telefone": "(44) 44444-4444"
        },
        "produto": "Copo",
        "preco": 20,
        "quantidade": 3,
        "loja": {
            "nome": "Ricardo-Eletro",
            "telefone": "(44) 44444-4444"
        },
        "compra_efetuada": "NAO"
    },
    {
        "data": "2004-04-30T09:39:36.325Z",
        "cliente": {
            "primeiro_nome": "Rafaela",
            "ultimo_nome": "Silva",
            "telefone": "(55) 55555-5555"
        },
        "produto": "Sofá",
        "preco": 768,
        "quantidade": 1,
        "loja": {
            "nome": "Ricardo-Eletro",
            "telefone": "(55) 55555-5555"
        },
        "compra_efetuada": "NAO"
    },
    {
        "data": "2004-04-30T09:39:36.325Z",
        "cliente": {
            "primeiro_nome": "Thiago",
            "ultimo_nome": "Vert",
            "telefone": "(66) 66666-6666"
        },
        "produto": "Teclado",
        "preco": 890,
        "quantidade": 2,
        "loja": {
            "nome": "BIG",
            "telefone": "(77) 77777-7777"
        },
        "compra_efetuada": "SIM"
    },
    {
        "data": "2004-04-30T09:39:36.325Z",
        "cliente": {
            "primeiro_nome": "Zé",
            "ultimo_nome": "Vaqueiro",
            "telefone": "(77) 77777-7777"
        },
        "produto": "Volante",
        "preco": 210,
        "quantidade": 1,
        "loja": {
            "nome": "Ricardo-Eletro",
            "telefone": "(77) 77777-7777"
        },
        "compra_efetuada": "SIM"
    },
    {
        "data": "2004-04-30T09:39:36.325Z",
        "cliente": {
            "primeiro_nome": "Vera",
            "ultimo_nome": "Paixão",
            "telefone": "(88) 88888-8888"
        },
        "produto": "Celular",
        "preco": 3500,
        "quantidade": 2,
        "loja": {
            "nome": "Abre-Sol",
            "telefone": "(88) 88888-8888"
        },
        "compra_efetuada": "NAO"
    }
]

const tbody = document.querySelector("#tbody")

function filterTable(type){

    const newInfo = info.filter(item => item.compra_efetuada === type)

    renderTable(newInfo)
}

function renderTable(newInfo = info){

    const items = newInfo.map((item)=>{

        const dateFormat = new Date(item.data)
        const fullName = `${item.cliente.primeiro_nome} ${item.cliente.ultimo_nome}`
        const priceFormat = item.preco.toLocaleString("pt-br", {style: 'currency', currency: 'BRL'})
        const fullPrice = (item.preco * item.quantidade).toLocaleString("pt-br", {style: 'currency', currency: 'BRL'})

        const compraEfetuada =
            item.compra_efetuada === "NAO"
            ? "NÃO"
            : item.compra_efetuada

        return `
            <tr>
                <td>${dateFormat.toLocaleDateString("pt-br")}</td>
                <td>${fullName}</td>
                <td>${item.cliente.telefone}</td>
                <td>${item.loja.nome}</td>
                <td>${item.loja.telefone}</td>
                <td>${item.produto}</td>
                <td>${item.quantidade}</td>
                <td>${priceFormat}</td>
                <td>${fullPrice}</td>
                <td>${compraEfetuada}</td>
            </tr>
        `
    })
    tbody.innerHTML = items.join('')
}

renderTable()