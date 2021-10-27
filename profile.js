<!DOCTYPE html>
<html>
<body>

<h2>JavaScript addEventListener()</h2>

<p>This example uses the addEventListener() method to attach a click event to a button.</p>

<button id="myBtn">Try it</button>

<p id="demo"></p>

<script>
document.getElementById("myBtn").addEventListener("click", displayDate);

function displayDate() {
  document.getElementById("demo").innerHTML = Date();

document.getElementById('color').addEventListener('click', function(){
  alert('my favorite color is red');
}, false);
document.getElementById('place').addEventListener('click', function(){
  alert('my favorite place is lehi');
}, false);
document.getElementById('ritual').addEventListener('click', function(){
  alert('my favorite ritual is yoga');
}, false);

<script src="profile.js"></script>
</body>
</html>