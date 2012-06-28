jQuery.fn.validaemail = function (email) {
  this.blur(function () {
    if (this.value == '') {
      return false;
    }
    var EMAIL = this.value;
    var pattern = /^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,3})$/;
    if (pattern.test(EMAIL)) {
      return true;
    } else {
      this.value = '';
      alert('E-mail incorreto.', $(this));
      return false;
    }
  });
};