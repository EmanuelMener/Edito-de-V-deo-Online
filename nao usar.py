import os

# Nome do projeto
project_name = "video-editor"

# Cria a pasta do projeto
os.mkdir(project_name)

# Cria os arquivos HTML
with open(f"{project_name}/index.html", "w") as file:
    pass  # Não há conteúdo para adicionar ainda

with open(f"{project_name}/upload.html", "w") as file:
    pass  # Não há conteúdo para adicionar ainda

with open(f"{project_name}/edit.html", "w") as file:
    pass  # Não há conteúdo para adicionar ainda

# Cria os arquivos CSS e JS
with open(f"{project_name}/style.css", "w") as file:
    pass  # Não há conteúdo para adicionar ainda

with open(f"{project_name}/script.js", "w") as file:
    pass  # Não há conteúdo para adicionar ainda

# Cria a pasta "assets" e suas subpastas
os.mkdir(f"{project_name}/assets")
os.mkdir(f"{project_name}/assets/video")
os.mkdir(f"{project_name}/assets/audio")
os.mkdir(f"{project_name}/assets/fonts")
os.mkdir(f"{project_name}/assets/images")
