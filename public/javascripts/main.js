function loadContent(index, callback) {
    var xhr = new XMLHttpRequest();
    var path = '/content/'+index;
    xhr.open("GET", path, true);
    // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
          var content = document.getElementById('content');
          content.innerHTML = xhr.response;
          callback?.();
        }
    }
    xhr.send();
  }