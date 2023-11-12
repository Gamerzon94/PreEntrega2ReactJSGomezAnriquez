import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions } from '@mui/material'
import styles from './ItemListContainer.module.css'

const productos = [
    {
        id: 1,
        title: 'Lápiz JCJenson',
        description: 'El nuevo lápiz con gran durabilidad le sera su compañero perfecto para firmar una simple entrega o incluso los grandes contratos del día a día.',
        imageUrl: './productos/JCJenson_Pen.webp',
        imageDescription : 'Lapiz JCJenson'
    },
    {
        id: 2,
        title: 'Servicio de transporte',
        description: 'Nuestro servicio de transporte no solo se asegura de entregar los productos en cualquier parte del mundo, sino también nos encargamos de llevar cualquier producto que necesite ser enviado.',
        imageUrl: './productos/avion1.jpg',
        imageDescription : 'Avion JCJenson',
    },
    {
        id: 3,
        title: 'Colonias espaciales',
        description: '¿Aburrido de la tierra?, una de las grandes apuestas de JCJenson es la exploración espacial, ponte en contacto para saber sobre próximos viajes a algunas de las colonias humanas en el espacio.',
        imageUrl: './productos/colonias1.png',
        imageDescription : 'Colonias espaciales',
    },
    {
        id: 4,
        title: 'Dron especialista en niños',
        description: 'El nuevo modelo de dron para la familia se encargará de cuidar y ser el mejor amigo de cualquier niño o niña, se encargara de solucionar los problemas y nunca tengan algún problema.',
        imageUrl: './productos/Dron1.webp',
        imageDescription : 'Dron familiar',
    },
    {
        id: 5,
        title: 'Dron de reparaciones',
        description: 'Este dron es especialista en reparaciones, tenerlo cerca te asegura que nunca una puerta en tu casa fallará.',
        imageUrl: './productos/dron2.webp',
        imageDescription : 'Dron repraciones',
    },
    {
        id: 6,
        title: 'Dron de servidumbre',
        description: 'El modelo de dron es el pequeño mayordomo ideal, te servirá a la perfección en tu casa y en cada fiesta tendra el servicio listo para ti y tus invitados.',
        imageUrl: './productos/dron3.webp',
        imageDescription : 'Dron servidumbre',
    },
    {
        id: 7,
        title: 'Dron sin entrenamiento',
        description: 'El dron sin entrenamiento es una perfecta oportunidad para las familias que no pueden permitirse grandes gastos, con el la programación esta en tus manos.',
        imageUrl: './productos/dron5.webp',
        imageDescription : 'Dron sin entrenamiento',
    },
    {
        id: 9,
        title: 'Dron de seguridad',
        description: 'El orgullo de la rama de seguridad de JCJenson, este dron te asegura mantenerte a salvo bajo cualquier situación existente, incluso, hasta las que nunca han ocurrido aun.',
        imageUrl: './productos/dron4.webp',
        imageDescription : 'Dron de seguridad',
    },
    {
        id: 10,
        title: 'Centinela',
        description: '¿la seguridad es lo mas importante y un dron no es suficiente? nuestro nuevo modelo de centinelas se encargan de tener una programación avanzada dedicada únicamente a la seguridad, protegerán lo que le digas a cualquier costo.',
        imageUrl: './productos/sentinela.webp',
        imageDescription : 'Centinela',
    }
    ]

export const ItemListContainer = (props) => {
    return (
        <>
            <Typography variant="subtitle1">
                {props.message}
            </Typography>
            <div className={styles.ItemListContainerBody}>
                {productos.map((producto) => (
                    <Card key={producto.id} sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="140"
                            image={producto.imageUrl}
                            alt={producto.imageDescription}
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {producto.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {producto.description}
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                            Comprar
                            </Button>
                        </CardActions>
                    </Card>
                ))}
            </div>
        </>
    )
}