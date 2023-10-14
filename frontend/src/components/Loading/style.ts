import styled from 'styled-components';

const LoadingText = styled.span`
  font-size: ${({ theme }) => theme.fonts.headline.fontSize};
  font-weight: ${({ theme }) => theme.fonts.headline.fontWeight};
  line-height: ${({ theme }) => theme.fonts.headline.lineHeight};
  color: ${({ theme }) => theme.colors.neutral.text.default};
`;

const Loading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  width: 100%;
  height: 100%;
`;

export { Loading, LoadingText };
