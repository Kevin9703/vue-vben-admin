<template>
  <BasicModal
    @register="register"
    :title="getTitle"
    :canFullscreen="false"
    :width="500"
    :onOk="onSubmit"
    :destroyOnClose="true"
  >
    <div>工作区名称：</div>
    <a-input placeholder="请输入工作区名称" v-model:value="inputWorkspaceName" />
    <div style="margin-top: 10px"
      >当前工作区地图ID: {{ mapId
      }}<a-button type="primary" style="margin-left: 10px">导入地图</a-button></div
    >
    <div style="width:'100%;height:100px;border:1px solid gray;margin-top:10px"></div>
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, unref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { formModalProps } from '../type';
  import { useMessage } from '/@/hooks/web/useMessage';
  export default defineComponent({
    components: { BasicModal },
    props: formModalProps,
    setup() {
      const isUpdate = ref(true);
      const inputWorkspaceName = ref<string>('');
      const mapId = ref<string>('');

      const [register, { closeModal, setModalProps }] = useModalInner(async (data) => {
        isUpdate.value = !!data?.isUpdate;
        if (unref(isUpdate)) {
          inputWorkspaceName.value = data.record.workspaceName;
          mapId.value = data.record.mapId;
        } else {
          inputWorkspaceName.value = '';
        }
      });

      const { createMessage } = useMessage();

      const onSubmit = () => {
        if (!inputWorkspaceName.value) {
          createMessage.warning('请输入工作区名称');
          return;
        }
        createMessage.success(
          `${unref(isUpdate) ? '编辑' : '添加'} ${inputWorkspaceName.value} 成功`,
        );
        closeModal();
      };

      const getTitle = computed(() => (!unref(isUpdate) ? '新增工作区' : '编辑工作区'));

      return {
        register,
        closeModal,
        onSubmit,
        setModalProps: () => {
          setModalProps({ title: 'Modal New Title' });
        },
        inputWorkspaceName,
        mapId,
        getTitle,
      };
    },
  });
</script>
