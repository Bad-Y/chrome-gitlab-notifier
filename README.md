# Chrome Gitlab Notifier [![Build Status](https://travis-ci.org/sue445/chrome-gitlab-notifier.png)](https://travis-ci.org/sue445/chrome-gitlab-notifier) [![Code Climate](https://codeclimate.com/github/sue445/chrome-gitlab-notifier.png)](https://codeclimate.com/github/sue445/chrome-gitlab-notifier) [![Stories in Ready](https://badge.waffle.io/sue445/chrome-gitlab-notifier.png?label=ready)](https://waffle.io/sue445/chrome-gitlab-notifier)

Notify Gitlab Project events (Commit, Issue, MergeRequest and Milestone)

## Require
* Gitlab >= 5.3.0
 * but 6.1.0 is not supported

## Usage
1. Install this extension
2. Open extension option
3. Input these
  * Gitlab Path
  * Gitlab API Path
  * Private token
     * Gitlab -> Edit Profile -> Account
4. Refresh Repository List
5. Check events
6. Save
7. Wait a minute

## Upgrading
Open extension option -> Clear cache

## Screenshots
### Option
![Option](https://f.cloud.github.com/assets/608755/2360199/2d6eb9b2-a621-11e3-8985-fc8959811236.png)

### Notification
![Notification](https://f.cloud.github.com/assets/608755/1415698/52d15d24-3f18-11e3-8a77-9d5b6fbece3e.png)
![Notification](http://cdn-ak.f.st-hatena.com/images/fotolife/s/sue445/20131126/20131126230723.png)

### Popup
![Popup](https://f.cloud.github.com/assets/608755/2323269/84543b94-a3ba-11e3-9e72-67c6ff9a3dc9.png)

## Dependency Gitlab API
* `GET /projects`
  * https://github.com/gitlabhq/gitlabhq/blob/master/doc/api/projects.md#list-projects
* `GET /projects/:id/events`
  * https://github.com/gitlabhq/gitlabhq/blob/master/doc/api/projects.md#get-project-events
* `GET /projects/:id/events`
  * https://github.com/gitlabhq/gitlabhq/blob/master/doc/api/issues.md#single-issue
* `GET /projects/:id/merge_request/:merge_request_id`
  * https://github.com/gitlabhq/gitlabhq/blob/master/doc/api/merge_requests.md#get-single-mr
* `GET /projects/:id/milestones/:milestone_id`
  * https://github.com/gitlabhq/gitlabhq/blob/master/doc/api/milestones.md#get-single-milestone

## Test Suite
http://sue445.github.io/chrome-gitlab-notifier/spec/SpecRunner.html

[![endorse](httpgs://api.coderwall.com/sue445/endorsecount.png)](https://coderwall.com/sue445)