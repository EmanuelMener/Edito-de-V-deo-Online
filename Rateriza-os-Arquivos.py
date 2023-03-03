import os
from pathlib import Path

# Define o caminho da pasta a ser analisada
root_dir = r"C:/Users/Emanuel Menezes/Documents/Projetos/Editor de Video"

# Define o nome do arquivo de texto a ser criado
output_file = "Fluxograma das Pastas e Arquivos.txt"

# Função recursiva para percorrer a estrutura de diretórios
def scan_dir(path, depth=0):
    # Calcula a indentação de acordo com a profundidade do diretório
    indent = "  " * depth

    # Escreve o nome do diretório atual no arquivo de texto
    with open(output_file, "a") as f:
        f.write(f"{indent}- {Path(path).name}\n")

    # Percorre os arquivos e subdiretórios do diretório atual
    for entry in os.scandir(path):
        if entry.is_file():
            # Escreve o nome do arquivo no arquivo de texto
            with open(output_file, "a") as f:
                f.write(f"{indent}  - {entry.name}\n")
        elif entry.is_dir():
            # Chama a função recursivamente para o subdiretório
            scan_dir(entry.path, depth + 1)

# Limpa o conteúdo do arquivo de texto (se ele já existir)
Path(output_file).write_text("")

# Chama a função para percorrer a pasta raiz
scan_dir(Path(root_dir))

print(f"Fluxograma das pastas e arquivos salvo em {output_file}")
