import { Layout } from "@ui-kitten/components";
import { Spinner } from "./Spinner";

export const FullScreenLoader = () => {
    return (
        <Layout style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <Spinner size={70} />
        </Layout>
    )
}
