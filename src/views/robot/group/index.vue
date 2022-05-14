<template>
  <div>
    <FormModal @register="modalRegister" />
    <MapModal @register="mapModalRegister" />
    <div>
      <BasicTable @register="registerTable" :searchInfo="searchInfo">
        <template #toolbar>
          <a-button type="primary" @click="handleCreate">新增用户组</a-button>
        </template>
        <template #action="{ record }">
          <TableAction
            :actions="[
              {
                icon: 'clarity:note-edit-line',
                tooltip: '编辑用户组',
                onClick: handleEdit.bind(null, record),
              },
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                tooltip: '删除',
                popConfirm: {
                  title: '是否确认删除',
                  confirm: handleDelete.bind(null, record),
                },
              },
            ]"
          />
        </template>
      </BasicTable>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent, reactive } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { workspaceListColumns, getBasicData, searchFormSchema } from './tableConfig';
  import { FormModal } from './components/index';
  import { useModal } from '/@/components/Modal';

  export default defineComponent({
    components: { BasicTable, FormModal, TableAction },
    setup() {
      const [modalRegister, { openModal: openModal }] = useModal();
      const searchInfo = reactive<Recordable>({});

      const [registerTable, { reload, updateTableDataRecord }] = useTable({
        title: '用户组',
        // api: getAccountList,
        dataSource: getBasicData(),
        rowKey: 'id',
        columns: workspaceListColumns,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
          autoSubmitOnEnter: true,
        },
        showIndexColumn: false,
        canResize: true,
        useSearchForm: true,
        bordered: true,
        handleSearchInfoFn(info) {
          console.log('handleSearchInfoFn', info);
          return info;
        },
        actionColumn: {
          width: 120,
          title: '操作',
          dataIndex: 'action',
          slots: { customRender: 'action' },
        },
      });

      function handleCreate() {
        openModal(true, {
          isUpdate: false,
        });
      }

      function handleEdit(record: Recordable) {
        console.log(record);
        openModal(true, {
          record,
          isUpdate: true,
        });
      }

      function handleDelete(record: Recordable) {
        console.log(record);
      }

      return {
        columns: workspaceListColumns,
        modalRegister,
        handleCreate,
        handleEdit,
        handleDelete,
        registerTable,
        reload,
        updateTableDataRecord,
        searchInfo,
      };
    },
  });
</script>
