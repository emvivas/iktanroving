import {Router} from 'express'
import {example, showTables} from './controller.js'

const router = Router()

router.get('/', showTables)

router.get('/:id', example)

router.post('/', example)

router.put('/:id', example)

router.delete('/:id', example)

export default router
