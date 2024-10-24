document.getElementById('file-access-btn').addEventListener('click', function() {
    var filePath = document.getElementById('file-input').value;

    // Simulate Directory Traversal vulnerability
    if (filePath === '/etc/passwd') {
        document.getElementById('file-data').textContent = "root:x:0:0:root:/root:/bin/bash";
        document.getElementById('result-content').style.display = "block";
        
        setTimeout(() => {
            document.getElementById('traversal-overlay').classList.add('show');
        }, 1000);
    } else {
        document.getElementById('file-data').textContent = "File not found!";
        document.getElementById('result-content').style.display = "block";
    }
});
