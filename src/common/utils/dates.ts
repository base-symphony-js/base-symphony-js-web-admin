export const getLegalDate = () => {
  const today = new Date()
  const legalDate = new Date(
    today.getUTCFullYear() - 18,
    today.getUTCMonth(),
    today.getUTCDate(),
  )
  return legalDate
}

export const formatDate = fechaISO => {
  const opcionesFecha = { year: 'numeric', month: 'long', day: 'numeric' }
  const opcionesHora = { hour: '2-digit', minute: '2-digit', second: '2-digit' }

  const fecha = new Date(fechaISO)
  const fechaFormateada =
    fecha.toLocaleDateString('es', opcionesFecha) +
    ' ' +
    fecha.toLocaleTimeString('es', opcionesHora)

  return fechaFormateada
}
