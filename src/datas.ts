export const defaultDatas = {
  cells: [
    {
      position: {
        x: 300,
        y: 100,
      },
      size: {
        width: 66,
        height: 66,
      },
      visible: true,
      shape: "diy-rect",
      ports: {
        groups: {
          in: {
            markup: [
              {
                tagName: "circle",
                selector: "circle",
              },
            ],
            position: {
              name: "absolute",
            },
            attrs: {
              circle: {
                magnet: true,
                stroke: "#fff",
                strokeWidth: 2,
                fill: "red",
                r: 4,
              },
            },
          },
          out: {
            markup: [
              {
                tagName: "circle",
                selector: "circle",
              },
            ],
            position: {
              name: "absolute",
            },
            attrs: {
              circle: {
                magnet: true,
                stroke: "#fff",
                fill: "#409EFF",
                strokeWidth: 2,
                r: 4,
              },
            },
          },
        },
        items: [
          {
            id: "in_1",
            args: {
              x: "17.86%",
              y: "17%",
            },
            group: "in",
          },
          {
            id: "out_1",
            args: {
              x: "89.29%",
              y: "37%",
            },
            group: "out",
          },
          {
            id: "out_2",
            args: {
              x: "89.29%",
              y: "54%",
            },
            group: "out",
          },
          {
            id: "out_3",
            args: {
              x: "89.29%",
              y: "72%",
            },
            group: "out",
          },
          {
            id: "out_4",
            args: {
              x: "53.57%",
              y: "98.21%",
            },
            group: "out",
          },
        ],
      },
      id: "e932b9f5-d7a4-4451-aff8-ae86a9e43f18",
      zIndex: 1,
    },
    {
      position: {
        x: 500,
        y: 200,
      },
      size: {
        width: 66,
        height: 66,
      },
      visible: true,
      shape: "diy-rect",
      ports: {
        groups: {
          in: {
            markup: [
              {
                tagName: "circle",
                selector: "circle",
              },
            ],
            position: {
              name: "absolute",
            },
            attrs: {
              circle: {
                magnet: true,
                stroke: "#fff",
                strokeWidth: 2,
                fill: "red",
                r: 4,
              },
            },
          },
          out: {
            markup: [
              {
                tagName: "circle",
                selector: "circle",
              },
            ],
            position: {
              name: "absolute",
            },
            attrs: {
              circle: {
                magnet: true,
                stroke: "#fff",
                fill: "#409EFF",
                strokeWidth: 2,
                r: 4,
              },
            },
          },
        },
        items: [
          {
            id: "in_1",
            args: {
              x: "17.86%",
              y: "17%",
            },
            group: "in",
          },
          {
            id: "out_1",
            args: {
              x: "89.29%",
              y: "37%",
            },
            group: "out",
          },
          {
            id: "out_2",
            args: {
              x: "89.29%",
              y: "54%",
            },
            group: "out",
          },
          {
            id: "out_3",
            args: {
              x: "89.29%",
              y: "72%",
            },
            group: "out",
          },
          {
            id: "out_4",
            args: {
              x: "53.57%",
              y: "98.21%",
            },
            group: "out",
          },
        ],
      },
      id: "1f822777-f7af-4c53-9cb5-87351b86785c",
      zIndex: 2,
    },
    {
      shape: "edge",
      attrs: {
        line: {
          stroke: "#000",
          strokeWidth: 1,
        },
      },
      id: "aedd7909-33b3-489c-b7b6-e8b02710a974",
      source: {
        cell: "e932b9f5-d7a4-4451-aff8-ae86a9e43f18",
        port: "out_2",
      },
      target: {
        cell: "1f822777-f7af-4c53-9cb5-87351b86785c",
        port: "in_1",
      },
      zIndex: 3,
      vertices: [
        {
          x: 511.79,
          y: 135.64,
        },
      ],
    },
  ],
};
