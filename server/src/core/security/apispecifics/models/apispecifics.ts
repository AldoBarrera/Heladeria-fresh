'use strict';

import {ModelBase} from '../../../../config/databasemysql';
export default ModelBase.extend({
    tableName: 'apiSpecifics',
    idAttribute: 'apis_key',
});
