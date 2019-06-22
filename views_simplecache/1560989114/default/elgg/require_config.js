// <script>
require = {
    "baseUrl": "http://localhost/elgg-2.3.9/cache/1557817625/default/",
    "paths": {
        "jquery.treeview": [
            "http://localhost/elgg-2.3.9/mod/pages/vendors/jquery-treeview/jquery.treeview.min"
        ]
    },
    "shim": {
        "jquery.ui.autocomplete.html": {
            "deps": [
                "jquery-ui"
            ]
        },
        "ckeditor": {
            "deps": [
                "elgg/ckeditor/set-basepath"
            ],
            "exports": "CKEDITOR"
        },
        "jquery.ckeditor": {
            "deps": [
                "jquery",
                "ckeditor"
            ],
            "exports": "jQuery.fn.ckeditor"
        },
        "jquery.treeview": {
            "deps": [
                "jquery"
            ],
            "exports": "jQuery.fn.treeview"
        }
    },
    "waitSeconds": 20
};

