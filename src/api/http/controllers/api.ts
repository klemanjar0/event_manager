import Controller from './controller';
import { ExportController } from '../../../decorators';


class ApiController extends Controller {
    constructor() {
        super('/api');
    }
}

export default new ApiController().router;
