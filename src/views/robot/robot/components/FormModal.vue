<template>
  <BasicModal
    @register="register"
    :title="getTitle"
    :canFullscreen="false"
    :width="500"
    :onOk="onSubmit"
    :destroyOnClose="true"
  >
    <div>机器人名称：</div>
    <a-input placeholder="请输入用户组名称" v-model:value="robotName" />
    <div style="margin-top: 10px"
      >所属机器人集群
      <a-select v-model:value="robotGroup" ref="select" style="width: 100%">
        <a-select-option value="1">1</a-select-option>
        <a-select-option value="2">2</a-select-option>
      </a-select></div
    >
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
      const robotName = ref<string>('');
      const robotGroup = ref<string>('');

      const [register, { closeModal, setModalProps }] = useModalInner(async (data) => {
        isUpdate.value = !!data?.isUpdate;
        if (unref(isUpdate)) {
          robotName.value = data.record.robotName;
          robotGroup.value = data.record.robotGroup;
        } else {
          robotName.value = '';
          robotGroup.value = '';
        }
      });

      const { createMessage } = useMessage();

      const onSubmit = () => {
        if (!robotName.value) {
          createMessage.warning('请输入机器人名称');
          return;
        }
        createMessage.success(`${unref(isUpdate) ? '编辑' : '添加'} ${robotName.value} 成功`);
        closeModal();
      };

      const handleChange = (value: string[]) => {
        console.log(`selected ${value}`);
      };

      const getTitle = computed(() => (!unref(isUpdate) ? '新增机器人' : '编辑机器人'));

      return {
        register,
        closeModal,
        onSubmit,
        setModalProps: () => {
          setModalProps({ title: 'Modal New Title' });
        },
        robotName,
        robotGroup,
        getTitle,
        handleChange,
        isUpdate,
        value: ref(['a1', 'b2']),
      };
    },
  });
</script>
