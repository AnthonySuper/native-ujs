var Confirm = {};

Confirm.addConfirmationHandler = function(node) {

};

Confirm.addAllHandlers = function() {
  console.log("Getting all confirm handlers");
  var hr = document.querySelectorAll("[data-confirm]");
  hr = Array.prototype.slice.call(hr);
};

export default Confirm;
