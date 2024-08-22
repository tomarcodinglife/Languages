console.log('hi i am javaScript')

let paragraph = document.getElementById('paraId')
console.log(paragraph)

let itdemo = paragraph.innerText
console.log(itdemo)

/* return
Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos reiciendis aut mollitia, eaque sit sapiente inventore debitis. Assumenda, cumque ipsa? Minus corporis dolor ducimus qui voluptate sapiente vel, nisi eveniet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos iure dolorum consectetur fuga consequatur illo accusantium nisi recusandae quia sequi ad ratione atque qui praesentium, adipisci rerum numquam voluptatum! Dolorum? Read More
*/

let icdemo = document.getElementById('paraId').textContent
console.log(icdemo)

/* return

Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos reiciendis aut mollitia, eaque sit sapiente inventore debitis. Assumenda, cumque ipsa? Minus corporis dolor ducimus qui voluptate sapiente vel, nisi eveniet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos iure dolorum consectetur fuga consequatur illo accusantium nisi recusandae quia sequi ad ratione atque qui praesentium, adipisci rerum numquam voluptatum! Dolorum?  Read More  Click Me

*/

let ihtml = document.getElementById('paraId').innerHTML
console.log(ihtml)
/* return
Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos reiciendis aut mollitia, eaque sit sapiente inventore debitis. Assumenda, cumque ipsa? Minus corporis dolor ducimus qui voluptate sapiente vel, nisi eveniet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos iure dolorum consectetur fuga consequatur illo accusantium nisi recusandae quia sequi ad ratione atque qui praesentium, adipisci rerum numquam voluptatum! Dolorum? <a href="http://google.com/search?q=sujit+tomar" target="_blank" id="readmore"> Read More</a> <button style="display: none;"> Click Me</button>

*/