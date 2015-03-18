Ext.define('RevivalxSenchaTodolist.model.Task', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            { name: 'tasId', type: 'int' },
            { name: 'name', type: 'string' },
            { name: 'description', type: 'string' },
            { name: 'dateCreated', type: 'string' },
            { name: 'dateUpdated', type: 'string' }

        ]
    }
});
