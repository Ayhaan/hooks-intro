import React from 'react'

export default function Personnage({ayhan, rename}) {
    return (
        <div>
            <h1>Je m'appelle {ayhan.nom} {ayhan.prenom}, j'ai {ayhan.age} ans et j'habite dans la commune de {ayhan.commune}</h1>
            <button onClick={rename}>Changer</button>
        </div>
    )
}
