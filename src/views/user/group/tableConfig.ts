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
    title: '用户组',
    dataIndex: 'userGroup',
    width: 150,
  },
  {
    title: '用户数',
    dataIndex: 'userCount',
  },
  {
    title: '用户组群权限',
    dataIndex: 'userGroupAuth',
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'userGroup',
    label: '用户组',
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
        userGroup: 'John Brown' + index,
        userCount: `1${index}`,
        userGroupAuth: `admin`,
      });
    }
    return arr;
  })();
  return data;
}
