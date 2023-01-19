import ClientComponent from "./clientComponent";
import DynamicComponent from "./dynamicComponent";
import StaticComponent from "./staticComponent";

export default async function Page() {

    return (
        <>
            {/* @ts-expect-error Server Component */}
            <StaticComponent />
            {/* @ts-expect-error Server Component */}
            <DynamicComponent />  
            <ClientComponent />
        </>
    )
}