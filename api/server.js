import express from 'express'
import expressgraphq from 'express-graphql'
import myschema from './graphql/myschema.js'
import myroot from './graphql/myroot.js'
import path from 'path'
import cors from 'cors'

const { graphqlHTTP } = expressgraphq;
const app = express()

app.use(cors())
//app.use(bodyParser.json())
//app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(path.resolve(), 'public')))

app.use('/graphql', graphqlHTTP({	
	schema: myschema,
	rootValue: myroot,
	graphiql: true,
}))

var port = process.env.PORT || '3000';
app.set('port', port);
app.listen(port, () => {
	console.log(`listening on port ${port}`)
})
