import { Layout } from '@ui-kitten/components';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TopNavigation } from '../components/ui/TopNavigation';

interface Props {
    title: string;
    subTitle?: string;

    rightAction?: () => void;
    rightActionIcon?: string;

    children: React.ReactNode;
}

export const MainLayout = ({ title, subTitle, rightAction, rightActionIcon, children }:Props) => {
    const { top } = useSafeAreaInsets();
    return (
        <Layout style={{paddingTop: top, flex:1}}>
            <TopNavigation 
                title={title}
                subTitle={subTitle}
            />
            {children}
        </Layout>
    );
}
