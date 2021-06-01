// API Loader for main endpoint. Currently just for test purposes
export async function getMainData():Promise<any> {
    const res = await fetch("/api/main");

    return await res.json()
}
