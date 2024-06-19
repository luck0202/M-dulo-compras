//relógio
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');

const relogio = setInterval(function time() {
  let dateToday = new Date();
  let hr = dateToday.getHours();
  let min = dateToday.getMinutes();

  if (hr < 10) hr = '0' + hr;
  if (min < 10) min = '0' + min;

  horas.textContent = hr;
  minutos.textContent = min;
})

//data
const day = document.getElementById('day');
const weekday = document.getElementById('weekday');
const monthyear = document.getElementById('monthyear');
const year = document.getElementById('year');

let dataAtual = new Date();

//dia
let dia = dataAtual.getDate();

//dias da semana
let diaSemana = dataAtual.getDay();
if (diaSemana == 0) diaSemana = 'Domingo'
if (diaSemana == 1) diaSemana = 'Segunda-feira'
if (diaSemana == 2) diaSemana = 'Terça-feira'
if (diaSemana == 3) diaSemana = 'Quarta-feira'
if (diaSemana == 4) diaSemana = 'Quinta-feira'
if (diaSemana == 5) diaSemana = 'Sexta-feira'
if (diaSemana == 6) diaSemana = 'Sabado'

//mês
let mes = dataAtual.getMonth();

if (mes == 0) mes = 'janeiro'
if (mes == 1) mes = 'fevereiro'
if (mes == 2) mes = 'março'
if (mes == 3) mes = 'abril'
if (mes == 4) mes = 'maio'
if (mes == 5) mes = 'junho'
if (mes == 6) mes = 'julho'
if (mes == 7) mes = 'agosto'
if (mes == 8) mes = 'setembro'
if (mes == 9) mes = 'outubro'
if (mes == 10) mes = 'novembro'
if (mes == 11) mes = 'dezembro'

//ano
let ano = dataAtual.getFullYear();

weekday.textContent = diaSemana;
day.textContent = dia;
monthyear.textContent = mes;
year.textContent = ano;

document.getElementById("weekday").innerHTML = diaSemana.toDateString();
document.getElementById("day").innerHTML = dia.toDateString();
document.getElementById("monthyear").innerHTML = mes.toDateString();
document.getElementById("year").innerHTML = ano.toDateString();

//Nova cotação - pág novacot
const quoteForm = document.getElementById('quote-form');
const quoteIdInput = document.getElementById('quote-id');
const quoteNumberDiv = document.getElementById('quote-number');
const submitQuoteBtn = document.getElementById('submit-quote');

let quoteId = 1; // iniciar id da cotação

quoteForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(quoteForm);
  const quoteData = {};
  for (const [key, value] of formData) {
    quoteData[key] = value;
  }
  quoteId++; // increment quote ID
  quoteIdInput.value = `Cotação ${quoteId}`;
  quoteNumberDiv.textContent = `Cotação ${quoteId} inserida com sucesso!`;
});


//Cadastro de fornecedor - pág. novoforn
const supplierForm = document.getElementById('supplier-form');
const supplierIdInput = document.getElementById('supplier-id');
const supplierNumberDiv = document.getElementById('supplier-number');
const submitSupplierBtn = document.getElementById('submit-supplier');
const validateCnpjBtn = document.getElementById('validate-cnpj');
const validateZipCodeBtn = document.getElementById('validate-zip-code');

let supplierId = 1; // iniciar id do fornecedor

supplierForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(supplierForm);
  const supplierData = {};
  for (const [key, value] of formData) {
    supplierData[key] = value;
  }
  supplierId++; // incrementar id do fornecedor
  supplierIdInput.value = `Fornecedor ${supplierId}`;
  supplierNumberDiv.textContent = `Fornecedor ${supplierId} cadastrado com sucesso!`;
});

validateCnpjBtn.addEventListener('click', () => {
  const cnpjInput = document.getElementById('cnpj');
  const cnpjValue = cnpjInput.value;
  // Validar CNPJ com API
  fetch(`https://solucoes.receita.fazenda.gov.br/Servicos/cnpjreva/cnpjreva_Solicitacao.asp?cnpj=${cnpjValue}`)
    .then(response => response.json())
    .then(data => {
      if (data.status === 'OK') {
        alert('CNPJ válido!');
      } else {
        alert('CNPJ inválido!');
      }
    })
    .catch(error => console.error(error));
});

validateZipCodeBtn.addEventListener('click', () => {
  const zipCodeInput = document.getElementById('zip-code');
  const zipCodeValue = zipCodeInput.value;
  // validar CEP com API
  fetch(`https://buscacepinter.correios.com.br/app/endereco/index.php?cep=${zipCodeValue}`)
    .then(response => response.json())
    .then(data => {
      if (data.status === 'OK') {
        alert('CEP válido!');
      } else {
        alert('CEP inválido!');
      }
    })
    .catch(error => console.error(error));
});


