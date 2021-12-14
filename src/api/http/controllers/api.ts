import Controller from './controller';
import { ExportController } from '../../../decorators';
import AuthController from '../controllers/auth';

@ExportController(AuthController)
class ApiController extends Controller {
    constructor() {
        super('/api');
    }
}

export default new ApiController().router;
