import React from 'react'

export const DetailPage = (props) => {
  return (
    <div>DetailPage 路线ID：{props.match.params.touristRouteId}</div>
  )
}
