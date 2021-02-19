
function currencyConverter(value) {
if(converter.bdt.value <= 0)
window.alert("Enter value Greater than 0");
else
{
   document.getElementById("cad").value=(value/67.1788)
  document.getElementById("myr").value=(value/20.9634)
  document.getElementById("pkr").value=(value/0.532906)
};
};