import React, { useEffect, useState } from 'react'
import MaterialReactTable from 'material-react-table'
import axios from 'axios'

const MyTableComponent = () => {
  const [data, setData] = useState([])
  const [page, setPage] = useState(0)
  const [pageSize, setPageSize] = useState(10) // Cambia este valor según necesites
  const [totalRecords, setTotalRecords] = useState(0)

  const fetchData = async (page, pageSize) => {
    try {
      const response = await axios.get(`https://tu-api.com/endpoint`, {
        params: {
          _page: page + 1, // API podría usar 1-indexado
          _limit: pageSize,
        },
      })
      setData(response.data.records) // Ajusta según la estructura de tu respuesta
      setTotalRecords(response.data.total) // Total de registros, si lo devuelve tu API
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    fetchData(page, pageSize)
  }, [page, pageSize])

  return (
    <MaterialReactTable
      columns={[
        {
          accessorKey: 'nombre', // Cambia esto a tus claves
          header: 'Nombre',
        },
        {
          accessorKey: 'edad',
          header: 'Edad',
        },
        // Agrega más columnas según necesites
      ]}
      data={data}
      state={{
        pagination: {
          pageIndex: page,
          pageSize: pageSize,
        },
      }}
      onPaginationChange={updater => {
        const newPagination =
          typeof updater === 'function'
            ? updater({ pageIndex: page, pageSize })
            : updater
        setPage(newPagination.pageIndex)
        setPageSize(newPagination.pageSize)
      }}
      manualPagination // Indica que la paginación es manual
      totalCount={totalRecords} // Total de registros de la API
    />
  )
}

export default MyTableComponent
