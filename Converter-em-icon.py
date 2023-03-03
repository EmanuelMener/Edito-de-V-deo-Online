from PIL import Image

logo_path = "C:\\Users\\Emanuel Menezes\\Documents\\Projetos\\Editor de Video\\video-editor\\assets\\images\\Logotipo-EU.png"
icon_path = "icon.ico"

logo = Image.open(logo_path)
icon = logo.resize((32, 32))
icon.save(icon_path)
