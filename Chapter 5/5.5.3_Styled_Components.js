import styled from 'styled-components/native';

const Button = styled.TouchableOpacity\`
  background: \${props => props.primary ? '#47f' : '#eee'};
  padding: 12px 24px;
  border-radius: 8px;
\`;

<Button primary>
  <Text>Styled!</Text>
</Button>