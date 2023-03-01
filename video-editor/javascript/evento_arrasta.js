const dropzone = document.getElementById('dropzone');

    // impede que o navegador abra o arquivo ao ser arrastado
    dropzone.addEventListener('dragover', e => {
    e.preventDefault();
    dropzone.classList.add('active');
    });

    dropzone.addEventListener('dragleave', e => {
    dropzone.classList.remove('active');
    });

    // evento disparado quando um arquivo é solto na área do dropzone
    dropzone.addEventListener('drop', e => {
    e.preventDefault();
    dropzone.classList.remove('active');
    const file = e.dataTransfer.files[0];
    handleFile(file);
    });

    // evento disparado quando o usuário seleciona um arquivo usando o botão 'Escolher Arquivo'
    const fileInput = document.getElementById('fileInput');
    fileInput.addEventListener('change', e => {
    const file = fileInput.files[0];
    handleFile(file);
    });

    // função que trata o arquivo selecionado pelo usuário
    function handleFile(file) {
    // aqui você pode fazer o upload do arquivo ou redirecionar o usuário para a página de edição do vídeo
    console.log(file.name);
    }