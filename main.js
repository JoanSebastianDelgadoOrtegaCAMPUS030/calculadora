
function calcular() {
  const costoMateriales = parseFloat(document.getElementById("costo-materiales").value);
  const horasManoObra = parseFloat(document.getElementById("horas-mano-obra").value);
  const costoManoObra = parseFloat(document.getElementById("costo-mano-obra").value);
  
  const costoProduccion = costoMateriales + (horasManoObra * costoManoObra);
  const precioVenta = costoProduccion * 1.2;
  
  document.getElementById("costo-produccion").textContent = costoProduccion.toFixed(2);
  document.getElementById("precio-venta").textContent = precioVenta.toFixed(2);
}