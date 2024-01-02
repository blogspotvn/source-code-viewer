async function fetchSourceCode() {
  const url = document.getElementById('urlInput').value;
  try {
    const response = await fetch(`https://cors-anywhere.herokuapp.com/${url}`);
    const text = await response.text();

    // Sử dụng Regular Expression để tìm BlogId trong cả hai dạng
    const regex = /'blogId': '(\d+)'|targetBlogID=(\d+)/;
    const blogIdMatch = text.match(regex);
    let blogId;

    if (blogIdMatch) {
      // Kiểm tra xem BlogId được tìm thấy từ pattern nào
      blogId = blogIdMatch[1] ? blogIdMatch[1] : blogIdMatch[2];
    } else {
      blogId = "Không tìm thấy BlogId";
    }

    // Hiển thị BlogId
    document.getElementById('sourceCode').textContent = `BlogId: ${blogId}`;
  } catch (error) {
    console.error('Có lỗi xảy ra:', error);
  }
}
