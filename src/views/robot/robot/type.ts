export interface WorkspaceItem {
  id: number;
  workspaceName: string;
  version: number;
  mapId: number;
  map: string;
}

export interface FormModalProps {
  currentClickWorkspace: WorkspaceItem;
}

export const formModalProps = {
  currentClickWorkspace: { type: Object as PropType<WorkspaceItem> },
};
