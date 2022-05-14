<template>
  <BasicModal
    @register="register"
    :title="getTitle"
    :canFullscreen="false"
    :width="500"
    :onOk="onSubmit"
    :destroyOnClose="true"
  >
    <div>用户组名称：</div>
    <a-input placeholder="请输入用户组名称" v-model:value="inputUserGroupName" />
    <div style="margin-top: 10px">当前用户组权限：</div>
    <a-select v-model:value="userGroupAuth" ref="select" style="width: 100%">
      <a-select-option value="admin">admin</a-select-option>
      <a-select-option value="user">user</a-select-option>
    </a-select>
    <div style="margin-top: 10px" v-if="isUpdate"
      >当前用户组用户
      <a-select
        v-model:value="value"
        mode="multiple"
        style="width: 100%"
        placeholder="Please select"
        :options="[...Array(25)].map((_, i) => ({ value: (i + 10).toString(36) + (i + 1) }))"
        @change="handleChange"
    /></div>
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, unref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { formModalProps } from '../type';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { Select } from 'ant-design-vue';
  export default defineComponent({
    components: { BasicModal, [Select.name]: Select },
    props: formModalProps,
    setup() {
      const isUpdate = ref(true);
      const inputUserGroupName = ref<string>('');
      const userGroupAuth = ref<string>('');

      const [register, { closeModal, setModalProps }] = useModalInner(async (data) => {
        isUpdate.value = !!data?.isUpdate;
        if (unref(isUpdate)) {
          inputUserGroupName.value = data.record.userGroup;
          userGroupAuth.value = data.record.userGroupAuth;
        } else {
          inputUserGroupName.value = '';
        }
      });

      const { createMessage } = useMessage();

      const onSubmit = () => {
        if (!inputUserGroupName.value) {
          createMessage.warning('请输入用户组名称');
          return;
        }
        createMessage.success(
          `${unref(isUpdate) ? '编辑' : '添加'} ${inputUserGroupName.value} 成功`,
        );
        closeModal();
      };

      const handleChange = (value: string[]) => {
        console.log(`selected ${value}`);
      };

      const getTitle = computed(() => (!unref(isUpdate) ? '新增用户组' : '编辑用户组'));

      return {
        register,
        closeModal,
        onSubmit,
        setModalProps: () => {
          setModalProps({ title: 'Modal New Title' });
        },
        inputUserGroupName,
        userGroupAuth,
        getTitle,
        handleChange,
        isUpdate,
        value: ref(['a1', 'b2']),
      };
    },
  });
</script>
