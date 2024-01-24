import { Graph, Shape } from "@antv/x6";
import { registerNode } from "./register-node";
import { defaultDatas } from "./datas";
registerNode();

const container = document.getElementById("canvas")!;
const graph = new Graph({
  container,
  grid: 2,
  panning: true,
  background: {
    color: "#f2f7f9",
  },
  connecting: {
    connector: {
      name: "jumpover",
      args: {
        radius: 2,
      },
    },
    edgeAnchor: "orth",
    allowBlank: false,
    allowNode: ({ targetCell }) => {
      if (targetCell && targetCell.isEdge()) {
        return true;
      }
      return false;
    },
    allowLoop: false,
    allowEdge: true,
    highlight: true,
    allowMulti: "withPort",
    snap: {
      radius: 20,
      anchor: "bbox",
    },

    createEdge() {
      return new Shape.Edge({
        attrs: {
          line: {
            stroke: "#000",
            strokeWidth: 1,
          },
        },
      });
    },
    validateConnection(params) {
      const { sourcePort, targetPort, targetCell } = params;
      if (!targetCell) {
        return false;
      }
      if (targetCell.isEdge()) {
        return true;
      }

      if ((sourcePort || "").startsWith("in_")) {
        return false;
      }

      if ((targetPort || "").startsWith("out_")) {
        return false;
      }

      return true;
    },
  },
  highlighting: {
    magnetAdsorbed: {
      name: "stroke",
      args: {
        padding: 4,
        attrs: {
          "stroke-width": 4,
          stroke: "#38CF20",
        },
      },
    },
  },
});

graph.fromJSON(defaultDatas);

// const node1 = graph.addNode({
//   shape: "diy-rect",
//   x: 300,
//   y: 100,
// });

// const node2 = graph.addNode({
//   shape: "diy-rect",
//   x: 500,
//   y: 200,
// });

graph.on("edge:mouseenter", ({ cell }) => {
  // 可修改连线指向的节点
  cell.addTools([
    {
      name: "vertices",
    },
    {
      name: "segments",
    },
    {
      name: "source-arrowhead",
    },
    {
      name: "target-arrowhead",
    },
  ]);
});

graph.on("cell:mouseleave", ({ cell }) => {
  cell.removeTools();
});

Object.assign(window, {
  graph,
});
