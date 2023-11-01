import '../Styles/Card.css'


const Card = ({nombre, alias, edad}) => {

  let albumes =[
    {id: 1, nombre: 'Fearless', rating:'5 estrellas'},
    {id: 2, nombre: 'Speak now', rating:'4 estrellas'},
    {id: 3, nombre: 'Reputation', rating:'3 estrellas'},
    {id: 4, nombre: 'Red', rating:'3 estrellas'},
  ]

  let resultado = ''

  console.log('hola')
  if (edad < 12){
    resultado = albumes.find(album => album.id == 1)
  } else if(edad < 15) {
    resultado = albumes.find(album => album.id == 2)
  } else if(edad < 19) {
    resultado = albumes.find(album => album.id == 3)
  } else{
    resultado = albumes.find(album => album.id == 4)
  }


  return (
    <div>
        <h2>Bienvenid@ {nombre},</h2>
        <h3> La comunidad te conocerá como {alias} ! </h3> 
        <h4>A tu edad de {edad} años te recomendamos escuchar: </h4>
        <h1>{resultado.nombre}</h1>

    </div>
  )
}

export default Card