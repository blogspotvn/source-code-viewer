<!-- index.html -->
<html>
  <head>
    <title>Xem Mã Nguồn Web</title>
  </head>
  <body>
    <input type="text" id="urlInput" placeholder="Nhập URL trang web">
    <button onclick="fetchSourceCode()">Xem Mã Nguồn</button>
    <pre id="sourceCode"></pre>

    <script>// script.js
async function fetchSourceCode() {
  const url = document.getElementById('urlInput').value;
  try {
    const response = await fetch(`https://cors-anywhere.herokuapp.com/${url}`);
    const text = await response.text();
    document.getElementById('sourceCode').textContent = text;
  } catch (error) {
    console.error('Có lỗi xảy ra:', error);
  }
}
</script>
  </body>
</html>
