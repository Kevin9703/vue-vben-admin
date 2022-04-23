<template>
  <BasicModal
    @register="register"
    :title="title"
    :canFullscreen="false"
    :width="500"
    :onOk="onSubmit"
    :destroyOnClose="true"
  >
    <div v-if="!map"><Empty /></div>
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, watchEffect } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { formModalProps } from '../type';
  import { message, Empty } from 'ant-design-vue';
  export default defineComponent({
    components: { BasicModal, Empty },
    props: formModalProps,
    setup(props) {
      const title = ref<string>('');

      const [register, { closeModal, setModalProps }] = useModalInner((data) => {
        title.value = data.record.workspaceName;
        console.log(data);
      });
      const inputWorkspaceName = ref<string>('');

      watchEffect(() => {
        inputWorkspaceName.value = props.currentClickWorkspace?.workspaceName || '';
      });

      const onSubmit = () => {
        if (inputWorkspaceName.value === props.currentClickWorkspace?.workspaceName) {
          closeModal();
          return;
        }
        message.success(
          `${props.currentClickWorkspace?.id ? '编辑' : '添加'} ${inputWorkspaceName.value} 成功`,
        );
        closeModal();
      };

      return {
        title,
        register,
        closeModal,
        onSubmit,
        setModalProps: () => {
          setModalProps({ title: 'Modal New Title' });
        },
        inputWorkspaceName,
      };
    },
  });
</script>
