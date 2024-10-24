document.getElementById('sql-btn').addEventListener('click', function() {
    var searchQuery = document.getElementById('sql-input').value;

    // Simulate SQL Injection vulnerability
    if (searchQuery.includes("' OR 1=1 --")) {
        setTimeout(() => {
            document.getElementById('sql-overlay').classList.add('show');
            document.getElementById('sql-result').textContent = "Sensitive Data: Users: admin, root, john";
            document.getElementById('result-content').style.display = "block";
        }, 1000);
    } else {
        document.getElementById('sql-result').textContent = "No results found for '" + searchQuery + "'";
        document.getElementById('result-content').style.display = "block";
    }
});
