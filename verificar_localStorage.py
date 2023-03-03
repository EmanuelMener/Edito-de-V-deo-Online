from selenium import webdriver

# Configura o driver do Selenium
driver = webdriver.Chrome()

# Abre a página que contém o código JavaScript
driver.get("http://127.0.0.1:5500/video-editor/html/upload.html")

# Executa o código JavaScript para verificar se o arquivo foi salvo no localStorage
file = driver.execute_script("return localStorage.getItem('video')")

# Verifica se o arquivo foi salvo corretamente
if file:
    print("O arquivo foi salvo corretamente no localStorage.")
else:
    print("O arquivo não foi salvo corretamente no localStorage.")
