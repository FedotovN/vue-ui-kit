import { VNode } from "vue";
interface TargetVNode<T> extends VNode {
  type: T;
}
function getVNodesOfComponent<T>(
  vNodes: VNode[],
  component: T,
): TargetVNode<T>[] {
  return vNodes.filter((vNode) => vNode.type === component) as TargetVNode<T>[];
}

export { getVNodesOfComponent };
