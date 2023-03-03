const fileInput = document.querySelector('#fileInput');
const uploadArea = document.querySelector('#uploadArea');
const fileList = document.querySelector('#fileList');

// função para processar o arquivo
function processFile(file) {
  // processamento do arquivo aqui
  console.log(`Arquivo "${file.name}" processado e salvo no localStorage.`);

  // salva o arquivo processado no localStorage
  localStorage.setItem('video', JSON.stringify(file));
}

// função para exibir mensagem de alerta
function showAlert(message) {
  alert(message);
}

// função para lidar com o upload do arquivo
function handleFileUpload(file) {
  // verifica se o arquivo é válido
  if (!file.type.startsWith('video/')) {
    showAlert('Por favor, selecione um arquivo de vídeo.');
    return;
  }

  // processa o arquivo e salva no localStorage
  processFile(file);

  // adiciona um novo botão para iniciar a edição
  uploadArea.innerHTML = `
    <button id="editButton" class="upload-button-style">Comece a Editar ></button>
  `;
  // adiciona o evento de click para o botão de edição
  const editButton = document.querySelector('#editButton');
  editButton.addEventListener('click', () => {
    // redireciona para a página de edição do arquivo
    window.location.href = '../html/edit.html';
  });

  // remove o estilo do botão de seleção de arquivo
  fileInput.classList.remove('upload-button-style');
}

// adiciona evento para upload de arquivo
fileInput.addEventListener('change', () => {
  const files = fileInput.files;

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    handleFileUpload(file);
  }
});

// adiciona eventos de arrastar e soltar
uploadArea.addEventListener('dragover', e => {
  e.preventDefault();
  uploadArea.classList.add('dragover');
});

uploadArea.addEventListener('dragleave', () => {
  uploadArea.classList.remove('dragover');
});

uploadArea.addEventListener('drop', e => {
  e.preventDefault();
  uploadArea.classList.remove('dragover');

  const files = e.dataTransfer.files;

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    handleFileUpload(file);
  }
});
