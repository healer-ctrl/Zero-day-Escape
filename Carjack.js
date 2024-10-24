document.getElementById('clickjacking-btn').addEventListener('click', function() {
    document.getElementById('hidden-iframe').style.display = "block";
    
    setTimeout(() => {
        document.getElementById('clickjack-overlay').classList.add('show');
    }, 1000);
});
