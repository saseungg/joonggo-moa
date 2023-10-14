import styled from 'styled-components';

const ClosePopupButton = styled.button`
  width: 100%;
  padding: 8px 0;

  border: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
  border-radius: 10px;

  color: ${({ theme }) => theme.colors.neutral.text.default};
`;

const DeletePostButton = styled.button`
  width: 100%;
  padding: 8px 0;

  border: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
  border-radius: 10px;

  color: ${({ theme }) => theme.colors.system.warning};
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;

  width: 100%;
  max-width: 440px;
  height: 48px;
  padding: 16px;

  left: 0;
`;

export { ClosePopupButton, DeletePostButton, Header };
