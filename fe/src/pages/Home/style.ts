import styled from 'styled-components';

import Button from '@components/common/Button';

const GoToTopButton = styled.button`
  position: absolute;

  bottom: 176px;
  right: 24px;

  width: 56px;
  height: 56px;

  border-radius: 56px;
  background-color: #e5e5e5;

  &: hover {
    background-color: ${({ theme }) => theme.colors.accent.background.primary};
  };

  & > svg {
    fill: ${({ theme }) => theme.colors.accent.text.default};
  };
`;

const NewProductButton = styled(Button)`
  position: absolute;

  bottom: 107px;
  right: 24px;
`;

const ProductListLayout = styled.div`
  margin-bottom: 65px;
  min-height: calc(100vh - 48px - 65px);
`;

export { GoToTopButton, NewProductButton, ProductListLayout };
