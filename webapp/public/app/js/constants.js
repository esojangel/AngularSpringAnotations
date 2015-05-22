/**=========================================================
 * Module: constants.js
 * Define constants to inject across the application
 =========================================================*/
(function(angular){
var pathRaiz = "public/";
angular.module('app.constants', [])
  .constant('APP_COLORS', {
    'primary':                '#5d9cec',
    'success':                '#27c24c',
    'info':                   '#23b7e5',
    'warning':                '#ff902b',
    'danger':                 '#f05050',
    'inverse':                '#131e26',
    'green':                  '#37bc9b',
    'pink':                   '#f532e5',
    'purple':                 '#7266ba',
    'dark':                   '#3a3f51',
    'yellow':                 '#fad732',
    'gray-darker':            '#232735',
    'gray-dark':              '#3a3f51',
    'gray':                   '#dde6e9',
    'gray-light':             '#e4eaec',
    'gray-lighter':           '#edf1f2'
  })
  .constant('APP_MEDIAQUERY', {
    'desktopLG':             1200,
    'desktop':                992,
    'tablet':                 768,
    'mobile':                 480
  })
  .constant('APP_REQUIRES', {
    // jQuery based and standalone scripts
    scripts: {
      'whirl':              [pathRaiz+'vendor/whirl/dist/whirl.css'],
      'classyloader':       [pathRaiz+'vendor/jquery-classyloader/js/jquery.classyloader.min.js'],
      'animo':              [pathRaiz+'vendor/animo.js/animo.js'],
      'fastclick':          [pathRaiz+'vendor/fastclick/lib/fastclick.js'],
      'modernizr':          [pathRaiz+'vendor/modernizr/modernizr.js'],
      'animate':            [pathRaiz+'vendor/animate.css/animate.min.css'],
      'icons':              [pathRaiz+'vendor/skycons/skycons.js',
                             pathRaiz+'vendor/fontawesome/css/font-awesome.min.css',
                             pathRaiz+'vendor/simple-line-icons/css/simple-line-icons.css',
                             pathRaiz+'vendor/weather-icons/css/weather-icons.min.css'],
      'sparklines':         [pathRaiz+'app/vendor/sparklines/jquery.sparkline.min.js'],
      'slider':             [pathRaiz+'vendor/seiyria-bootstrap-slider/dist/bootstrap-slider.min.js',
                             pathRaiz+'vendor/seiyria-bootstrap-slider/dist/css/bootstrap-slider.min.css'],
      'wysiwyg':            [pathRaiz+'vendor/bootstrap-wysiwyg/bootstrap-wysiwyg.js',
                             pathRaiz+'vendor/bootstrap-wysiwyg/external/jquery.hotkeys.js'],
      'slimscroll':         [pathRaiz+'vendor/slimScroll/jquery.slimscroll.min.js'],
      'screenfull':         [pathRaiz+'vendor/screenfull/dist/screenfull.min.js'],
      'vector-map':         [pathRaiz+'vendor/ika.jvectormap/jquery-jvectormap-1.2.2.min.js',
                             pathRaiz+'vendor/ika.jvectormap/jquery-jvectormap-world-mill-en.js',
                             pathRaiz+'vendor/ika.jvectormap/jquery-jvectormap-us-mill-en.js',
                             pathRaiz+'vendor/ika.jvectormap/jquery-jvectormap-1.2.2.css'],
      'loadGoogleMapsJS':   [pathRaiz+'app/vendor/gmap/load-google-maps.js'],
      'google-map':         [pathRaiz+'vendor/jQuery-gMap/jquery.gmap.min.js'],
      'flot-chart':         [pathRaiz+'vendor/Flot/jquery.flot.js'],
      'flot-chart-plugins': [pathRaiz+'vendor/flot.tooltip/js/jquery.flot.tooltip.min.js',
                             pathRaiz+'vendor/Flot/jquery.flot.resize.js',
                             pathRaiz+'vendor/Flot/jquery.flot.pie.js',
                             pathRaiz+'vendor/Flot/jquery.flot.time.js',
                             pathRaiz+'vendor/Flot/jquery.flot.categories.js',
                             pathRaiz+'vendor/flot-spline/js/jquery.flot.spline.min.js'],
                            // jquery core and widgets
      'jquery-ui':          [pathRaiz+'vendor/jquery-ui/ui/core.js',
                             pathRaiz+'vendor/jquery-ui/ui/widget.js'],
                             // loads only jquery required modules and touch support
      'jquery-ui-widgets':  [pathRaiz+'vendor/jquery-ui/ui/core.js',
                             pathRaiz+'vendor/jquery-ui/ui/widget.js',
                             pathRaiz+'vendor/jquery-ui/ui/mouse.js',
                             pathRaiz+'vendor/jquery-ui/ui/draggable.js',
                             pathRaiz+'vendor/jquery-ui/ui/droppable.js',
                             pathRaiz+'vendor/jquery-ui/ui/sortable.js',
                             pathRaiz+'vendor/jqueryui-touch-punch/jquery.ui.touch-punch.min.js'],
      'moment' :            [pathRaiz+'vendor/moment/min/moment-with-locales.min.js'],
      'inputmask':          [pathRaiz+'vendor/jquery.inputmask/dist/jquery.inputmask.bundle.min.js'],
      'flatdoc':            [pathRaiz+'vendor/flatdoc/flatdoc.js'],
      'codemirror':         [pathRaiz+'vendor/codemirror/lib/codemirror.js',
                             pathRaiz+'vendor/codemirror/lib/codemirror.css'],
      'codemirror-plugins':  [pathRaiz+'vendor/codemirror/addon/mode/overlay.js',
                              pathRaiz+'vendor/codemirror/mode/markdown/markdown.js',
                              pathRaiz+'vendor/codemirror/mode/xml/xml.js',
                              pathRaiz+'vendor/codemirror/mode/gfm/gfm.js',
                              pathRaiz+'vendor/marked/lib/marked.js'],
      // modes for common web files
      'codemirror-modes-web': [pathRaiz+'vendor/codemirror/mode/javascript/javascript.js',
                               pathRaiz+'vendor/codemirror/mode/xml/xml.js',
                               pathRaiz+'vendor/codemirror/mode/htmlmixed/htmlmixed.js',
                               pathRaiz+'vendor/codemirror/mode/css/css.js'],
      'taginput' :          [pathRaiz+'vendor/bootstrap-tagsinput/dist/bootstrap-tagsinput.css',
                             pathRaiz+'vendor/bootstrap-tagsinput/dist/bootstrap-tagsinput.min.js'],
      'filestyle':          [pathRaiz+'vendor/bootstrap-filestyle/src/bootstrap-filestyle.js'],
      'parsley':            [pathRaiz+'vendor/parsleyjs/dist/parsley.min.js'],
      'datatables':         [pathRaiz+'vendor/datatables/media/js/jquery.dataTables.min.js',
                             pathRaiz+'app/vendor/datatable-bootstrap/css/dataTables.bootstrap.css'],
      'datatables-pugins':  [pathRaiz+'app/vendor/datatable-bootstrap/js/dataTables.bootstrap.js',
                             pathRaiz+'app/vendor/datatable-bootstrap/js/dataTables.bootstrapPagination.js',
                             pathRaiz+'vendor/datatables-colvis/js/dataTables.colVis.js',
                             pathRaiz+'vendor/datatables-colvis/css/dataTables.colVis.css'],
      'fullcalendar':       [pathRaiz+'vendor/fullcalendar/dist/fullcalendar.min.js',
                             pathRaiz+'vendor/fullcalendar/dist/fullcalendar.css'],
      'gcal':               [pathRaiz+'vendor/fullcalendar/dist/gcal.js'],
      'nestable':           [pathRaiz+'vendor/nestable/jquery.nestable.js']
    },
    // Angular based script (use the right module name)
    modules: [
      {name: 'toaster',                   files: [pathRaiz+'vendor/angularjs-toaster/toaster.js',
                                                 pathRaiz+'vendor/angularjs-toaster/toaster.css']},
      {name: 'localytics.directives',     files: [pathRaiz+'vendor/chosen_v1.2.0/chosen.jquery.min.js',
                                                 pathRaiz+'vendor/chosen_v1.2.0/chosen.min.css',
                                                 pathRaiz+'vendor/angular-chosen-localytics/chosen.js']},
      {name: 'ngDialog',                  files: [pathRaiz+'vendor/ngDialog/js/ngDialog.min.js',
                                                 pathRaiz+'vendor/ngDialog/css/ngDialog.min.css',
                                                 pathRaiz+'vendor/ngDialog/css/ngDialog-theme-default.min.css'] },
      {name: 'ngWig',                     files: [pathRaiz+'vendor/ngWig/dist/ng-wig.min.js'] },
      {name: 'ngTable',                   files: [pathRaiz+'vendor/ng-table/ng-table.min.js',
                                                  pathRaiz+'vendor/ng-table/ng-table.min.css']},
      {name: 'ngTableExport',             files: [pathRaiz+'vendor/ng-table-export/ng-table-export.js']},
      {name: 'angularBootstrapNavTree',   files: [pathRaiz+'vendor/angular-bootstrap-nav-tree/dist/abn_tree_directive.js',
                                                  pathRaiz+'vendor/angular-bootstrap-nav-tree/dist/abn_tree.css']},
      {name: 'htmlSortable',              files: [pathRaiz+'vendor/html.sortable/dist/html.sortable.js',
                                                  pathRaiz+'vendor/html.sortable/dist/html.sortable.angular.js']},
      {name: 'xeditable',                 files: [pathRaiz+'vendor/angular-xeditable/dist/js/xeditable.js',
                                                  pathRaiz+'vendor/angular-xeditable/dist/css/xeditable.css']},
      {name: 'angularFileUpload',         files: [pathRaiz+'vendor/angular-file-upload/angular-file-upload.js']},
      {name: 'ngImgCrop',                 files: [pathRaiz+'vendor/ng-img-crop/compile/unminified/ng-img-crop.js',
                                                  pathRaiz+'vendor/ng-img-crop/compile/unminified/ng-img-crop.css']},
      {name: 'ui.select',                 files: [pathRaiz+'vendor/angular-ui-select/dist/select.js',
                                                  pathRaiz+'vendor/angular-ui-select/dist/select.css']},
      {name: 'ui.codemirror',             files: [pathRaiz+'vendor/angular-ui-codemirror/ui-codemirror.js']},
      {name: 'angular-carousel',          files: [pathRaiz+'vendor/angular-carousel/dist/angular-carousel.css',
                                                  pathRaiz+'vendor/angular-carousel/dist/angular-carousel.js']},
      {name: 'app.tareas',                files: [pathRaiz+'app/js/modules/tareas.js']}

    ]

  });

})(angular);
