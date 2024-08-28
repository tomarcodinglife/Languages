# Project related to DOM


## project link


[Github](https://github.com/tomarcodinglife)

[stackbiltz](https://stackblitz.com/@tomarcodinglife/projects)

# Solution Code 

## Project 2 (bmi calculator)

### javascript Code 

```javascript
let form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML =
      "<h2 color='red'> Please Give a valid input value </h2>";
  }
  if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML =
      "<h2 color='red'> Please Give a valid input value </h2>";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
```
### html code

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div id="container">
      <h1>BMI Calculator</h1>
      <form id="form">
        <div id="box1">
          <p id="height-para"><label for="height">Height in CM : </label><input type="text" id="height"></p>
          <p id="weight-para"><label for="weight">Weight in KG : </label><input type="text" id="weight"></p>
          <button id="button">Calculate</button>
          <div id="results"></div>
        </div>
        <div id="box2">
          <p>.................................................................................................</p>
          <h3>BMI Weight Guide</h3>
          <br>
          <p>Under Weight = Less than 18.6</p>
          <p>Normal Range  18.6 to 24.9</p>
          <p>Overweight = Greater than 24.9</p>
          <br>
          <p>*******************************</p>
          <br>
          <p>Under Weight = Less than 18.6</p>
          <p>Normal Range  18.6 to 24.9</p>
          <p>Overweight = Greater than 24.9</p>
          <br>
          <p>*******************************</p>
          <br>
          <p>Under Weight = Less than 18.6</p>
          <p>Normal Range  18.6 to 24.9</p>
          <p>Overweight = Greater than 24.9</p>
        </div>

      </form>
    <script src="script.js"></script>
  </body>
</html>
```

### css code

```css
* {
  margin: 0;
  padding: 0;
}

#container {
  height: 90vh;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: aqua;
  border: 5px solid black;
  border-radius: 15px;
  margin: 15px;
  padding: 10px;
}

#form {
  margin-top: 25px;
}

#height {
  height: 25px;
  width: 250px;
  border: none;
  border-radius: 5px;
}

#weight {
  height: 25px;
  width: 250px;
  border: none;
  border-radius: 5px;
}

#button {
  height: 25px;
  width: 250px;
  border: 2px solid black;
  margin: 15px;
  border-radius: 10px;
  margin-left: 100px;
}

#box1,
#box2 {
  margin-top: 5px;
}

#height-para {
  margin-bottom: 15px;
}

#box2 {
  margin-top: 10px;
}
```