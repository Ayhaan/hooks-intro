import React from 'react'

export default function Article({donnee}) {
    return (
        <div>
          <h1>Marque : {donnee.marque}, model :{donnee.model}</h1>  
        </div>
    )
}
