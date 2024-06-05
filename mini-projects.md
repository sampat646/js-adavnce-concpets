## color changer 
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Color changer</title>
</head>
<body>
  <div class="container">
    //you can add number buttons don't need to change the script.
    <button id="grey">grey</button>
    <button id="red">red</button>
    <button id="orange">orange</button>
    <button id="green">green</button>
  </div>

  <script>
    const cont = document.querySelectorAll('button');
    const body = document.querySelector('body');
    cont.forEach(btn => {
      btn.addEventListener('click', () => {
        body.style.backgroundColor = btn.id;
      });
    });
  </script>
</body>
</html>

```
