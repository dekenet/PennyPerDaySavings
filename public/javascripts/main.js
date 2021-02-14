function loadContent(index, callback) {
  var xhr = new XMLHttpRequest();
  var path = '/content/'+index;
  xhr.open("GET", path, true);
  // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function() {
      if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        var script = document.createElement('script');
        script.src = '/scripts/'+index;
        document.getElementsByTagName('head')[0].appendChild(script);
        document.getElementById('content').innerHTML = xhr.response;
        callback?.();
      }
  }
  xhr.send();
}