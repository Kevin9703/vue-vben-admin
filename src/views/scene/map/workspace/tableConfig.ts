import { FormSchema } from '/@/components/Table';
import { BasicColumn } from '/@/components/Table/src/types/table';

export const workspaceListColumns: BasicColumn[] = [
  {
    title: 'ID',
    dataIndex: 'id',
    fixed: 'left',
    width: 200,
  },
  {
    title: '工作区',
    dataIndex: 'workspaceName',
    width: 150,
  },
  {
    title: '版本号',
    dataIndex: 'version',
  },
  {
    title: '地图ID',
    dataIndex: 'mapId',
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'workspaceName',
    label: '工作区',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export function getBasicData() {
  const data: any = (() => {
    const arr: any = [];
    for (let index = 0; index < 40; index++) {
      arr.push({
        id: `${index}`,
        workspaceName: 'John Brown' + index,
        version: `1${index}`,
        mapId: `${index + 10}`,
      });
    }
    return arr;
  })();
  return data;
}
