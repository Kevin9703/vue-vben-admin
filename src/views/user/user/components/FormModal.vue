<template>
  <BasicModal
    @register="register"
    :title="getTitle"
    :canFullscreen="false"
    :width="500"
    :onOk="onSubmit"
    :destroyOnClose="true"
  >
    <div style="margin-top: 10px">所属用户组：</div>
    <a-select v-model:value="userGroupAuth" ref="select" style="width: 100%">
      <a-select-option value="admin">admin</a-select-option>
      <a-select-option value="user">user</a-select-option>
    </a-select>
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
      const userGroup = ref<string>('');

      const [register, { closeModal, setModalProps }] = useModalInner(async (data) => {
        isUpdate.value = !!data?.isUpdate;
        if (unref(isUpdate)) {
          userGroup.value = data.record.userGroup;
        } else {
          userGroup.value = '';
        }
      });

      const { createMessage } = useMessage();

      const onSubmit = () => {
        if (!userGroup.value) {
          createMessage.warning('请选择用户所属用户组');
          return;
        }
        createMessage.success(`编辑成功`);
        closeModal();
      };

      const handleChange = (value: string[]) => {
        console.log(`selected ${value}`);
      };

      const getTitle = computed(() => (!unref(isUpdate) ? '新增用户' : '编辑用户'));

      return {
        register,
        closeModal,
        onSubmit,
        setModalProps: () => {
          setModalProps({ title: 'Modal New Title' });
        },
        userGroup,
        getTitle,
        handleChange,
        isUpdate,
        value: ref(['a1', 'b2']),
      };
    },
  });
</script>
