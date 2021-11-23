'use strict';

import {ModelBase} from '../../../../config/databasemysql';
export default ModelBase.extend({
    tableName: 'order',
    idAttribute: 'ordn_key',
});
