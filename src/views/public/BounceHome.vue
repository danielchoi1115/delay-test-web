<template>
  <!--부모에서 정의한 '왼쪽 버튼'이 위치합니다 -->
  <slot name="ball"></slot>

  <!--부모에서 정의한 '오른쪽 버튼'이 위치합니다 -->
  <slot name="floor"></slot>

  <slot name="slider"></slot>
</template>

<script>
export default {
  name: 'BounceHome',
}
</script>
