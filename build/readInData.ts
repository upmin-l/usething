import fg from 'fast-glob'



export default async function listPackages(dir:string) {
    const files = await fg('*', {
        onlyDirectories: true,
        cwd: dir,
    })
    files.sort()
    return files
}

export async function readCoreData(){

}
async function run() {

}

run()
