import 'reflect-metadata'
import { useExpressServer } from 'routing-controllers'
import { UserController } from './controller/UserController'
import { app, port } from './server'

useExpressServer(app, {
  controllers: [UserController]
})

console.log('server run on localhost:5000')
app.listen(port)
