// Incident Auto-Assignment Script using GlideRecord
(function execute(inputs, outputs) {
    var inc = new GlideRecord('incident');
    inc.addQuery('state', '1'); // New incidents
    inc.addNullQuery('assigned_to');
    inc.query();

    while (inc.next()) {
        var groupId = inc.assignment_group;
        if (groupId) {
            var user = new GlideRecord('sys_user');
            user.addQuery('sys_user_grmember.group', groupId);
            user.addQuery('active', true);
            user.setLimit(1); // Just assign the first match
            user.query();

            if (user.next()) {
                inc.assigned_to = user.sys_id;
                inc.update();
                gs.info("Assigned incident " + inc.number + " to " + user.name);
            }
        }
    }
})();
