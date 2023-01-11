import {pool} from './database.js'

export const showTables = async (request, response) => {
    try{
    const {title, description} = request.body
    const [rows] = await pool.query('CALL registerMeasurement(@identificator, ?, ?);', [title, description])
    console.log(rows)
    response.json(rows)
    }catch(error){
        return response.status(500).json({message: error.message})
    }
}

export const example = (request, response) => {
    response.json("Hola")
}