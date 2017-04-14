const layout_dict =
  {
    "components":
      [
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
                        "collapse": true,
                        "hidable" : true,
                        "size": {
                          "large": 12,
                        },
                      },
                      {
                        "type": "PanelComponent",
                        "title": "Pracownik",
                        "collapse": true,
                        "hidable" : true,
                        "size": {
                          "large": 12,
                        },
                      },
                      {
                        "type": "PanelComponent",
                        "title": "Pracownik",
                        "collapse": true,
                        "hidable" : true,
                        "size": {
                          "large": 12,
                        },
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
