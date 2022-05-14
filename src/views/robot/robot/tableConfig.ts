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
    title: '机器人名称',
    dataIndex: 'robotName',
    width: 150,
  },
  {
    title: '所属机器人集群',
    dataIndex: 'robotGroup',
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'robotName',
    label: '机器人名称',
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
        robotName: 'John Brown' + index,
        robotGroup: `1${index}`,
      });
    }
    return arr;
  })();
  return data;
}
