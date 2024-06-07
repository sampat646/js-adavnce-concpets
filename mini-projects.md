## color changer 
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Color changer</title>
</head>
<body>
  <div class="container">
    <!-- you can add number buttons don't need to change the script. -->
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
## BMI calculator

```javascript
const  form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = "Please provide a valid height";
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = "Please provide a valid weight"; 
        
    }else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2);

        if(bmi < 18.5){
        result.innerHTML = `Your BMI under weight range ${bmi}`;
        }else if(bmi >= 18.5 && bmi <= 24.9){
            result.innerHTML = `Your BMI is normal weight range ${bmi}`;
            
        }else if(bmi >= 25 && bmi <= 29.9){
            result.innerHTML = `Your BMI is overweight range ${bmi}`;
        }else if(bmi >= 30){
            result.innerHTML = `Your BMI is obese range ${bmi}`;
        }else{
            result.innerHTML = `Your BMI is very obese range ${bmi}`;
        }
    }
    
});

```
## Api handling 
# I took api url from my github and accesed profile,username & bio
```javascript
const pro = document.getElementById("pro");
const follwers = document.getElementById("name");
const bio = document.getElementById("bio");
const requestUrl = "https://api.github.com/users/sampat646";
const xhr = new XMLHttpRequest();
xhr.open("GET", requestUrl);
xhr.send();
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4) {
    const data = JSON.parse(this.responseText);
    console.log(this.responseText);
    console.log(data.id);
    var profile = data.avatar_url;
    var name = data.login;
    var biodata = data.bio;
    pro.src = profile;
    console.log(name);
    follwers.textContent = name;
    bio.textContent = biodata;
  }
};


```
