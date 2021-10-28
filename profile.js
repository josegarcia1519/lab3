<!DOCTYPE html>
<html lang = 'en'>
<head>
  <meta charset="UTF-8">
  <title>JavaScript Events </title>
  link rel="stylesheet" href="style.css">
</head>
<body>

<h2>JavaScript addEventListener()</h2>
<script>
document.getElementById('color').addEventListener('click', function(){
  alert('my favorite color is red')
  }

document.getElementById('place').addEventListener('click', function(){
  alert('my favorite place is lehi')
  }
  
document.getElementById('ritual').addEventListener('click', function(){
  alert('my favorite ritual is yoga')
}
</script>


</body>
</html>