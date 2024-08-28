# Project related to DOM


## project link


[Github](https://github.com/tomarcodinglife)

[stackbiltz](https://stackblitz.com/@tomarcodinglife/projects)

# Solution Code 

## Project 3 (Digital Clock)

### javascript Code

``` javaScript
let time = document.querySelector('#time');
let dateDiv = document.querySelector('#date');

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  time.innerHTML = date.toLocaleTimeString();
}, 1000);

myDate = new Date();
dateToday = myDate.toLocaleDateString();
dateDiv.innerHTML = `${dateToday}`;
```

### html Code

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
      <div id="subbox">
        <div id="headline"><span>Your Current Time</span></div>
        <div id="time"></div>
        <div id="headline"><span>Your Current Date</span></div>
        <div id="date"></div>
      </div>
      <div id="message">Thank you so much!</div>
    </div>
    <script src="script.js"></script>
  </body>
</html>
```

### CSS Code

```css

* {
  margin: 0;
  padding: 0;
}

#box {
  height: 100vh;
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#subbox {
  height: 350px;
  width: 500px;
  background-color: aqua;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 15px;
}

#headline {
  text-decoration: solid;
  font-size: xx-large;
  margin: 10px;
  font-weight: bold;
}

#time {
  height: auto;
  width: 100%;
  background-color: rgb(0, 0, 0);
  color: white;
  border-radius: 50px;
  font-size: 80px;
}

#date {
  height: auto;
  width: 100%;
  background-color: rgb(0, 0, 0);
  color: white;
  border-radius: 50px;
  font-size: xx-large;
}

#message {
  margin-top: 20px;
}
```