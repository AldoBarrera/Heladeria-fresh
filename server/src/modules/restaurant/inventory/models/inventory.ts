'use strict';

import {ModelBase} from '../../../../config/databasemysql';
export default ModelBase.extend({
    tableName: 'inventory',
    idAttribute: 'inve_key',
});
