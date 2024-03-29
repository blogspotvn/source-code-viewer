async function fetchSourceCode() {
  const url = document.getElementById('urlInput').value;
  try {
    const response = await fetch(`https://cors-anywhere.herokuapp.com/${url}`);
    const text = await response.text();

    const blogIdRegex = /'blogId': '(\d+)'|targetBlogID=(\d+)/;
    const blogIdMatch = text.match(blogIdRegex);
    let blogId = blogIdMatch ? (blogIdMatch[1] ? blogIdMatch[1] : blogIdMatch[2]) : "Không tìm thấy Blog Id";

    const titleRegex = /<title>(.*?)<\/title>/;
    const titleMatch = text.match(titleRegex);
    const title = titleMatch ? titleMatch[1] : "Không tìm thấy Website";

    document.getElementById('sourceCode').textContent = `BlogId: ${blogId}\nWebsite: ${title}`;
  } catch (error) {
    console.error('Có lỗi xảy ra:', error);
  }
}
