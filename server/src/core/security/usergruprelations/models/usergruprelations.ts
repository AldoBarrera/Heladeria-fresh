'use strict';

import {ModelBase} from '../../../../config/databasemysql';
export default ModelBase.extend({
    tableName: 'userGrupRelations',
    idAttribute: 'usgr_key',
});
