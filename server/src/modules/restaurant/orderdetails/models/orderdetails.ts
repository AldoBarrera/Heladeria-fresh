'use strict';

import {ModelBase} from '../../../../config/databasemysql';
export default ModelBase.extend({
    tableName: 'orderDetails',
    idAttribute: 'ordd_key',
});
