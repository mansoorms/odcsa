/**
 * 
 */
constants = {
    SELECT_USERROLES: 'SELECT id, name from  USER_ROLE',
    
    header: {
        json: 'application/json; charset=utf-8;'
    },

    http: {
        ok:         {cod:200, msg:'OK'},
        noContent:  {cod:204, msg:'No Content'},
        notFound:   {cod:404, msg:'Not Found'},
        internalError:   {cod:500, msg:'Erro interno'}
    },

    error: {
        generic: {error:'Something went wrong'}
    }

}

module.exports = constants;
