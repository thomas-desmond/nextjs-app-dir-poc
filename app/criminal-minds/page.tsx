import ClientStuff from "./clientStuff";
import DynamicStuff from "./dynamicStuff";
import StaticStuff from "./staticStuff";

export default async function Page() {

    return (
        <>
            {/* @ts-expect-error Server Component */}
            <StaticStuff />
            {/* @ts-expect-error Server Component */}
            <DynamicStuff />  
            <ClientStuff />
        </>
    )
}