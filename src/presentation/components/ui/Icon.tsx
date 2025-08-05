import Icons from 'react-native-vector-icons/Ionicons';

interface Props {
  name: string;
  size?: number;
  color?: string;
}

export const Icon = ({ name, size=20, color='black' }:Props) => {
  return (
    <Icons name={name} color={color} size={size} />
  )
}
