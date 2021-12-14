import Controller from './controller';
import { ExportController } from '../../../decorators';
import AuthController from '../controllers/auth';
import UserController from '../controllers/user';

@ExportController(AuthController)
@ExportController(UserController)
class ApiController extends Controller {
    constructor() {
        super('/api');
    }
}

export default new ApiController().router;
