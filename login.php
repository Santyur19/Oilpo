<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Oilpo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link href="css/login.css" rel="stylesheet"/>
</head>
<body>
    <br>

    <div id="container">
        <form action="php/login.php" method="POST">
            <h1 align="center">Oilpo</h1>
            <br>
            <br>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" required="required">
                <label for="floatingInput">Usuario</label>
            </div>
            
            <div class="form-floating mb-3">
                <input type="password" class="form-control" id="floatingInput" placeholder="name@example.com" required="required">
                <label for="floatingInput">Contraseña</label>
            </div>
            <p>
            <a href="olvido.php">Olvidó su contraseña?</a>
            <br>
            <br>
            <input type="submit" class="btn btn-primary" value="Enviar" />
        </form>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>
</html>