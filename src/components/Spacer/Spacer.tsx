import styled from 'styled-components';

type Axis = 'horizontal' | 'vertical' | undefined;

function getHeight(axis: Axis, size: number) {
  return axis === 'horizontal' ? 1 : size;
}
function getWidth(axis: Axis, size: number) {
  return axis === 'vertical' ? 1 : size;
}

const Spacer = styled.span<{ $axis?: Axis; $size: number }>`
  display: block;
  width: ${(props) => getWidth(props.$axis, props.$size)}px;
  min-width: ${(props) => getWidth(props.$axis, props.$size)}px;
  height: ${(props) => getHeight(props.$axis, props.$size)}px;
  min-height: ${(props) => getHeight(props.$axis, props.$size)}px;
`;

export { Spacer };
