define(['angular'], function(angular) {

    var config = angular.module('app-config', []);
    config
        .constant('APP_FLAGS', {
            'showSidebar' : true,
            'showSearch' : true,
            'enableToggle': true,
            'defaultView' : 'expanded',
            'compact' : true,
            'expanded' : true,
            'features' : true,
            'isWeb' : true
        })
        .constant('SERVICE_LOC', {
            'aboutURL' : '/portal/web/session.json',
            'sessionInfo' : '/portal/web/session.json',
            'sidebarInfo' : '/web/staticFeeds/sidebar.json',
            'featuresInfo' : '/web/staticFeeds/features.json',
            'newstuffInfo': '/web/staticFeeds/new-stuff.json',
            'context'     : '/portal/',
            'base'        : '/portal/web/',
            'layout'      : 'layoutDoc?tab=UW Bucky Home',
            'layoutTab' : 'UW Bucky Home',
            'marketplace' : {
                'base' : 'marketplace/',
                'entry' : 'entry/',
                'entries' : 'entries.json'
            },
            'notificationsURL' : '/web/staticFeeds/notifications.json',
            'groupURL' : '/portal/api/groups',
            'kvURL' : '/storage/'
        })
        .constant('NAMES', {
            'title' : 'MyUW',
            'ariaLabelTitle' : 'My U W',
            'crest' : 'img/uwcrest_web_sm.png',
            'crestalt' : 'UW Crest',
            'sublogo' : ''
        })
        .constant('SEARCH',{
            
        })
        .constant('NOTIFICATION', {
            'enabled' : true,
            'groupFiltering' : true,
            'notificationFullURL' : 'notifications'
        })
        .constant('MISC_URLS',{
            'feedbackURL' : '/portal/p/feedback',
            'back2ClassicURL' : '/portal/Login?profile=default',
            'whatsNewURL' : 'https://kb.wisc.edu/myuw/page.php?id=48181',
            'helpdeskURL' : 'https://kb.wisc.edu/helpdesk/',
            'webSearchURL' : 'http://www.wisc.edu/search/?q=',
            'webSearchDomain' : "wisc.edu",
            'directorySearchURL' : 'http://www.wisc.edu/directories/?q=',
            'kbSearchURL' : 'https://kb.wisc.edu/search.php?q=',
            'eventsSearchURL' : 'https://today.wisc.edu/events/search?term=',
            'loginURL' : '/portal/Login?profile=bucky',
            'logoutURL' : '/portal/Logout'
        })
        .constant('APP_BETA_FEATURES', [
          {
            "id" : "sidebarQuicklinks",
            "title" : "Sidebar Quicklinks",
            "description" : "Shows quicklinks to various campus sites in sidebar"
          },
          {
            "id" : "webPortletRender",
            "title" : "/web portlet rendering",
            "description" : "Renders portlets via /web's exclusive page, but only as launched from compact-mode widgets"
          },
          {
            "id" : "myProfileOption",
            "title" : "My Profile Option in Menu",
            "description" : "Enable/Disable the option to jump to my profile in the sidebar"
          },
          {
            "id" : "showKeywordsInMarketplace",
            "title" : "Show Keywords in Marketplace",
            "description" : "Enable/Disable keywords showing up in marketplace details"
          },
          {
            "id" : "typeaheadSearch",
            "title" : "Enable typeahead in the portlet search bar",
            "description" : "Enable/Disable the typeahead in the portlet search bar (I think this is broken)"
          },
          {
            "id" : "exampleWidgets",
            "title" : "Example Widgets",
            "description" : "Show the My Courses, Email, and Calendar example widgets"
          },
          {
            "id" : "showFilterOption",
            "title" : "Show Filter Option on Home",
            "description" : "Enables a filter on home to filter ones content down to what want"
          }
        ]);

    return config;

});
