import { Router } from 'express';
import * as usuariosControllers from '../controllers/usuarios';

const router = Router();


router.get('/',       usuariosControllers.getUsuarios );
router.get('/:id',    usuariosControllers.getUsuario );
router.post('/',      usuariosControllers.postUsuario );
router.put('/:id',    usuariosControllers.putUsuario );
router.delete('/:id', usuariosControllers.deleteUsuario );



export default router;