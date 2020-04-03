import React from 'react'

export default function HeaderButton ({name, src}) {
    return(
    <div className = { name }>
      <img alt = { name } src = { src }/>
    </div>)
}
