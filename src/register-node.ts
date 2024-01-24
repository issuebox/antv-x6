import { Graph } from "@antv/x6";

const groups = {
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
};

export const registerNode = () => {
  Graph.registerNode(
    "diy-rect",
    {
      inherit: "rect",
      width: 66,
      height: 66,
      attrs: {
        body: {
          strokeWidth: 1,
          stroke: "#5F95FF",
          fill: "#EFF4FF",
        },
        text: {
          fontSize: 12,
          fill: "#262626",
        },
      },
      ports: {
        groups,
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
    },
    true
  );
};
