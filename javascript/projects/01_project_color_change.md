# Project related to DOM


## project link


[Github](https://github.com/tomarcodinglife)

[stackbiltz](https://stackblitz.com/@tomarcodinglife/projects)

# Solution Code 

## Project 1 (Color Changer)

### JavaScript Code

``` javascript

console.log('Hi i am java Script');
let buttons = document.querySelectorAll('.button');
let body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'green') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'red') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'black') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```

### HTML Code

``` html 
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
    <div id="box">
      <button class="button" id="green">Green</button>
      <button class="button" id="red">Red</button>
      <button class="button" id="blue">Blue</button>
      <button class="button" id="black">Black</button>
    </div>
    <script src="script.js"></script>
  </body>
</html>

```

### CSS Code

``` css
* {
  margin: 0;
  padding: 0;
}

#box {
  height: 100vh;
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.button {
  height: 20px;
  width: 80px;
  color: rgb(255, 255, 255);
  border: 1px solid black;
  border-radius: 10px;
  margin: 5px;
  font-weight: bold;
}

#box :first-child {
  background-color: green;
}

#box :last-child {
  background-color: rgb(0, 0, 0);
}

#box :nth-child(2) {
  background-color: red;
}

#box :nth-child(3) {
  background-color: blue;
}

```