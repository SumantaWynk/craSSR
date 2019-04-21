import path from 'path';
import fs from 'fs';
import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
import { matchRoutes } from 'react-router-config';
import Routes from '../src/Routes';


const PORT = process.env.PORT || 8888;
const app = express();

const router = express.Router()

const serverRenderer = (req, res, next) => {
    fs.readFile(path.resolve('./build/index.html'), 'utf8', (err, data) => {

        if (err) {
            console.error(err)
            return res.status(500).send('An error occurred')
        }

        const store = createStore();
        const promises = matchRoutes(Routes, req.path).map(({ route }) => {
            return route.loadData ? route.loadData(store) : null;
        })

        Promise.all(promises).then(() => {
            return res.send(
                renderer(data, req, store)
            )
        })
    })
}


router.get('/', serverRenderer)

router.get('/users', serverRenderer)

router.use(
    express.static('build')
)

// tell the app to use the above rules
app.use(router)

// app.use(express.static('./build'))
app.listen(PORT, () => {
    console.log(`SSR running on port ${PORT}`)
})