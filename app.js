//relógio
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');

const relogio = setInterval(function time() {
  let dateToday = new Date();
  let hr = dateToday.getHours();
  let min = dateToday.getMinutes();

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
const form = document.getElementById('quote-form');
const supplierInput = document.getElementById('supplier');
const cnpjInput = document.getElementById('cnpj');
const productCodeInput = document.getElementById('product-code');
const quantityInput = document.getElementById('quantity');
const priceInput = document.getElementById('price');
const deadlineInput = document.getElementById('deadline');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const supplier = supplierInput.value.trim();
  const cnpj = cnpjInput.value.trim();
  const productCode = productCodeInput.value.trim();
  const quantity = quantityInput.value.trim();
  const price = priceInput.value.trim();
  const deadline = deadlineInput.value.trim();

  function validateCNPJ(cnpj) {
    cnpj = cnpj.replace(/\D+/g, ''); // remove o que não é número
    if (cnpj.length !== 14) return false; // CNPJ = 14 dígitos

    let sum = 0;
    let weight = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

    for (let i = 0; i < 12; i++) {
      sum += parseInt(cnpj.charAt(i)) * weight[i];
    }

    let verifyingDigit = 11 - (sum % 11);
    if (verifyingDigit > 9) verifyingDigit = 0;

    if (cnpj.charAt(12) !== verifyingDigit.toString()) return false;

    sum = 0;
    weight = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

    for (let i = 0; i < 13; i++) {
      sum += parseInt(cnpj.charAt(i)) * weight[i];
    }

    verifyingDigit = 11 - (sum % 11);
    if (verifyingDigit > 9) verifyingDigit = 0;

    if (cnpj.charAt(13) !== verifyingDigit.toString()) return false;

    return true;
  }
}

function padZero(number, length) {
    return (number + "").padStart(length, "0");
  }

//Cadastro de fornecedor - pág. novoforn
const form = document.getElementById('supplier-form');
const companyNameInput = document.getElementById('company-name');
const businessNameInput = document.getElementById('business-name');
const cnpjInput = document.getElementById('cnpj');
const statusInput = document.getElementById('status');
const telephoneInput = document.getElementById('telephone');
const emailInput = document.getElementById('email');
const zipCodeInput = document.getElementById('zip-code');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const companyName = companyNameInput.value.trim();
  const businessName = businessNameInput.value.trim();
  const cnpj = cnpjInput.value.trim();
  const status = statusInput.value.trim();
  const telephone = telephoneInput.value.trim();
  const email = emailInput.value.trim();
  const zipCode = zipCodeInput.value.trim();

  // Validação de CNPJ
  function validateCNPJ(cnpj) {
    cnpj = cnpj.replace(/\D+/g, ''); // remove o que não é número
    if (cnpj.length !== 14) return false; // CNPJ = 14 dígitos

    let sum = 0;
    let weight = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

    for (let i = 0; i < 12; i++) {
      sum += parseInt(cnpj.charAt(i)) * weight[i];
    }

    let verifyingDigit = 11 - (sum % 11);
    if (verifyingDigit > 9) verifyingDigit = 0;

    if (cnpj.charAt(12) !== verifyingDigit.toString()) return false;

    sum = 0;
    weight = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

    for (let i = 0; i < 13; i++) {
      sum += parseInt(cnpj.charAt(i)) * weight[i];
    }

    verifyingDigit = 11 - (sum % 11);
    if (verifyingDigit > 9) verifyingDigit = 0;

    if (cnpj.charAt(13) !== verifyingDigit.toString()) return false;

    return true;
  }

  // Validação de CEP
  function validateZipCode(zipCode) {
    const apiUrl = 'https://buscacepinter.correios.com.br/app/endereco/index.php';
    const params = `tq=${zipCode}&pagina=1&ordenacao=cep&ordenacao_tipo=ASC`;

    fetch(`${apiUrl}?${params}`)
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          // CEP válido
          return true;
        } else {
          // CEP inválido
          return false;
        }
      })
      .catch(error => {
        console.error('Error validating zip code:', error);
        return false;
      });
  }
  //solicitação de compra
  const form = document.getElementById('purchase-request-form');
  const requestNumberDiv = document.getElementById('request-number');
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('request-date').value = today;

  form.addEventListener('submit', (e) => {
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
  const searchFieldSelect = document.getElementById('search-field');
  const searchInput = document.getElementById('search-input');
  const searchBtn = document.getElementById('search-btn');
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
