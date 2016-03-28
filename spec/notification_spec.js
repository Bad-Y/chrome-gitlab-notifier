describe("notification", function() {
    describe("#notify", function() {
        var project;
        var project_event;
        var internal;
        var current_time;
        var message;

        beforeEach(function() {
            // setup
            spyOn(notification, "incNotificationCount");
            spyOn(notification, "createNotification");

            project = {
                name: "MyProject"
            };

            project_event = {
                target_type:  "Issue",
                target_title: "MyIssue",
                action_name:  "opened"
            };

            internal = {
                target_id: 1,
                target_url: "http://example.com/gitlab/gitlabhq/issues/1"
            };

            current_time = new Date();
            message = "some message";

            // exercise
            notification.notify({
                project:       project,
                project_event: project_event,
                internal:      internal,
                current_time:  current_time,
                message:       message
            });
        });

        afterEach(function() {
            localStorage.removeItem("notifiedHistories");
        });

        it("should called incNotificationCount", function() {
            expect(notification.incNotificationCount).toHaveBeenCalled();
        });

        it("should saved 1 notified history", function() {
            expect(config.getNotifiedHistories().length).toEqual(1);

            var notification_id = JSON.stringify({
                target_url: internal.target_url,
                message:    message
            });

            var expected = {
                _id:          util.calcHash(notification_id),
                target_type:  project_event.target_type,
                target_title: project_event.target_title,
                action_name:  project_event.action_name,
                project_name: project.name,
                target_id:    internal.target_id,
                target_url:   internal.target_url,
                message:      message
            };

            var actual = config.getNotifiedHistories()[0];

            // exclude notified_at
            delete actual["notified_at"];

            expect(actual).toEqual(expected);
        });

        it("should called createNotification", function() {
            var notification_id = JSON.stringify({
                target_url: internal.target_url,
                message:    message
            });

            var params = {
                notification_id: notification_id,
                title:           project.name,
                message:         message
            };
            expect(notification.createNotification).toHaveBeenCalledWith(params);
        });
    });
});
