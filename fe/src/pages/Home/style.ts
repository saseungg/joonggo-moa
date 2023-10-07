import styled from 'styled-components';

import Button from '@components/common/Button';

const GoToTopButton = styled.button`
  position: sticky;

  bottom: 176px;
  float: right;

  width: 56px;
  height: 56px;

  border-radius: 56px;
  background-color: #e5e5e5;

  &: hover {
    background-color: ${({ theme }) => theme.colors.accent.background.primary};
  }

  & > svg {
    fill: ${({ theme }) => theme.colors.accent.text.default};
  }
`;

const NewProductButton = styled(Button)``;

const ProductListLayout = styled.div`
  margin-bottom: 65px;
  min-height: calc(100vh - 48px - 65px);
`;

const ButtonLayout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 15px;
  
  position: sticky;
  bottom: 100px;

  float: right;
`;

export { GoToTopButton, NewProductButton, ProductListLayout, ButtonLayout };
