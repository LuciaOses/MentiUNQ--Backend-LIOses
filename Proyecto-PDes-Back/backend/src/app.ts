import { Server } from '../models/server'
//import { connect } from './database'
import dotenv from 'dotenv';

dotenv.config();
console.log("HOLIS funciono!!");

async function main() {
    const server = new Server();
    await server.listen();
}

main();