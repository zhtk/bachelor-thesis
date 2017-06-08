const layout_dict =
  {
    "components":
      [
        {
          "type": "PanelComponent",
          "title": "Pozytywnie rozpatrzonych spraw",
          "panel_class" : "green",
          "size": {
            "large": 4,
          },
          "children":
          [
            {
              "type": "Content",
              "provider_type": "dynamic",
              "endpoint": "/api/read/notify-negative",
            },
            {
              "type" : "Icon",
              "class" : "ok",
              "size" : "big"
            }
          ]
        },
        {
          "type": "PanelComponent",
          "title": "Spraw oczekuje na rozpatrzenie...",
          "panel_class" : "yellow",
          "size": {
            "large": 4,
          },
          "children":
            [
              {
                "type": "Content",
                "data_provider": "dynamic",
                "endpoint": "/api/view/taskpending"

              },
              {
                "type" : "Icon",
                "class" : "zoom-in",
                "size" : "big"
              }
            ]
        },
        {
          "type": "PanelComponent",
          "title": "Odrzuconych spraw",
          "panel_class" : "red",
          "size": {
            "large": 4,
          },
          "children":
            [
              {
                "type": "Content",
                "data_provider": "static",
                "endpoint": "/api/view/tasknegative"
              },
              {
                "type" : "Icon",
                "class" : "remove",
                "size" : "big"
              }
            ]
        },
        {
          "type" : "RowComponent",
          "id"  : "row0",
          "children":
            [
              {
                "type": "Heading",
                "text": "Witaj ponownie Jan!"
              }
            ]
        },
        {
          "type" : "RowComponent",
          "id"  : "notify",
          "children":
            [
              {
                "type": "PanelComponent",
                "title": "Powiadomienia",
                "size": {
                  "large": 12,
                },
                "children":
                [
                  {
                    "type": "PanelGroup",
                    "children":
                    [
                      {
                        "type": "PanelComponent",
                        "title": "Pracownik",
                        "collapsible": true,
                        "hidable" : true,
                        "size": {
                          "large": 12,
                        },
                        "children":
                        [
                          {
                            "type": "Content",
                            "data_provider": "dynamic",
                            "endpoint": "/api/view/taskpending"
                          },
                        ]
                      },
                      {
                        "type": "PanelComponent",
                        "title": "Pracownik",
                        "collapsible": true,
                        "hidable" : true,
                        "size": {
                          "large": 12,
                        },
                        "children":
                        [
                          {
                            "type": "Content",
                            "data_provider": "dynamic",
                            "endpoint": "/api/view/taskpending"
                          },
                        ]
                      },
                      {
                        "type": "PanelComponent",
                        "title": "Pracownik",
                        "collapsible": true,
                        "size": {
                          "large": 12,
                        },
                        "children":
                          [
                            {
                              "type": "Content",
                              "data_provider": "dynamic",
                              "endpoint": "/api/view/taskpending"
                            },
                          ]
                      }
                    ]
                }
                ]
              }
            ]
        }
      ]
  }
;
export const HOME = JSON.stringify(layout_dict);
