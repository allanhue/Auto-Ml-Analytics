document.getElementById("submit").addEventListener("click", function() {
    var formData = document.getElementById("form").value;
    console.log(formData);

    //send  post request
    // fetch('http://localhost:5000/analytics', {
    //     method: 'POST',
    //     headers: {      }
    // }).then(response => response.json())
    // .then(data => {
    //     console.log(data);
    // })
    // .catch(error => {
    //     console.error('Error:', error);
    // });
});