//solicitação de compra
const formulario = document.getElementById('purchase-request-form');
const requestNumberDiv = document.getElementById('request-number');
const today = new Date().toISOString().split('T')[0];
document.getElementById('request-date').value = today;

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  const productCode = document.getElementById('product-code').value;
  const quantity = document.getElementById('quantity').value;
  const priority = document.getElementById('priority').value;
  const requestingDepartment = document.getElementById('requesting-department').value;

  // Geração de número da solicitação de compra
  const requestNumber = Math.floor(Math.random() * 1000000);
  requestNumberDiv.textContent = `Request Number: ${requestNumber}`;

  // Salva os dados no banco ou API
  console.log({
    requestDate: today,
    productCode,
    quantity,
    priority,
    requestingDepartment,
    requestNumber,
  });
});

document.getElementById('consult-product-code').addEventListener('click', () => {
  // Abre janela para consulta de produto
  alert('Consulting product code...');
});
const suppliersListDiv = document.getElementById('suppliers-list');
const campoDeSelecao = document.getElementById('search-field');
const entradaPesquisa = document.getElementById('search-input');
const botaoPesquisa = document.getElementById('search-btn');
const newRegistrationBtn = document.getElementById('new-registration-btn');

// Supõe a a lista de fornecedores
const suppliersData = [
  {
    id: 1,
    cnpj: '12345678901234',
    companyName: 'Company A',
    businessName: 'Business A',
  },
  {
    id: 2,
    cnpj: '98765432109876',
    companyName: 'Company B',
    businessName: 'Business B',
  },
  //...
];

// Renderiza lista de fornecedores
function renderSuppliersList(suppliers) {
  suppliersListDiv.innerHTML = '';
  suppliers.forEach((supplier) => {
    const li = document.createElement('li');
    li.textContent = `${supplier.companyName} - ${supplier.businessName} - ${supplier.cnpj}`;
    suppliersListDiv.appendChild(li);
  });
}

// Consulta de fornecedores
function searchSuppliers() {
  const searchField = searchFieldSelect.value;
  const searchTerm = searchInput.value.trim();
  const filteredSuppliers = suppliersData.filter((supplier) => {
    return supplier[searchField].toLowerCase().includes(searchTerm.toLowerCase());
  });
  renderSuppliersList(filteredSuppliers);
}

//Novo pedido - página pedido
const form = document.getElementById('new-order-form');
const quoteNumberInput = document.getElementById('quote-number');
const supplierInput = document.getElementById('supplier');
const productCodeInput = document.getElementById('product-code');
const quantityInput = document.getElementById('quantity');
const priceInput = document.getElementById('price');
const orderIdDiv = document.getElementById('order-id');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const quoteNumber = quoteNumberInput.value;
  const supplier = supplierInput.value;
  const productCode = productCodeInput.value;
  const quantity = quantityInput.value;
  const price = priceInput.value;

  // Gerar ID exclusivo para pedido
  const orderId = generateUUID();

  // Exibir ID do pedido
  orderIdDiv.textContent = `Order ID: ${orderId}`;

  // Enviar dados do formulário
  console.log(`Order submitted: ${quoteNumber}, ${supplier}, ${productCode}, ${quantity}, ${price}`);
});

function generateUUID() {
  return Math.random().toString(36).substr(2, 9);
}

//Lista cotações
const searchFieldSelect = document.getElementById('search-field');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const quoteListDiv = document.getElementById('quote-list');

let quotes = [
  // dados de amostra
  { id: 1, purchaseRequest: 'PR001', supplier: 'Supplier A', productCode: 'PC001', price: 100.00 },
  { id: 2, purchaseRequest: 'PR002', supplier: 'Supplier B', productCode: 'PC002', price: 200.00 },
  { id: 3, purchaseRequest: 'PR003', supplier: 'Supplier C', productCode: 'PC003', price: 300.00 },
  //...
];

searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const searchTerm = searchInput.value.trim();
  const searchField = searchFieldSelect.value;

  const filteredQuotes = quotes.filter((quote) => {
    if (searchField === 'id') {
      return quote.id === parseInt(searchTerm);
    } else if (searchField === 'purchase-request') {
      return quote.purchaseRequest.includes(searchTerm);
    } else if (searchField === 'upplier') {
      return quote.supplier.includes(searchTerm);
    } else if (searchField === 'product-code') {
      return quote.productCode.includes(searchTerm);
    }
    return false;
  });

  displayQuotes(filteredQuotes);
});

function displayQuotes(quotes) {
  quoteListDiv.innerHTML = '';
  quotes.forEach((quote) => {
    const quoteItem = document.createElement('div');
    quoteItem.className = 'quote-item';
    quoteItem.textContent = `ID: ${quote.id}, Purchase Request: ${quote.purchaseRequest}, Supplier: ${quote.supplier}, Product Code: ${quote.productCode}, Price: ${quote.price}`;
    quoteListDiv.appendChild(quoteItem);
  });
}

displayQuotes(quotes); // exibir todas as cotações inicialmente

