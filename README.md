<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>login.garciabank</title>
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>
</head>
<body>
    <div class="imagem">
        <img src="imagens/logobank-removebg-preview.png" alt="garciabank" width="400px" height="300px">
    </div>

    <div id="divlogin">
        <h2>login</h2>
        usuário:<br> <input type="text" name="usuario" id="usuario" placeholder="digite seu usuário" style="width: 90%; padding: 10px; margin: 10px 0;"> <br>
        senha:<br> <input type="password" name="senha" id="senha" placeholder="digite sua senha" style="width: 90%; padding: 10px; margin: 10px 0;">
    </div>
    <div id="but">
        <input id="botao" type="button" va
        lue="entrar" width onclick="clicar()">
    </div>

    <div id="esquecido">
        <a href="esquecido.html">esqueceu a senha?</a>
    </div>
</body>
</html>
