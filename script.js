function showContent(contentType) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.style.display = 'none');

    if (contentType === 'image') {
        document.querySelector('.image-content').style.display = 'block';
    } else if (contentType === 'video') {
        document.querySelector('.video-content').style.display = 'block';
    }
}
